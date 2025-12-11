import React, { useState } from 'react';

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const ChevronUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
  </svg>
);

interface CollapsibleContentProps {
  title: string;
  children: React.ReactNode;
}

const CollapsibleContent: React.FC<CollapsibleContentProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-2 rounded-lg border border-slate-600 shadow-md bg-slate-800/30 overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-slate-700/70 hover:bg-slate-700 px-4 py-2 flex justify-between items-center cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-inset"
      >
        <span className="text-sm sm:text-base font-medium text-slate-100 text-left">
          {title}
        </span>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-slate-300 flex-shrink-0 ml-3" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-slate-300 flex-shrink-0 ml-3" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-slate-800/50 border-t border-slate-600 text-slate-300">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleContent;