
import React from 'react';
import ImageCarousel from './ImageCarousel.tsx';

// Data structure interfaces
interface SectionData {
  id: string;
  subTitle: string;
  paragraphs: string[];
  images: string[];
  button?: {
    text: string;
    description: string;
    link: string;
  }
}

interface LearningJourneyProps {
  id:string;
  data: {
    title: string;
    subTitle: string;
    sections: SectionData[];
  };
}

// Icon for the call-to-action button
const ChevronRightCircleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// Main Learning Journey Component
function LearningJourney({ id, data }: LearningJourneyProps) {
  if (!data || !data.sections || data.sections.length === 0) {
    return null;
  }

  return (
    <section id={id} className="py-16 sm:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            <span className="text-teal-400">성장</span> 기록
            {/* {data.title} */}
          </h2>
          <p className="mt-4 text-lg text-teal-400">{data.subTitle}</p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {data.sections.map((section, index) => (
            <div
              key={section.id}
              className={`flex flex-col md:flex-row items-center gap-10 lg:gap-16`}
            >
              {/* Text Content */}
              <div className={`md:w-1/2 w-full animate-fade-in`}>
                <h3 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-4">
                  {section.subTitle}
                </h3>
                <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
                  {section.paragraphs.map((p, pIndex) => (
                    <p key={pIndex}>{p}</p>
                  ))}
                </div>

                {section.button && (
                  <a
                    href={section.button.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-slate-800 rounded-xl shadow-lg p-5 mt-8 flex items-center justify-between transition-all duration-300 ease-in-out hover:shadow-teal-500/30 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-teal-400 block"
                  >
                    <div className="pr-4">
                      <h4 className="text-md sm:text-lg font-bold text-teal-400 group-hover:text-teal-300 transition-colors">
                        {section.button.text}
                      </h4>
                      <p className="text-sm text-slate-400 mt-1 group-hover:text-slate-300 transition-colors">
                        {section.button.description}
                      </p>
                    </div>
                    <ChevronRightCircleIcon className="w-9 h-9 text-slate-600 group-hover:text-teal-400 transition-all duration-300 ease-in-out transform group-hover:scale-110 flex-shrink-0 ml-4" />
                  </a>
                )}
              </div>

              {/* Image Carousel */}
              <div className={`md:w-1/2 w-full animate-fade-in`}>
                 <ImageCarousel images={section.images} alt={section.subTitle} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningJourney;
