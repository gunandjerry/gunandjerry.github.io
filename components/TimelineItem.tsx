
import React from 'react';

function TimelineItem({ experience, isLast }) {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* Dot */}
      <div className="flex items-center mb-1 sm:mb-0 before:absolute before:left-2 sm:before:left-0 before:h-full before:w-px before:bg-slate-700 group-hover:before:bg-teal-500 transition-colors duration-300">
        <div className="absolute left-2 sm:left-0 z-10 w-4 h-4 bg-slate-600 group-hover:bg-teal-500 rounded-full transform -translate-x-1/2 transition-colors duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="ml-4 sm:ml-8">
        <div className="flex flex-col sm:flex-row sm:items-center mb-1">
          <h3 className="text-lg sm:text-xl font-semibold text-teal-400 group-hover:text-teal-300 transition-colors duration-300">{experience.role}</h3>
          <span className="text-xs sm:text-sm text-slate-500 sm:ml-2">@ {experience.company}</span>
        </div>
        <p className="text-sm text-slate-400 mb-2">{experience.period}</p>
        <p className="text-slate-300 leading-relaxed mb-3">{experience.description}</p>
        {experience.learnings && experience.learnings.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-1">배운 점:</h4>
            <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
              {experience.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default TimelineItem;
