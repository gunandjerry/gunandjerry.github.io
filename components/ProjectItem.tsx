
import React from 'react';

function ProjectItem({ project, onSelect }) {
  const MAX_TAGS_VISIBLE = 6;

  return (
    <div 
      className="bg-slate-800 rounded-xl shadow-xl overflow-hidden flex flex-col cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:shadow-teal-500/30"
      onClick={() => onSelect(project)}
    >
      <img src={project.image} alt={project.title} className="w-full aspect-[4/3] object-cover group-hover:opacity-80 transition-opacity" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-teal-400 mb-2 group-hover:text-teal-300 transition-colors">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-4 flex-grow group-hover:text-slate-300 transition-colors">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, MAX_TAGS_VISIBLE).map(tech => ( // Show max 6 tags
            <span key={tech} className="bg-slate-700 text-teal-400 px-3 py-1.5 text-base font-bold rounded-full group-hover:bg-teal-500/20 group-hover:text-teal-300 transition-colors">
              {tech}
            </span>
          ))}
          {project.technologies.length > MAX_TAGS_VISIBLE && (
            <span className="bg-slate-700 text-teal-400 px-3 py-1.5 text-base font-bold rounded-full group-hover:bg-teal-500/20 group-hover:text-teal-300 transition-colors">
              +{project.technologies.length - MAX_TAGS_VISIBLE} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
