import React from 'react';
import { GitHubIcon, ExternalLinkIcon } from '../constants.tsx';

function Header({ personalInfo, sectionIds, stringTable }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-800/80 backdrop-blur-md shadow-lg text-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-xl md:text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors">
            {personalInfo.name} ({personalInfo.name_eng})
          </a>
          <span className="ml-2 md:ml-3 text-xs md:text-sm text-slate-400 hidden sm:inline">| {personalInfo.title}</span>
        </div>

        <nav className="hidden md:flex space-x-4">
          <button onClick={() => scrollToSection(sectionIds.INTRODUCTION)} className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">{stringTable.header_navigation_profile}</button>
          <button onClick={() => scrollToSection(sectionIds.PROJECTS)} className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">{stringTable.header_navigation_project}</button>
          {/* <button onClick={() => scrollToSection(sectionIds.LEARNING_JOURNEY)} className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">{stringTable.header_navigation_journey}</button> */}
          {/* <button onClick={() => scrollToSection(sectionIds.EXPERIENCE)} className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">{stringTable.header_navigation_experience}</button> */}
          {/* <button onClick={() => scrollToSection(sectionIds.SKILLS)} className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">{stringTable.header_navigation_skill}</button> */}
        </nav>

        <div className="flex items-center space-x-3 md:space-x-4">
          {/* <a href={`tel:${personalInfo.phone}`} className="text-slate-300 hover:text-teal-400 transition-colors text-xs sm:text-sm">{personalInfo.phone}</a> */}
          {/* <a href={personalInfo.blog} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-teal-400 transition-colors text-xs sm:text-sm">
            Blog
          </a> */}
          {/* <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-teal-400 transition-colors">
            <GitHubIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="sr-only">GitHub</span>
          </a> */}
        </div>
      </div>


       {/* Mobile Navigation */}
       <div className="md:hidden flex justify-around space-x-1 pb-2 border-t border-slate-700/50 pt-2">
          <button onClick={() => scrollToSection(sectionIds.INTRODUCTION)} className="px-2 py-1 rounded-md text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">{stringTable.header_navigation_profile}</button>
          <button onClick={() => scrollToSection(sectionIds.PROJECTS)} className="px-2 py-1 rounded-md text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">{stringTable.header_navigation_project}</button>
          <button onClick={() => scrollToSection(sectionIds.LEARNING_JOURNEY)} className="px-2 py-1 rounded-md text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">{stringTable.header_navigation_journey}</button>
          {/* <button onClick={() => scrollToSection(sectionIds.EXPERIENCE)} className="px-2 py-1 rounded-md text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">{stringTable.header_navigation_experience}</button> */}
          <button onClick={() => scrollToSection(sectionIds.SKILLS)} className="px-2 py-1 rounded-md text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">{stringTable.header_navigation_skill}</button>
       </div>
    </header>
  );
}

export default Header;