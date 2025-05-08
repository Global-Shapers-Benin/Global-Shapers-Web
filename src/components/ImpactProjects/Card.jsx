import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 group">
      {/* Image Section */}
      <div className="relative w-full h-[80%] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:translate-y-[-10%] group-hover:blur-sm"
        />
      </div>

      {/* Write-up (Initially Hidden, Appears on Hover) */}
      <div className="absolute bottom-15 w-full bg-black/80 text-white p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:translate-y-[-40%]">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm">{description}</p>
      </div>

      {/* Content Below the Card */}
      <div className="p-4  bg-[#1A1A1A]">
        <p className="text-gray-700">This is additional content under the card.</p>
      </div>
    </div>
  );
};

export default Card;
