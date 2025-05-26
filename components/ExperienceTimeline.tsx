
import React from 'react';
import TimelineItem from './TimelineItem.tsx';

function ExperienceTimeline({ id, experiences }) {
  if (!experiences || experiences.length === 0) {
    return (
      <section id={id} className="py-16 sm:py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">경력</h2>
           <p className="text-slate-400">등록된 경력 정보가 없습니다.</p>
        </div>
      </section>
    );
  }
  return (
    <section id={id} className="py-16 sm:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12 text-center">
          성장 <span className="text-teal-400">여정</span>
        </h2>
        <div className="relative">
          {/* The vertical line is achieved by the `before` pseudo-element in TimelineItem */}
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} isLast={index === experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceTimeline;
