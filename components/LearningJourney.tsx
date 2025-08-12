
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../constants.tsx';

// Data structure interfaces
interface SectionData {
  id: string;
  subTitle: string;
  paragraphs: string[];
  images: string[];
  button?: {
    text: string;
    description: string;
    link: string;
  }
}

interface LearningJourneyProps {
  id:string;
  data: {
    title: string;
    subTitle: string;
    sections: SectionData[];
  };
}

// Icon for the call-to-action button
const ChevronRightCircleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// Self-contained Image Carousel component for each section
const ImageCarousel = ({ images, alt }: { images: string[], alt: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const slideContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startPosRef = useRef(0);
  const currentTranslateRef = useRef(0);
  const prevTranslateRef = useRef(0);
  const animationFrameIdRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);
  const containerWidthRef = useRef(0);

  const setTransformPositionByIndex = () => {
    if (slideContainerRef.current) {
      isAnimatingRef.current = true;
      currentTranslateRef.current = currentIndex * -containerWidthRef.current;
      prevTranslateRef.current = currentTranslateRef.current;
      slideContainerRef.current.style.transition = 'transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)';
      slideContainerRef.current.style.transform = `translateX(${currentTranslateRef.current}px)`;
      
      const animationTimeout = setTimeout(() => {
        if(slideContainerRef.current) slideContainerRef.current.style.transition = 'none';
        isAnimatingRef.current = false;
      }, 400);

      return () => clearTimeout(animationTimeout);
    }
  };

  useEffect(() => {
    const updateWidth = () => {
      if (slideContainerRef.current?.parentElement) {
        containerWidthRef.current = slideContainerRef.current.parentElement.offsetWidth;
        setTransformPositionByIndex();
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isDraggingRef.current) {
        const cleanup = setTransformPositionByIndex();
        return cleanup;
    }
  }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const getPositionX = (event: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent) => {
    return 'touches' in event ? event.touches[0].clientX : event.pageX;
  };
  
  const dragStart = (event: React.MouseEvent | React.TouchEvent) => {
    // If the click is on a button, do not initiate drag.
    // This allows button clicks to function correctly.
    if ((event.target as HTMLElement).closest('button')) {
      return;
    }
    
    event.preventDefault();
    if (isAnimatingRef.current) return;
    
    isDraggingRef.current = true;
    startPosRef.current = getPositionX(event);
    if (slideContainerRef.current) {
      slideContainerRef.current.style.transition = 'none';
    }

    window.addEventListener('mousemove', dragMove);
    window.addEventListener('touchmove', dragMove, { passive: false });
    window.addEventListener('mouseup', dragEnd);
    window.addEventListener('touchend', dragEnd);
  };
  
  const dragMove = (event: MouseEvent | TouchEvent) => {
    if (!isDraggingRef.current) return;
    if ('touches' in event) event.preventDefault();
    
    const currentPosition = getPositionX(event);
    currentTranslateRef.current = prevTranslateRef.current + currentPosition - startPosRef.current;
    
    if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);

    animationFrameIdRef.current = requestAnimationFrame(() => {
        if(slideContainerRef.current) {
            slideContainerRef.current.style.transform = `translateX(${currentTranslateRef.current}px)`;
        }
    });
  };

  const dragEnd = () => {
    if (!isDraggingRef.current) return;

    window.removeEventListener('mousemove', dragMove);
    window.removeEventListener('touchmove', dragMove);
    window.removeEventListener('mouseup', dragEnd);
    window.removeEventListener('touchend', dragEnd);

    isDraggingRef.current = false;
    if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
    }

    const movedBy = currentTranslateRef.current - prevTranslateRef.current;
    if (movedBy < -50 && currentIndex < totalImages - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (movedBy > 50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setTransformPositionByIndex();
    }
  };

  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', dragMove);
      window.removeEventListener('touchmove', dragMove);
      window.removeEventListener('mouseup', dragEnd);
      window.removeEventListener('touchend', dragEnd);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  const handleNext = () => {
    if (isAnimatingRef.current || currentIndex >= totalImages - 1) return;
    setCurrentIndex((prev) => prev + 1);
  };
  
  const handlePrev = () => {
    if (isAnimatingRef.current || currentIndex <= 0) return;
    setCurrentIndex((prev) => prev - 1);
  };

  if (totalImages === 0) return null;

  return (
    <div
      className="relative w-full rounded-2xl shadow-2xl overflow-hidden group bg-slate-800 touch-pan-y cursor-grab active:cursor-grabbing"
      onMouseDown={dragStart}
      onTouchStart={dragStart}
    >
      <div
        ref={slideContainerRef}
        className="flex"
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={src}
              alt={`${alt} - slide ${index + 1}`}
              className="w-full object-cover aspect-[4/3] pointer-events-none select-none"
              loading={index === 0 ? 'eager' : 'lazy'}
              draggable="false"
            />
          </div>
        ))}
      </div>
      
      {totalImages > 1 && (
        <>
          <button 
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-slate-700/50 hover:bg-teal-500 text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-10"
            aria-label="Previous image"
            disabled={currentIndex === 0}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-slate-700/50 hover:bg-teal-500 text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-10"
            aria-label="Next image"
            disabled={currentIndex === totalImages - 1}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); if(!isAnimatingRef.current) setCurrentIndex(index); }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-teal-400 scale-125' : 'bg-slate-500/70 hover:bg-slate-300'}`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};


// Main Learning Journey Component
function LearningJourney({ id, data }: LearningJourneyProps) {
  if (!data || !data.sections || data.sections.length === 0) {
    return null;
  }

  return (
    <section id={id} className="py-16 sm:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            {data.title}
          </h2>
          <p className="mt-4 text-lg text-teal-400">{data.subTitle}</p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {data.sections.map((section, index) => (
            <div
              key={section.id}
              className={`flex flex-col md:flex-row items-center gap-10 lg:gap-16`}
            >
              {/* Text Content */}
              <div className={`md:w-1/2 w-full animate-fade-in`}>
                <h3 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-4">
                  {section.subTitle}
                </h3>
                <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
                  {section.paragraphs.map((p, pIndex) => (
                    <p key={pIndex}>{p}</p>
                  ))}
                </div>

                {section.button && (
                  <a
                    href={section.button.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-slate-800 rounded-xl shadow-lg p-5 mt-8 flex items-center justify-between transition-all duration-300 ease-in-out hover:shadow-teal-500/30 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-teal-400 block"
                  >
                    <div className="pr-4">
                      <h4 className="text-md sm:text-lg font-bold text-teal-400 group-hover:text-teal-300 transition-colors">
                        {section.button.text}
                      </h4>
                      <p className="text-sm text-slate-400 mt-1 group-hover:text-slate-300 transition-colors">
                        {section.button.description}
                      </p>
                    </div>
                    <ChevronRightCircleIcon className="w-9 h-9 text-slate-600 group-hover:text-teal-400 transition-all duration-300 ease-in-out transform group-hover:scale-110 flex-shrink-0 ml-4" />
                  </a>
                )}
              </div>

              {/* Image Carousel */}
              <div className={`md:w-1/2 w-full animate-fade-in`}>
                 <ImageCarousel images={section.images} alt={section.subTitle} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningJourney;
