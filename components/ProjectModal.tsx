
import React, { useState, useEffect, useRef } from 'react';
import { CloseIcon, GitHubIcon, ExternalLinkIcon } from '../constants.tsx';

function ProjectModal({ project, onClose }) {
  const [internalVisible, setInternalVisible] = useState(false); // For animation control
  const contentPanelRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (project) {
      // Modal is being opened or project changed
      const timer = setTimeout(() => {
        setInternalVisible(true);
      }, 10); // Delay for entry animation
      return () => clearTimeout(timer);
    } else {
      // Modal is being closed
      setInternalVisible(false);
    }
  }, [project]);
  
  // Effect for observing sections in view for TOC highlighting
  useEffect(() => {
    // Only setup if project exists, modal is intended to be visible, content is there, and it's a structured description
    if (!project || !internalVisible || !contentPanelRef.current || !Array.isArray(project.longDescription) || project.longDescription.length === 0) {
      // Cleanup if observer was previously active and conditions are no longer met
      // The return function from a previous successful setup will handle specific observer instance cleanup.
      return; 
    }

    const currentContentPanel = contentPanelRef.current; // Capture ref value for use in this effect scope

    // Set initial active section when modal with TOC becomes visible
    if (project.longDescription[0]?.id) {
      setActiveSection(`modal-section-${project.longDescription[0].id}`);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { // Simpler and often more reliable than ratio checks for this use case
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        root: currentContentPanel, 
        threshold: 0.5, // Trigger when 50% of the section is visible
        rootMargin: "-40px 0px -40px 0px" // Adjust for potential fixed/sticky elements within the scroll root
      }
    );

    const elementsToObserve = [];
    project.longDescription.forEach((section) => {
      const el = currentContentPanel.querySelector(`#modal-section-${section.id}`);
      if (el) {
        observer.observe(el);
        elementsToObserve.push(el);
      }
    });

    return () => { // Cleanup function for this specific observer instance
      elementsToObserve.forEach((el) => {
        observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, [project, internalVisible]); // Depend on project and internal animation state


  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const scrollToSection = (sectionId) => {
    if (contentPanelRef.current) {
      const element = contentPanelRef.current.querySelector(`#${sectionId}`);
      if (element) {
        const elementPosition = element.offsetTop - 10; // 10px buffer from top of scrollable area
        contentPanelRef.current.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        });
        setActiveSection(sectionId); // Manually set active section on click for immediate feedback
      }
    }
  };

  if (!project) return null; // Primary guard: if no project, render nothing

  const isStructuredDescription = Array.isArray(project.longDescription) && project.longDescription.length > 0;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex items-center justify-center z-[100] p-4
                  transition-opacity duration-300 ease-out ${internalVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`bg-slate-800 rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col
                    transform transition-all duration-300 ease-out
                    ${internalVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
      >
        {/* Modal Header */}
        <div className="flex-shrink-0 p-4 sm:p-6 border-b border-slate-700 flex justify-between items-start">
          <h2 className="text-2xl sm:text-3xl font-bold text-teal-400">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-teal-400 transition-colors"
            aria-label="Close modal"
          >
            <CloseIcon className="w-7 h-7" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex flex-grow overflow-hidden">
          {/* Table of Contents (TOC) */}
          {isStructuredDescription && (
            <nav className="w-48 md:w-56 flex-shrink-0 p-4 sm:p-6 border-r border-slate-700 overflow-y-auto styled-scrollbar hidden md:block">
              <h4 className="text-md sm:text-lg font-semibold text-slate-100 mb-3 sm:mb-4">목차</h4>
              <ul>
                {project.longDescription.map(section => (
                  <li key={section.id} className="mb-1.5 sm:mb-2">
                    <button
                      onClick={() => scrollToSection(`modal-section-${section.id}`)}
                      className={`text-left w-full text-sm sm:text-base px-2 py-1 rounded
                                  ${activeSection === `modal-section-${section.id}` ? 'text-teal-400 bg-teal-500/10 font-semibold' : 'text-slate-400 hover:text-teal-300 hover:bg-slate-700/50'}
                                  transition-all duration-150 ease-in-out`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Main Scrollable Content */}
          <div ref={contentPanelRef} className="relative flex-grow p-4 sm:p-6 overflow-y-auto styled-scrollbar">
            <img src={project.image} alt={project.title} className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4 sm:mb-6 shadow-lg" />

            {/* Long Description */}
            {isStructuredDescription ? (
              project.longDescription.map(section => (
                <section key={section.id} id={`modal-section-${section.id}`} className="mb-6 sm:mb-8 scroll-mt-4 md:scroll-mt-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-teal-300 mb-2 sm:mb-3">
                    {section.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed whitespace-pre-wrap text-sm sm:text-base">{section.content}</p>
                  {section.image && (
                    <>
                      <img 
                        src={section.image} 
                        alt={`Image for ${section.title}`} 
                        className="w-full h-auto object-cover rounded-md my-3 sm:my-4 shadow-md"
                      />
                      <hr className="my-4 sm:my-6 border-slate-600" />
                    </>
                  )}
                </section>
              ))
            ) : (
              <p className="text-slate-300 leading-relaxed mb-6 whitespace-pre-wrap text-sm sm:text-base">{project.longDescription}</p>
            )}

            {/* Technologies */}
            <div className="mb-6 pt-4 border-t border-slate-700 mt-6 sm:mt-8">
              <h4 className="text-lg font-semibold text-slate-100 mb-2">주요 기술:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="bg-teal-500/20 text-teal-300 px-3 py-1 text-xs sm:text-sm rounded-full">{tech}</span>
                ))}
              </div>
            </div>

            {/* Links (GitHub, Live Demo) */}
            {(project.sourceLink || project.liveLink) && (
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 border-t border-slate-700 mt-6">
                {project.sourceLink && (
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-slate-100 font-medium py-2 px-4 rounded-lg transition-colors text-sm sm:text-base"
                  >
                    <GitHubIcon className="w-5 h-5 mr-2" />
                    소스 코드
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm sm:text-base"
                  >
                    <ExternalLinkIcon className="w-5 h-5 mr-2" />
                    라이브 데모
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
