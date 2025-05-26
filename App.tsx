

import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { LearningJourney } from './components/LearningJourney'; // Corrected import path
import { PROJECTS_DATA, TIMELINE_DATA, CONTACT_INFO } from './constants'; // Constants import
import { Project, TimelineEvent } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header contactInfo={CONTACT_INFO} />

      <main className="pt-28 pb-16 px-4 md:px-8 lg:px-16 max-w-screen-xl mx-auto">
        {/* Profile Intro Section - Minimalist */}
        <section id="about" className="mb-24 text-center">
          <img 
            src="https://picsum.photos/seed/profile/150/150" 
            alt="Profile Picture" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {CONTACT_INFO.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">열정적인 게임 클라이언트 개발자 지망생</p>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            새로운 기술을 배우고 창의적인 게임 경험을 만드는 것을 즐깁니다. 저의 여정과 프로젝트를 살펴보세요.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            프로젝트
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {PROJECTS_DATA.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={handleOpenProjectModal}
              />
            ))}
          </div>
        </section>

        {/* Learning Journey Section */}
        <section id="journey" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            나의 성장 과정
          </h2>
          <LearningJourney events={TIMELINE_DATA} />
        </section>
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseProjectModal}
        />
      )}

      <footer className="text-center p-8 border-t border-gray-700 text-gray-500">
        <p>&copy; {new Date().getFullYear()} {CONTACT_INFO.name}. All rights reserved.</p>
        <p className="text-sm mt-1">이 포트폴리오는 React와 Tailwind CSS로 제작되었습니다.</p>
      </footer>
    </div>
  );
};

export default App;