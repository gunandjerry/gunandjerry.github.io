
import React from 'react';
import { CALL_TO_ACTION_DATA } from '../constants.tsx'; 

// Simple icon for visual cue, local to this component.
const ChevronRightCircleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const CallToActionBanner = () => {
    // If data is not available, render nothing.
    if (!CALL_TO_ACTION_DATA || CALL_TO_ACTION_DATA.length === 0) {
        return null;
    }

    return (
        <section className="bg-slate-800/30 pb-20 sm:pb-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-6">
                    {CALL_TO_ACTION_DATA.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-slate-800 rounded-2xl shadow-xl overflow-hidden flex items-stretch transition-all duration-300 ease-in-out hover:shadow-teal-500/40 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-teal-400"
                        >
                            {/* Image Container */}
                            <div className="relative w-1/3 md:w-2/5 flex-shrink-0 overflow-hidden isolate">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-800" aria-hidden="true"></div>
                            </div>

                            {/* Content Container */}
                            <div className="relative p-12 sm:p-16 flex-grow flex items-center justify-between">
                                <div className="pr-4">
                                    <h3 className="text-lg sm:text-xl font-bold text-teal-400 mb-2 group-hover:text-teal-300 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                                        {item.description}
                                    </p>
                                </div>
                                <ChevronRightCircleIcon className="w-10 h-10 text-slate-600 group-hover:text-teal-400 transition-all duration-300 ease-in-out transform group-hover:scale-110 ml-4 flex-shrink-0 hidden sm:block" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CallToActionBanner;