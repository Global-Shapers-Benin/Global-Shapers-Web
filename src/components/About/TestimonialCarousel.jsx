import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCarousel = () => {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Lisa Johnson",
      title: "Consulting",
      image: "/api/placeholder/200/200",
      quote: "The Global Shapers Benin Hub has been an incredible force for positive change in our community. Their commitment to empowering young leaders and driving impactful projects is truly inspiring. Through their initiatives, I've witnessed tangible improvements in areas like education, entrepreneurship, and cultural preservation."
    },
    {
      id: 2,
      name: "Michael Adams",
      title: "Community Developer",
      image: "/api/placeholder/200/200",
      quote: "Working alongside Global Shapers Benin City has transformed my perspective on what's possible when young people take initiative. Their focus on sustainable development projects has created real change in our region."
    },
    {
      id: 3,
      name: "Amara Okafor",
      title: "Education Advocate",
      image: "/api/placeholder/200/200",
      quote: "The dedication of the Global Shapers Benin team to educational advancement has been remarkable. Their literacy programs have reached hundreds of children who previously had limited access to quality learning resources."
    },
    {
      id: 4,
      name: "Daniel Effiong",
      title: "Tech Entrepreneur",
      image: "/api/placeholder/200/200",
      quote: "As a tech founder, I've been impressed by Global Shapers Benin City's innovative approach to solving local challenges. Their mentorship program has launched several successful startups that are now creating jobs in our community."
    }
  ];

  // Sample partner logos
  const partners = Array(6).fill("/api/placeholder/100/100");

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000); // Advance every 8 seconds
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main element */}
      <div className="flex-1 px-4 py-8 md:px-16 md:py-12">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          See what others have to say about Global Shapers Benin City
        </h1>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel slider */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            {/* Person image */}
            <div className="w-64 h-64 flex-shrink-0">
              <img 
                src={activeTestimonial.image} 
                alt={activeTestimonial.name}
                className="w-full h-full object-cover rounded-full shadow-md" 
              />
            </div>

            {/* Quote */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
              <p className="text-lg text-gray-800 italic mb-4">
                "{activeTestimonial.quote}"
              </p>
              <div className="flex items-center mt-4">
                <div className="text-blue-700 font-semibold">{activeTestimonial.name}</div>
                <div className="mx-2 text-gray-400">•</div>
                <div className="text-gray-600">{activeTestimonial.title}</div>
              </div>
            </div>

            {/* Thumbnails with slide-out effect for active thumbnail only */}
            <div className="hidden md:block">
              <div className="flex flex-col gap-4">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className="relative flex items-center h-16 overflow-visible"
                    onClick={() => goToSlide(index)}
                  >
                    {/* Container for thumbnail and text */}
                    <div className="relative flex items-center">
                      {/* Thumbnail image - slides left when active */}
                      <div 
                        className={`w-16 h-16 rounded-full overflow-hidden cursor-pointer border-2 z-10
                          transition-all duration-300 ease-in-out
                          ${index === activeIndex ? 'border-blue-600 -translate-x-4' : 'border-transparent'}`}
                      >
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      
                      {/* Text shown only for active thumbnail */}
                      <div 
                        className={`ml-4 bg-blue-600 text-white py-2 px-4 rounded-r-lg 
                          transition-all duration-300 ease-in-out cursor-pointer
                          ${index === activeIndex ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0 invisible'}`}
                      >
                        <p className="whitespace-nowrap overflow-hidden text-ellipsis font-medium">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-blue-200 whitespace-nowrap overflow-hidden text-ellipsis">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Partners section */}
      <div className="bg-blue-700 text-white py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Our partners</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((logo, index) => (
              <div key={index} className="bg-white rounded-full p-4 flex items-center justify-center w-24 h-24">
                <img src={logo} alt={`Partner ${index + 1}`} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;