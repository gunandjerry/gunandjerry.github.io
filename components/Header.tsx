
import React from 'react';
import { ContactInfo } from '../types';
import { MailIcon, GithubIcon, BlogIcon, PhoneIcon } from '../constants';

interface HeaderProps {
  contactInfo: ContactInfo;
}

export const Header: React.FC<HeaderProps> = ({ contactInfo }) => {
  const navItems = [
    { label: "프로필", href: "#about" },
    { label: "프로젝트", href: "#projects" },
    { label: "걸어온 과정", href: "#journey" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-md shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#about" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 hover:opacity-80 transition-opacity">
              {contactInfo.name}
            </a>
          </div>
          <nav className="hidden md:flex space-x-6 items-center">
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-3 md:space-x-4">
            {contactInfo.email && (
              <a href={`mailto:${contactInfo.email}`} title={contactInfo.email} className="text-gray-400 hover:text-white transition-colors">
                <MailIcon className="w-6 h-6" />
              </a>
            )}
            {contactInfo.phone && (
              <a href={`tel:${contactInfo.phone}`} title={contactInfo.phone} className="text-gray-400 hover:text-white transition-colors hidden sm:inline-block">
                <PhoneIcon className="w-6 h-6" />
              </a>
            )}
            {/* {contactInfo.githubUrl && (
              <a href={contactInfo.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub" className="text-gray-400 hover:text-white transition-colors">
                <GithubIcon className="w-6 h-6" />
              </a>
            )} */}
            {contactInfo.blogUrl && (
              <a href={contactInfo.blogUrl} target="_blank" rel="noopener noreferrer" title="Tech Blog" className="text-gray-400 hover:text-white transition-colors">
                <BlogIcon className="w-6 h-6" />
              </a>
            )}
          </div>
          {/* Mobile menu button can be added here if needed */}
        </div>
      </div>
       {/* Mobile Navigation (Bottom Bar) - Simpler for this context */}
       <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-2 flex justify-around">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xs font-medium transition-colors flex flex-col items-center"
            >
              <span>{item.label}</span>
            </a>
          ))}
        </div>
    </header>
  );
};
