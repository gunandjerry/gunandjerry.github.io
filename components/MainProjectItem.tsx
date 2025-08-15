import React from 'react';
import ImageCarousel from './ImageCarousel.tsx';
import { DocumentTextIcon, CheckCircleIcon } from '../constants.tsx';

function MainProjectItem({ project, onSelect }) {

  const textContent = (
    <div className="md:w-1/2 w-full animate-fade-in flex flex-col items-center md:items-start text-center md:text-left">
        <h3 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-4">{project.title}</h3>
        
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
            {project.technologies.slice(0, 7).map(tech => (
              <span key={tech} className="bg-slate-700 text-teal-300 px-3 py-1 text-xs rounded-full">{tech}</span>
            ))}
            {project.technologies.length > 7 && (
                <span className="bg-slate-700 text-teal-300 px-3 py-1 text-xs rounded-full">+{project.technologies.length - 7}</span>
            )}
        </div>

        <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6 max-w-xl whitespace-pre-line">{project.shortDescription}</p>

        {/* Implementation Features */}
        {project.implementationFeatures && project.implementationFeatures.length > 0 && (
          <div className="w-full max-w-xl mb-8">
            <h4 className="font-semibold text-slate-200 mb-3 text-center md:text-left">주요 구현 내용</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {project.implementationFeatures.map((feature) => (
                <div key={feature} className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-teal-400 mr-2 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Even Bigger Button */}
        <button
          onClick={() => onSelect(project)}
          className="w-full md:w-auto inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-bold py-5 px-12 text-xl rounded-xl shadow-lg transition-transform transform hover:scale-105"
        >
          <DocumentTextIcon className="w-7 h-7 mr-4" />
          자세히 보기
        </button>
    </div>
  );

  const imageContent = (
    <div className="md:w-1/2 w-full animate-fade-in">
        <ImageCarousel images={project.images || [project.image]} alt={project.title} />
    </div>
  );
  
  // Remove alternating layout logic
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        {textContent}
        {imageContent}
    </div>
  );
}

export default MainProjectItem;