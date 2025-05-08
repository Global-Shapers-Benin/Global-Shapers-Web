import React, { useState } from "react";
import lj from "../../assets/lj.png";
import ljthumb from "../../assets/ljthumb.png";
import gary from "../../assets/garythumb.png";
import ayo from "../../assets/ayothumb.png";
import lucky from "../../assets/luckythumb.png";
import fred from "../../assets/fredthumb.png";

// Updated testimonials data with fullImage and thumbnail properties
const testimonials = [
  {
    id: 1,
    name: "Lisa Johnson",
    title: "Consulting",
    fullImage: lj,       // original picture
    thumbnail: ljthumb,  // thumbnail
    quote: `“The Global Shapers Benin Hub has been an incredible force for positive change in our community.
            Their commitment to empowering young leaders and driving impactful projects is truly inspiring.”`,
  },
  {
    id: 2,
    name: "Gary James",
    title: "Entrepreneur",
    fullImage: gary, // assuming the full image is the same as the thumbnail here
    thumbnail: gary,
    quote: `“I've witnessed tangible improvements in areas like education, entrepreneurship, and cultural preservation.
            It's amazing how they bring people together.”`,
  },
  {
    id: 3,
    name: "Fred Wilson",
    title: "Community Organizer",
    fullImage: fred,
    thumbnail: fred,
    quote: `“Their passion and dedication have a ripple effect. This hub is a perfect example of youth-led impact
            that benefits everyone around them.”`,
  },
  {
    id: 4,
    name: "Lucky Igbagbon",
    title: "Community Organizer",
    fullImage: lucky,
    thumbnail: lucky,
    quote: `“Their passion and dedication have a ripple effect. This hub is a perfect example of youth-led impact
            that benefits everyone around them.”`,
  },
  {
    id: 5,
    name: "Ayo Akinlabi",
    title: "Community Organizer",
    fullImage: ayo,
    thumbnail: ayo,
    quote: `“Their passion and dedication have a ripple effect. This hub is a perfect example of youth-led impact
            that benefits everyone around them.”`,
  },
];

const partners = [
  { id: 1, logoUrl: "/images/partner-logo.png", alt: "Partner 1" },
  { id: 2, logoUrl: "/images/partner-logo.png", alt: "Partner 2" },
  { id: 3, logoUrl: "/images/partner-logo.png", alt: "Partner 3" },
  { id: 4, logoUrl: "/images/partner-logo.png", alt: "Partner 4" },
  { id: 5, logoUrl: "/images/partner-logo.png", alt: "Partner 5" },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedThumbnail, setExpandedThumbnail] = useState(null);

  // Update main display and collapse any expanded thumbnail when navigating
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setExpandedThumbnail(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setExpandedThumbnail(null);
  };

  // When clicking a thumbnail: update main image and toggle the slide-out panel
  const handleSelectTestimonial = (index) => {
    setCurrentIndex(index);
    setExpandedThumbnail(expandedThumbnail === index ? null : index);
  };

  const { name, title, fullImage, thumbnail, quote } = testimonials[currentIndex];

  return (
    <section className="w-full px-4 py-8 bg-white relative">
      <h2 className="text-2xl font-bold text-center mb-6">
        See what others have to say about Global Shapers Benin City
      </h2>

      {/* Main content container with two columns */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        {/* Left Column: Big image and testimonial text */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          {/* Display the original (full) image */}
          <img
            src={fullImage || thumbnail}
            alt={name}
            className="w-64 h-64 md:w-72 md:h-72 rounded-xl object-cover"
          />
          <div className="text-center md:text-left">
            <blockquote className="text-gray-800 italic mb-4">{quote}</blockquote>
            <p className="text-xl font-semibold">{name}</p>
            <p className="text-gray-600">{title}</p>
          </div>
        </div>

        {/* Right Column: Thumbnails placed at the edge */}
        <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 justify-end">
          {testimonials.map((person, index) => (
            <div className="relative" key={person.id}>
              <img
                src={person.thumbnail}
                alt={person.name}
                onClick={() => handleSelectTestimonial(index)}
                className={`w-12 h-12 rounded-full cursor-pointer object-cover border-2 transition ${
                  index === currentIndex ? "border-blue-600" : "border-transparent"
                }`}
              />
              {/* Slide-out panel for the thumbnail details */}
              <div
                className={`absolute -left-40 top-0 w-32 bg-white p-2 rounded shadow-lg transition-transform duration-300 
                ${expandedThumbnail === index ? "translate-x-0" : "-translate-x-full"}`}
              >
                <p className="text-sm font-bold">{person.name}</p>
                <p className="text-xs text-gray-600">{person.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={handlePrev}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>

      {/* Partners Section */}
      <div className="max-w-5xl mx-auto mt-12">
        <h3 className="text-xl font-bold mb-4">Our Partners</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {partners.map((partner) => (
            <img
              key={partner.id}
              src={partner.logoUrl}
              alt={partner.alt}
              className="w-16 h-16 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
