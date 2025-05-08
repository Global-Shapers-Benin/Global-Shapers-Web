import React from 'react';
import PropTypes from 'prop-types';
import { ArrowUpRight } from 'lucide-react';

const DynamicButton = ({ 
  text, 
  link = "#", 
  className = "",
  onClick = () => {},
  type = "link"
}) => {
  return (
    <a
      href={link}
      role={type === "button" ? "button" : undefined}
      onClick={onClick}
      className={`flex gap-0.5 relative items-center ${className}`}
      aria-label={text || "Dynamic button"}
    >
      <div className="bg-blue-700 px-4 py-2 font-Merriweather rounded-full font-semibold shadow-lg hover:bg-blue-800 transition-colors duration-200">
        {text}
      </div>
      <div className="w-2 h-5 bg-blue-700 absolute right-[24%]"></div>
      <div className="bg-blue-700 rounded-full p-2 hover:bg-blue-800 transition-colors duration-200">
        <ArrowUpRight className="w-6 h-6" />
      </div>
    </a>
  );
};

DynamicButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "link"])
};

export default DynamicButton;