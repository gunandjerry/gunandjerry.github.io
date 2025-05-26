import React, { useState, useEffect, useCallback } from 'react';
import ProjectItem from './ProjectItem.tsx';
import ProjectModal from './ProjectModal.tsx';
import { ChevronLeftIcon, ChevronRightIcon } from '../constants.tsx';

const DEFAULT_ITEMS_PER_PAGE = 3;

function ProjectCarousel({ id, projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(DEFAULT_ITEMS_PER_PAGE);

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
    // Ensure currentIndex is within new bounds when itemsToShow or projects change
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    } else if (projects.length <= itemsToShow) {
      setCurrentIndex(0);
    }
  }, [itemsToShow, projects.length, currentIndex, maxIndex]);

  const effectiveCurrentIndex = Math.min(currentIndex, maxIndex);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - itemsToShow));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + itemsToShow));
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
      <section id={id} className="py-16 sm:py-24 bg-slate-800/30">
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
  } else if (effectiveCurrentIndex >= maxIndex) {
    activeDotPage = totalPagesToRender - 1;
  } else {
    activeDotPage = Math.floor(effectiveCurrentIndex / itemsToShow);
  }

  return (
    <section id={id} className="py-16 sm:py-24 bg-slate-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12 text-center">
          <span className="text-teal-400">참여</span> 프로젝트
        </h2>
        
        <div className="relative"> {/* Container for viewport, gradients, and arrows */}
          <div className="overflow-hidden"> {/* Viewport */}
            <div 
              className="flex transition-transform duration-500 ease-in-out -ml-3" // -ml-3 for item padding
              style={{ 
                transform: `translateX(-${(effectiveCurrentIndex / itemsToShow) * 100}%)`,
              }}
            >
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  style={{
                    flex: `0 0 calc(100% / ${itemsToShow})`,
                    paddingLeft: '0.75rem', // For 1.5rem gap (gap-6)
                    paddingRight: '0.75rem',
                    boxSizing: 'border-box',
                  }}
                >
                  <ProjectItem project={project} onSelect={handleSelectProject} />
                </div>
              ))}
            </div>
          </div>

          {projects.length > itemsToShow && (
            <>
              {/* Gradient Fades */}
              {/* These gradients should use the section's base background color for smooth fading */}
              <div 
                className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-slate-800/30 to-transparent pointer-events-none z-[5]"
                style={{ marginLeft: '-0.75rem' }} // Adjust to align with item padding visually
              ></div>
              <div 
                className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-slate-800/30 to-transparent pointer-events-none z-[5]"
                style={{ marginRight: '-0.75rem' }} // Adjust to align with item padding visually
              ></div>

              {/* Navigation Arrows */}
              <button 
                onClick={handlePrev} 
                disabled={effectiveCurrentIndex === 0}
                className="absolute top-1/2 -left-4 sm:-left-6 transform -translate-y-1/2 bg-slate-700 hover:bg-teal-500 text-white p-2 sm:p-3 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 z-10"
                aria-label="Previous projects"
              >
                <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button 
                onClick={handleNext} 
                disabled={effectiveCurrentIndex >= maxIndex}
                className="absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 bg-slate-700 hover:bg-teal-500 text-white p-2 sm:p-3 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 z-10"
                aria-label="Next projects"
              >
                <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}
        </div>
        
        {projects.length > itemsToShow && totalPagesToRender > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalPagesToRender }).map((_, pageIndex) => (
                    <button
                        key={pageIndex}
                        onClick={() => setCurrentIndex(Math.min(pageIndex * itemsToShow, maxIndex))}
                        className={`w-3 h-3 rounded-full ${pageIndex === activeDotPage ? 'bg-teal-400' : 'bg-slate-600 hover:bg-slate-500'} transition-colors`}
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
