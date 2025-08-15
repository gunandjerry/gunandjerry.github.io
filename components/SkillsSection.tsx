import React from 'react';
import { CheckCircleIcon } from '../constants.tsx';

function SkillsSection({ id, strengths, skills }) {
  if ((!strengths || strengths.length === 0) && (!skills || skills.length === 0)) {
    return (
      <section id={id} className="py-16 sm:py-24 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">핵심 역량 및 기술</h2>
          <p className="text-slate-400">등록된 역량 및 기술 정보가 없습니다.</p>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="py-16 sm:py-24 bg-slate-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12 sm:mb-16 text-center">
          <span className="text-teal-400">역량</span>과 <span className="text-teal-400">기술</span>
        </h2>

        {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12"> */}

        <div className="max-w-4xl mx-auto">

          {/* Strengths Section */}
          {/* {strengths && strengths.length > 0 && (
            <div className="md:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-teal-400 mb-6 sm:mb-8 flex items-center">
                <CheckCircleIcon className="w-7 h-7 sm:w-8 sm:h-8 mr-3 text-teal-400 flex-shrink-0" />
                강점
              </h3>
              <ul className="space-y-3">
                {strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2.5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-slate-300 leading-relaxed">{strength}</p>
                  </li>
                ))}
              </ul>
            </div>
          )} */}

          {/* Skills Section */}
          {skills && skills.length > 0 && (
            // <div className={`md:col-span-${strengths && strengths.length > 0 ? '3' : '5'}`}>
            <div>
              {/* <h3 className="text-2xl sm:text-3xl font-semibold text-teal-400 mb-6 sm:mb-8 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 sm:w-8 sm:h-8 mr-3 text-teal-400 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5-4.5L7.5 12l2.25 2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
                기술 스택
              </h3> */}
              <div className="space-y-8">
                {skills.map((skillCategory) => (
                  <div key={skillCategory.category}>
                    <h4 className="text-lg sm:text-xl font-semibold text-slate-100 mb-3 sm:mb-4 flex items-center">
                      {skillCategory.icon && <skillCategory.icon className="w-5 h-5 sm:w-6 sm:h-6 mr-2.5 text-teal-400/80" />}
                      {skillCategory.category}
                    </h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {skillCategory.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-slate-700 text-teal-300 px-3 py-1.5 text-sm sm:text-base rounded-md shadow-sm hover:bg-teal-500/30 hover:text-teal-200 transition-all duration-200 ease-in-out cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
