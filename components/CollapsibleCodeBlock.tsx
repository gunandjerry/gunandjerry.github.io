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

interface CollapsibleCodeBlockProps {
  code: string;
  title?: string;
  language?: string;
}

const CollapsibleCodeBlock: React.FC<CollapsibleCodeBlockProps> = ({ code, title = "Code Snippet", language }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const uniqueId = React.useId();
  const contentId = `code-block-content-${uniqueId}`;

  return (
    <div className="my-4 sm:my-6 rounded-lg border border-slate-600 shadow-md bg-slate-800/30">
      <button
        type="button"
        onClick={toggleOpen}
        className="w-full bg-slate-700/70 hover:bg-slate-700 px-4 py-3 flex justify-between items-center cursor-pointer rounded-t-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800 transition-colors"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="text-sm font-medium text-slate-100 text-left">
          {title}
          {language && <span className="text-xs text-slate-400 ml-2">({language})</span>}
        </span>
        {isOpen ? <ChevronUpIcon className="w-5 h-5 text-slate-300 flex-shrink-0" /> : <ChevronDownIcon className="w-5 h-5 text-slate-300 flex-shrink-0" />}
      </button>
      {isOpen && (
        <div id={contentId} className="bg-slate-800/50 rounded-b-lg">
          <pre className="p-4 text-sm text-slate-200 overflow-x-auto styled-scrollbar whitespace-pre-wrap break-words leading-relaxed">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default CollapsibleCodeBlock;
