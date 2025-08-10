
import React from 'react';

interface SectionData {
  id: string;
  subTitle: string;
  paragraphs: string[];
  image: string;
}

interface LearningJourneyProps {
  id:string;
  data: {
    title: string;
    subTitle: string;
    sections: SectionData[];
  };
}

function LearningJourney({ id, data }: LearningJourneyProps) {
  if (!data || !data.sections || data.sections.length === 0) {
    return null;
  }

  return (
    <section id={id} className="py-16 sm:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            {data.title}
          </h2>
          <p className="mt-4 text-lg text-teal-400">{data.subTitle}</p>
        </div>

        <div className="space-y-20 sm:space-y-28">
          {data.sections.map((section) => (
            <div
              key={section.id}
              className="flex flex-col md:flex-row items-center gap-10 lg:gap-16"
            >
              {/* Text Content */}
              <div className="md:w-1/2 w-full">
                <h3 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-4">
                  {section.subTitle}
                </h3>
                <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
                  {section.paragraphs.map((p, pIndex) => (
                    <p key={pIndex}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Image Content */}
              <div className="md:w-1/2 w-full">
                <img
                  src={section.image}
                  alt={section.subTitle}
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningJourney;
