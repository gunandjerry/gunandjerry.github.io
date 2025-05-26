import React, { useState, useEffect, useCallback, useRef } from 'react';
import ProjectItem from './ProjectItem.tsx';
import ProjectModal from './ProjectModal.tsx';
import { ChevronLeftIcon, ChevronRightIcon } from '../constants.tsx';

const DEFAULT_ITEMS_PER_PAGE = 3;

function ProjectCarousel({ id, projects }) {
  const [currentIndex, setCurrentIndex] = useState(0); // Represents the index of the first visible item
  const [selectedProject, setSelectedProject] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(DEFAULT_ITEMS_PER_PAGE);
  
  const viewportRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  const updateItemsToShow = useCallback(() => {
    if (window.innerWidth < 640) { // Tailwind 'sm' breakpoint
      setItemsToShow(1);
    } else if (window.innerWidth < 1024) { // Tailwind 'lg' breakpoint
      setItemsToShow(2);
    } else {
      setItemsToShow(DEFAULT_ITEMS_PER_PAGE);
    }
  }, []);

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, [updateItemsToShow]);
  
  const maxIndex = Math.max(0, projects.length - itemsToShow);
  
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    } else if (projects.length <= itemsToShow) {
      setCurrentIndex(0);
    }
  }, [itemsToShow, projects.length, currentIndex, maxIndex]);

  // Effect to handle smooth scrolling when currentIndex changes (and not dragging)
  useEffect(() => {
    if (viewportRef.current && !isDragging) {
      const pageWidth = viewportRef.current.offsetWidth / itemsToShow; // Width of a single item slot
      const targetScrollLeft = currentIndex * pageWidth;
      
      viewportRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, itemsToShow, isDragging, projects.length]);

  // Effect to handle mouse wheel scrolling for the page
  useEffect(() => {
    const carouselElement = viewportRef.current;
    if (!carouselElement) return;

    const onWheel = (e: WheelEvent) => {
      // Check if the event originated from within the modal.
      // The modal has its own scroll handling.
      if ((e.target as HTMLElement).closest('[role="dialog"]')) {
        return; // Let the modal handle its own scroll.
      }

      // Prevent default behavior (like horizontal scrolling of the carousel itself via wheel)
      e.preventDefault();
      
      // Apply the scroll to the main window/document
      window.scrollBy({
        left: e.deltaX,
        top: e.deltaY,
        behavior: 'auto', 
      });
    };

    carouselElement.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('wheel', onWheel);
      }
    };
  }, []); // Empty dependency array: run once on mount, cleanup on unmount


  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1)); // Scroll one item at a time
  };

  const handleNext = () => {
     // Ensure we don't go beyond the point where the last `itemsToShow` items are visible
    const newIndex = Math.min(currentIndex + 1, projects.length - itemsToShow);
    setCurrentIndex(newIndex);
  };
  
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!viewportRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - viewportRef.current.offsetLeft);
    setScrollLeftStart(viewportRef.current.scrollLeft);
    viewportRef.current.style.scrollBehavior = 'auto'; // Disable smooth scroll during drag
    viewportRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeaveOrUp = () => {
    if (!isDragging || !viewportRef.current) return;
    setIsDragging(false);
    viewportRef.current.style.scrollBehavior = 'smooth';
    viewportRef.current.style.cursor = 'grab';

    const itemWidth = viewportRef.current.scrollWidth / projects.length; // Approximate width of one item including padding
    const currentScroll = viewportRef.current.scrollLeft;
    
    let newIndex = Math.round(currentScroll / itemWidth);
    newIndex = Math.max(0, Math.min(newIndex, projects.length - itemsToShow)); // Clamp to valid range

    setCurrentIndex(newIndex);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !viewportRef.current) return;
    e.preventDefault();
    const x = e.pageX - viewportRef.current.offsetLeft;
    const walk = (x - startX);
    viewportRef.current.scrollLeft = scrollLeftStart - walk;
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };
  
  if (!projects || projects.length === 0) {
    return (
      <section id={id} className="py-20 sm:py-28 bg-slate-800/30"> {/* Adjusted padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">프로젝트</h2>
          <p className="text-slate-400">등록된 프로젝트가 없습니다.</p>
        </div>
      </section>
    );
  }

  const totalPagesToRender = projects.length > 0 ? Math.max(1, Math.ceil(projects.length / itemsToShow)) : 0;
  let activeDotPage;
  if (projects.length <= itemsToShow) {
    activeDotPage = 0;
  } else {
    activeDotPage = Math.floor(currentIndex / itemsToShow); 
    if (currentIndex >= projects.length - itemsToShow && projects.length > itemsToShow) {
        activeDotPage = totalPagesToRender -1;
    }
  }


  return (
    <section id={id} className="py-20 sm:py-28 bg-slate-800/30"> {/* Adjusted padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12 text-center">
          <span className="text-teal-400">참여</span> 프로젝트
        </h2>
        
        <div className="relative">
          <div 
            ref={viewportRef}
            className="flex overflow-x-hidden cursor-grab"
            style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
          >
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="flex-shrink-0" 
                style={{
                  width: `calc(100% / ${itemsToShow})`, 
                  paddingLeft: '0.75rem', 
                  paddingRight: '0.75rem',
                  paddingTop: '1rem', // Added vertical padding
                  paddingBottom: '1rem', // Added vertical padding
                  boxSizing: 'border-box',
                  scrollSnapAlign: 'start', 
                }}
              >
                <ProjectItem project={project} onSelect={handleSelectProject} />
              </div>
            ))}
          </div>

          {projects.length > itemsToShow && (
            <>
              <div 
                className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-slate-800/30 via-slate-800/30 to-transparent pointer-events-none z-[5]"
                style={{ marginLeft: '-0.75rem' }} 
              ></div>
              <div 
                className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-slate-800/30 via-slate-800/30 to-transparent pointer-events-none z-[5]"
                style={{ marginRight: '-0.75rem' }}
              ></div>

              <button 
                onClick={handlePrev} 
                disabled={currentIndex === 0}
                className="absolute top-1/2 -left-6 sm:-left-8 transform -translate-y-1/2 bg-slate-700 hover:bg-teal-500 text-white p-4 sm:p-5 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 z-10"
                aria-label="Previous projects"
              >
                <ChevronLeftIcon className="w-7 h-7 sm:w-8 sm:h-8" />
              </button>
              <button 
                onClick={handleNext} 
                disabled={currentIndex >= projects.length - itemsToShow}
                className="absolute top-1/2 -right-6 sm:-right-8 transform -translate-y-1/2 bg-slate-700 hover:bg-teal-500 text-white p-4 sm:p-5 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 z-10"
                aria-label="Next projects"
              >
                <ChevronRightIcon className="w-7 h-7 sm:w-8 sm:h-8" />
              </button>
            </>
          )}
        </div>
        
        {projects.length > itemsToShow && totalPagesToRender > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPagesToRender }).map((_, pageIndex) => (
              <button
                key={pageIndex}
                onClick={() => {
                  const newIdx = Math.min(pageIndex * itemsToShow, projects.length - itemsToShow);
                  setCurrentIndex(newIdx);
                }}
                className={`w-4 h-4 rounded-full ${pageIndex === activeDotPage ? 'bg-teal-400' : 'bg-slate-600 hover:bg-slate-500'} transition-colors`}
                aria-label={`Go to page ${pageIndex + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
    </section>
  );
}

export default ProjectCarousel;