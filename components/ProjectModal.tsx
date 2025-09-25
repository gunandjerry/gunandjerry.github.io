
import React, { useState, useEffect, useRef } from 'react';
import { CloseIcon, GitHubIcon, ExternalLinkIcon, DocumentTextIcon } from '../constants.tsx';
import EmbeddedVideo from './EmbeddedVideo.tsx';
import CollapsibleCodeBlock from './CollapsibleCodeBlock.tsx';

interface ContentPart {
  type: 'html' | 'video' | 'codeBlock';
  content?: string;        // For HTML
  videoSrc?: string;       // For video src
  videoTitle?: string;     // For video title
  codeContent?: string;    // For code block content
  codeBlockTitle?: string; // For code block title
  language?: string;       // For code block language
}


// Helper function to parse HTML content and separate videos and code blocks
const parseContent = (htmlString: string | undefined | null, defaultVideoTitle: string = "Project Video"): ContentPart[] => {
  if (!htmlString) return [];

  const parts: ContentPart[] = [];
  let remainingHtml = htmlString;

  // Regex for iframe and code-block
  // iframe: captures src (1), title (2, optional)
  const iframeRegex = /<iframe[^>]*src=["'](https?:\/\/(?:www\.)?(?:youtube\.com\/embed\/|player\.vimeo\.com\/video\/)[^"'?]+[^"']*)["'][^>]*?(?:title=["'](.*?)["'])?[^>]*>.*?<\/iframe>/i;
  // code-block: captures title (1, optional), language (2, optional), code (3)
  const codeBlockRegex = /<code-block(?:\s+title=["'](.*?)["'])?(?:\s+language=["'](.*?)["'])?\s*>([\s\S]*?)<\/code-block>/i;

  while (remainingHtml.length > 0) {
    const iframeMatch = remainingHtml.match(iframeRegex);
    const codeBlockMatch = remainingHtml.match(codeBlockRegex);

    let firstMatchIsIframe = false;
    let firstMatchIsCodeBlock = false;
    let matchIndex = Infinity;
    let matchLength = 0;
    let currentMatchDetails: any = null; // To store details of the earliest match

    if (iframeMatch && iframeMatch.index !== undefined) {
      if (iframeMatch.index < matchIndex) {
        matchIndex = iframeMatch.index;
        matchLength = iframeMatch[0].length;
        firstMatchIsIframe = true;
        firstMatchIsCodeBlock = false;
        currentMatchDetails = iframeMatch;
      }
    }

    if (codeBlockMatch && codeBlockMatch.index !== undefined) {
      if (codeBlockMatch.index < matchIndex) {
        matchIndex = codeBlockMatch.index;
        matchLength = codeBlockMatch[0].length;
        firstMatchIsCodeBlock = true;
        firstMatchIsIframe = false;
        currentMatchDetails = codeBlockMatch;
      }
    }

    if (!firstMatchIsIframe && !firstMatchIsCodeBlock) {
      // No more special tags, add remaining as HTML
      if (remainingHtml.trim().length > 0) {
        parts.push({ type: 'html', content: remainingHtml });
      }
      break;
    }

    // Add HTML content before the found tag
    if (matchIndex > 0) {
      const htmlContentBefore = remainingHtml.substring(0, matchIndex);
      if (htmlContentBefore.trim().length > 0) {
         parts.push({ type: 'html', content: htmlContentBefore });
      }
    }

    if (firstMatchIsIframe && currentMatchDetails) {
      const iframeSrc = currentMatchDetails[1];
      const iframeTitle = currentMatchDetails[2] || defaultVideoTitle;
      parts.push({ type: 'video', videoSrc: iframeSrc, videoTitle: iframeTitle });
    } else if (firstMatchIsCodeBlock && currentMatchDetails) {
      const codeTitle = currentMatchDetails[1] || "Code Snippet";
      const codeLang = currentMatchDetails[2] || undefined;
      const code = currentMatchDetails[3].trim(); // Trim the code content itself
      parts.push({ type: 'codeBlock', codeBlockTitle: codeTitle, language: codeLang, codeContent: code });
    }
    
    remainingHtml = remainingHtml.substring(matchIndex + matchLength);
  }
  
  return parts.filter(part => !(part.type === 'html' && (!part.content || part.content.trim() === '')));
};


function ProjectModal({ project, onClose }) {
  const [internalVisible, setInternalVisible] = useState(false);
  const contentPanelRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (project) {
      const timer = setTimeout(() => {
        setInternalVisible(true);
      }, 10);
      document.body.style.overflow = 'hidden'; // Prevent background scroll when modal is open
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'auto'; // Restore scroll on close
      };
    } else {
      setInternalVisible(false);
      document.body.style.overflow = 'auto'; // Ensure scroll is restored if project becomes null
    }
  }, [project]);
  
  useEffect(() => {
    if (!project || !internalVisible || !contentPanelRef.current || !Array.isArray(project.longDescription) || project.longDescription.length === 0) {
      return; 
    }

    const currentContentPanel = contentPanelRef.current;

    if (project.longDescription[0]?.id) {
      setActiveSection(`modal-section-${project.longDescription[0].id}`);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        root: currentContentPanel, 
        threshold: 0.4, 
        rootMargin: "-40px 0px -40px 0px" 
      }
    );

    const elementsToObserve = [];
    project.longDescription.forEach((section) => {
      const mainEl = currentContentPanel.querySelector(`#modal-section-${section.id}`);
      if (mainEl) {
        observer.observe(mainEl);
        elementsToObserve.push(mainEl);
      }
      if (section.subSections) {
        section.subSections.forEach(subSection => {
          const subEl = currentContentPanel.querySelector(`#modal-section-${subSection.id}`);
          if (subEl) {
            observer.observe(subEl);
            elementsToObserve.push(subEl);
          }
        });
      }
    });

    return () => {
      elementsToObserve.forEach((el) => {
        observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, [project, internalVisible]);


  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const scrollToSection = (sectionId) => {
    if (contentPanelRef.current) {
      const element = contentPanelRef.current.querySelector(`#${sectionId}`);
      if (element) {
        const elementPosition = element.offsetTop - 10; 
        contentPanelRef.current.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  if (!project) return null;

  const isStructuredDescription = Array.isArray(project.longDescription) && project.longDescription.length > 0;

  const renderParsedContent = (htmlString: string | undefined | null, keyPrefix: string) => {
    const parts = parseContent(htmlString, `${project.title} - Video`);
    return parts.map((part, index) => {
      const uniqueKey = `${keyPrefix}-part-${index}-${part.type}-${part.videoSrc || part.codeBlockTitle || 'html'}`;
      
      if (part.type === 'video' && part.videoSrc) {
        return <EmbeddedVideo key={uniqueKey} src={part.videoSrc} title={part.videoTitle || `${project.title} Video`} />;
      }
      if (part.type === 'codeBlock' && part.codeContent) {
        return <CollapsibleCodeBlock key={uniqueKey} code={part.codeContent} title={part.codeBlockTitle} language={part.language} />;
      }
      if (part.type === 'html' && part.content && part.content.trim() !== '') {
        return (
          <div 
            key={uniqueKey} 
            className="text-slate-300 leading-relaxed whitespace-pre-wrap text-sm sm:text-base"
            dangerouslySetInnerHTML={{ __html: part.content }} 
          />
        );
      }
      return null;
    });
  };


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

        <div className="flex flex-grow overflow-hidden">
          {isStructuredDescription && (
            <nav className="w-56 md:w-64 flex-shrink-0 p-4 sm:p-6 border-r border-slate-700 overflow-y-auto styled-scrollbar hidden md:block">
              <h4 className="text-md sm:text-lg font-semibold text-slate-100 mb-3 sm:mb-4">목차</h4>
              <ul>
                {project.longDescription.map(section => (
                  <li key={section.id} className="mb-0.5">
                    <button
                      onClick={() => scrollToSection(`modal-section-${section.id}`)}
                      className={`text-left w-full text-sm sm:text-base px-2 py-1.5 rounded font-medium
                                  ${activeSection === `modal-section-${section.id}` && (!section.subSections || !section.subSections.some(sub => activeSection === `modal-section-${sub.id}`)) ? 'text-teal-300 bg-teal-500/10 font-semibold' : 'text-slate-300 hover:text-teal-300 hover:bg-slate-700/50'}
                                  transition-all duration-150 ease-in-out`}
                    >
                      {section.title}
                    </button>
                    {section.subSections && section.subSections.length > 0 && (
                      <ul className="mt-1 mb-1.5">
                        {section.subSections.map(subSection => (
                          <li key={subSection.id}>
                            <button
                              onClick={() => scrollToSection(`modal-section-${subSection.id}`)}
                              className={`text-left w-full text-xs sm:text-sm px-2 py-1 rounded ml-4
                                          ${activeSection === `modal-section-${subSection.id}` ? 'text-teal-400 font-medium' : 'text-slate-400 hover:text-teal-300 hover:bg-slate-700/40'}
                                          transition-all duration-150 ease-in-out`}
                            >
                              {subSection.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div ref={contentPanelRef} className="relative flex-grow p-4 sm:p-6 overflow-y-auto styled-scrollbar scroll-mt-4 md:scroll-mt-6">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full bg-slate-900/50 rounded-lg mb-4 sm:mb-6 shadow-lg" 
            />

            {isStructuredDescription ? (
              project.longDescription.map(section => (
                <React.Fragment key={section.id}>
                  <section id={`modal-section-${section.id}`} className="mb-3 sm:mb-4 scroll-mt-4 md:scroll-mt-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-teal-300 mb-2 sm:mb-3">
                      {section.title}
                    </h3>
                    {section.content && renderParsedContent(section.content, `section-${section.id}`)}
                    {section.button && (
                        <a
                          href={section.button.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center mt-4 bg-slate-700 hover:bg-slate-600 text-slate-100 font-medium py-2 px-4 rounded-lg transition-colors text-sm sm:text-base"
                        >
                          <ExternalLinkIcon className="w-5 h-5 mr-2" />
                          {section.button.text}
                        </a>
                      )}
                  </section>
                  
                  {section.subSections && section.subSections.length > 0 && (
                    <div>
                      {section.subSections.map(subSection => (
                        <section key={subSection.id} id={`modal-section-${subSection.id}`} className="scroll-mt-4 md:scroll-mt-6">
                          <h4 className="text-lg sm:text-xl font-medium text-slate-100 mt-8 mb-1.5 sm:mb-2">
                            {subSection.title}
                          </h4>
                          {subSection.content && renderParsedContent(subSection.content, `subsection-${subSection.id}`)}
                          {subSection.button && (
                            <a
                              href={subSection.button.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center mt-4 bg-slate-700 hover:bg-slate-600 text-slate-100 font-medium py-2 px-4 rounded-lg transition-colors text-sm sm:text-base"
                            >
                              <ExternalLinkIcon className="w-5 h-5 mr-2" />
                              {subSection.button.text}
                            </a>
                          )}
                          <p><br></br></p>
                        </section>
                      ))}
                    </div>
                  )}

                  {section.showDivider && (
                    <hr className="my-6 sm:my-8 border-slate-600" />
                  )}
                </React.Fragment>
              ))
            ) : (
              typeof project.longDescription === 'string' 
                ? renderParsedContent(project.longDescription, `project-${project.id}-desc`)
                : <p className="text-slate-300 leading-relaxed mb-6 whitespace-pre-wrap text-sm sm:text-base">No detailed description available.</p>
            )}

            <div className="mb-6 pt-4 border-t border-slate-700 mt-6 sm:mt-8">
              <h4 className="text-lg font-semibold text-slate-100 mb-2">주요 키워드:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="bg-teal-500/20 text-teal-300 px-3 py-1 text-xs sm:text-sm rounded-full">{tech}</span>
                ))}
              </div>
            </div>

            {(project.sourceLink || project.liveLink || project.blogLink) && (
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
                    영상 보러가기 (유튜브)
                  </a>
                )}
                {project.blogLink && (
                  <a
                    href={project.blogLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm sm:text-base"
                  >
                    <DocumentTextIcon className="w-5 h-5 mr-2" />
                    관련 블로그 글
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
