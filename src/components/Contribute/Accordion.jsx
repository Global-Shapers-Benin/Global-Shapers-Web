// /components/Accordion.jsx
import React from 'react';

const Accordion = ({ question, answer, isOpen, setIsOpen }) => {
  return (
    <div
      className={`py-4 px-4 border rounded-lg transition-colors duration-300 ${
        isOpen ? ' bg-[#252525]' : 'border-gray-300'
      }`}
    >
      <button
        onClick={() => setIsOpen(question)}
        className="flex justify-between items-center w-full focus:outline-none"
      >
        <span className="font-bold text-base font-open-sans text-left">
          {question}
        </span>
        <svg
          className={`transform fill-current transition-transform  duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <rect y="7" width="16" height="2" rx="1" />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            transform="rotate(90 8 8)"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-sm text-gray-100 font-open-sans">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
