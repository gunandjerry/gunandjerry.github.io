
import React from 'react';

function Introduction({ id, personalInfo }) {
  return (
    <section id={id} className="py-16 sm:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0 md:mr-12">
          <img 
            src={personalInfo.photo} 
            alt={personalInfo.name} 
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-teal-500/50" 
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-400 mb-4">
            안녕하세요, {personalInfo.name}입니다.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            {personalInfo.introduction}
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a href={`mailto:${personalInfo.email}`} className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              이메일 보내기
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-slate-600 text-slate-100 font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              GitHub 방문하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
