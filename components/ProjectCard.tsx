
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div
      className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30 group cursor-pointer flex flex-col"
      onClick={() => onOpenModal(project)}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-blue-300 group-hover:to-purple-300 transition-all">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">
          {project.shortDescription}
        </p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onOpenModal(project); }}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            자세히 보기
          </button>
        </div>
      </div>
    </div>
  );
};
