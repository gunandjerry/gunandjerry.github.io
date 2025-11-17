import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../constants.tsx';

const ImageCarousel = ({ images, alt, aspectClass = 'aspect-[4/3]' }: { images: string[], alt: string, aspectClass?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;
  const isDraggable = totalImages > 1;

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
    window.addEventListener('touchend', dragEnd);

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
      className={`relative w-full rounded-2xl shadow-2xl overflow-hidden group bg-slate-800 ${isDraggable ? 'touch-pan-y cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
      onMouseDown={isDraggable ? dragStart : undefined}
      onTouchStart={isDraggable ? dragStart : undefined}
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
              className={`w-full object-cover ${aspectClass} pointer-events-none select-none`}
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

export default ImageCarousel;