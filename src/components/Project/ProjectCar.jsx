import React, { useState } from "react";
import { FiArrowUpRight, FiFilter, FiX } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import tradbead from "../../assets/tradbead.png";
import workSeries from "../../assets/worksSeries.png";
import classChildren from "../../assets/class-children.png";
import greenUp from "../../assets/greenUp.png";
import ProjectsBackground from "../../assets/Projects.png";

const categories = [
  "All projects",
  "Entrepreneurship",
  "Education",
  "Environment",
];

const projects = [
  {
    id: 1,
    title: "The Future of Work Series",
    description:
      "A program designed to prepare young people for a technology-driven workplace.",
    category: "Entrepreneurship",
    image: workSeries,
    link: "/WorkSeries",
  },
  {
    id: 2,
    title: "Green Up Initiative",
    description:
      "An initiative focused on environmental sustainability and green practices.",
    category: "Environment",
    image: greenUp,
    link: "/projects/green-up-initiative",
  },
  {
    id: 3,
    title: "Digital Literacy Outreach",
    description:
      "A program to equip students with essential digital skills for the modern world.",
    category: "Education",
    image: classChildren,
    link: "/projects/digital-literacy",
  },
  {
    id: 4,
    title: "Cultural Heritage Revival",
    description:
      "Promoting and preserving traditional cultural practices and heritage.",
    category: "Entrepreneurship",
    image: tradbead,
    link: "/projects/cultural-heritage",
  },
];

const ProjectCar = () => {
  const [selectedCategory, setSelectedCategory] = useState("All projects");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredProjects =
    selectedCategory === "All projects"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Navigation functions for the arrows
  const goToNextProject = () => {
    if (filteredProjects.length > 0) {
      const nextIndex = (activeIndex + 1) % filteredProjects.length;
      setActiveIndex(nextIndex);
      // If you have a Swiper ref, you can use it to programmatically change slides
      // swiperRef.current.slideTo(nextIndex);
    }
  };

  const goToPrevProject = () => {
    if (filteredProjects.length > 0) {
      const prevIndex = (activeIndex - 1 + filteredProjects.length) % filteredProjects.length;
      setActiveIndex(prevIndex);
      // If you have a Swiper ref, you can use it to programmatically change slides
      // swiperRef.current.slideTo(prevIndex);
    }
  };

  // Get current project for navigation links
  const currentProject = filteredProjects[activeIndex] || projects[0];

  return (
    <section className="relative px-4 py-12 lg:px-8">
      <div
        className="absolute top-0 left-0 w-full h-1/2 lg:h-2/3 bg-no-repeat bg-center -z-10"
        style={{
          backgroundImage: `url(${ProjectsBackground})`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="relative z-10">
        {/* Desktop Filter */}
        <div className="hidden md:flex gap-4 mb-6 bg-black p-4 rounded-xl justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#fcf8f8] text-black font-bold"
                  : "text-white"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile Filter Icon */}
        <div className="block md:hidden flex justify-end mb-6">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="p-2 bg-black text-white rounded-full"
          >
            <FiFilter size={24} />
          </button>
        </div>

        {/* Mobile Filter Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            isFilterOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4">
            <div className="flex text-black justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Projects</h3>
              <button onClick={() => setIsFilterOpen(false)}>
                <FiX size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsFilterOpen(false);
                  }}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-black text-white font-bold"
                      : "text-black border"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[clamp(0.7rem,1.575rem,2rem)] font-bold">
            Impact Projects ({filteredProjects.length})
          </h2>
          <Link
            to="/WorkSeries"
            className="text-blue-500 flex items-center gap-1 hover:underline"
          >
            Explore <FiArrowUpRight />
          </Link>
        </div>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 1.7 },
            1024: { slidesPerView: 1.7 },
          }}
          className="w-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {filteredProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="group relative overflow-hidden shadow-lg transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-[clamp(100px,100%,762px)] h-[clamp(200px,auto,680px)] object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rounded-2xl"
                  />
                </div>

                <div className="bg-black flex justify-between items-center p-8">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <Link to={project.link} className="text-white text-xl">
                    <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center">
                      <FiArrowUpRight />
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-between md:justify-end md:gap-4 lg:self-end lg:gap-6 mt-16">
          {/* Left Arrow - Previous Project */}
          <Link 
            to={filteredProjects[(activeIndex - 1 + filteredProjects.length) % filteredProjects.length]?.link || "#"} 
            className="text-white text-2xl"
            onClick={(e) => {
              if (!filteredProjects.length) e.preventDefault();
              goToPrevProject();
            }}
          >
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
              <ArrowLeft />
            </div>
          </Link>
          
          {/* Right Arrow - Next Project or Current Project Details */}
          <Link 
            to={currentProject?.link || "#"} 
            className="text-white text-2xl"
          >
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
              <ArrowUpRight />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectCar;