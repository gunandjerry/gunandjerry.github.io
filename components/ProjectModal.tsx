
import React from 'react';
import { Project } from '../types';
import { GithubIcon } from '../constants'; // Assuming GithubIcon is in constants

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-[100] p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 scale-95 opacity-0 animate-modal-appear"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        style={{ animationFillMode: 'forwards' }} // Keep final state of animation
      >
        <style>
          {`
            @keyframes modal-appear {
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            .animate-modal-appear {
              animation-name: modal-appear;
              animation-duration: 0.3s;
              animation-timing-function: ease-out;
            }
          `}
        </style>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden mb-6 shadow-lg">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{project.title}</h2>
        
        {project.role && (
          <p className="text-sm text-blue-300 mb-1"><strong className="font-semibold">역할:</strong> {project.role}</p>
        )}
        {project.duration && (
          <p className="text-sm text-blue-300 mb-4"><strong className="font-semibold">개발 기간:</strong> {project.duration}</p>
        )}

        <div className="prose prose-invert max-w-none text-gray-300 mb-6 leading-relaxed">
          {typeof project.longDescription === 'string' ? <p>{project.longDescription}</p> : project.longDescription}
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-blue-300 mb-2">사용 기술:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-700 text-gray-200 px-3 py-1.5 rounded-md text-sm font-medium shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              프로젝트 보기
            </a>
          )}
          {project.sourceCodeUrl && (
            <a
              href={project.sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <GithubIcon className="w-5 h-5 mr-2" />
              소스 코드
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
