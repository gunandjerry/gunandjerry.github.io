import React from 'react';
import Header from './components/Header.tsx';
import Introduction from './components/Introduction.tsx';
import ProjectCarousel from './components/ProjectCarousel.tsx';
import ExperienceTimeline from './components/ExperienceTimeline.tsx';
import SkillsSection from './components/SkillsSection.tsx';
import Footer from './components/Footer.tsx';
import { PERSONAL_INFO, PROJECTS_DATA, EXPERIENCE_DATA, STRENGTHS_DATA, SKILLS_DATA, SECTION_IDS } from './constants.tsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header personalInfo={PERSONAL_INFO} sectionIds={SECTION_IDS} />
      <main className="flex-grow pt-20 md:pt-24"> {/* Adjusted padding top for fixed header */}
        <Introduction id={SECTION_IDS.INTRODUCTION} personalInfo={PERSONAL_INFO} />
        <ProjectCarousel id={SECTION_IDS.PROJECTS} projects={PROJECTS_DATA} />
        <ExperienceTimeline id={SECTION_IDS.EXPERIENCE} experiences={EXPERIENCE_DATA} />
        <SkillsSection id={SECTION_IDS.SKILLS} strengths={STRENGTHS_DATA} skills={SKILLS_DATA} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
