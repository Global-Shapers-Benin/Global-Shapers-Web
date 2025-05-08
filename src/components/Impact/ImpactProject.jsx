import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Importing images from src/assets folder
import tradbead from "../../assets/tradbead.png";
import workSeries from "../../assets/worksSeries.png";
import classChildren from "../../assets/class-children.png";
import greenUp from "../../assets/greenUp.png";
import ProjectsBackground from "../../assets/projects.png";
import waterstorm from "../../assets/waterstorm.png";
import graduate from "../../assets/graduate.png";

const projects = [
  {
    id: 1,
    title: "The Future of Work Series",
    description:
      "The Future of Work Series, facilitated by the Global Shapers Benin City Hub, is a program designed to prepare young people for a technology-driven workplace. Its primary goal is to provide undergraduate students, recent graduates, and early-career professionals with the skills, knowledge, and networks needed for the evolving world of work.",
    image: workSeries,
  },
  {
    id: 2,
    title: "Green Up Initiative",
    description:
      "The Future of Work Series, facilitated by the Global Shapers Benin City Hub, is a program designed to prepare young people for a technology-driven workplace. Its primary goal is to provide undergraduate students, recent graduates, and early-career professionals with the skills, knowledge, and networks needed for the evolving world of work.",
    image: greenUp,
  },
  {
    id: 3,
    title: "Graduate Employability Program",
    description:
      "The Future of Work Series, facilitated by the Global Shapers Benin City Hub, is a program designed to prepare young people for a technology-driven workplace. Its primary goal is to provide undergraduate students, recent graduates, and early-career professionals with the skills, knowledge, and networks needed for the evolving world of work.",
    image: graduate,
  },
  {
    id: 4,
    title: "Waterstorm Project",
    description:
      "The Future of Work Series, facilitated by the Global Shapers Benin City Hub, is a program designed to prepare young people for a technology-driven workplace. Its primary goal is to provide undergraduate students, recent graduates, and early-career professionals with the skills, knowledge, and networks needed for the evolving world of work.",
    image: waterstorm,
  },
];

const ImpactProjects = () => {
  return (
    <section className="relative px-4 py-12 lg:px-8">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 lg:h-2/3 bg-no-repeat bg-center -z-10"
        style={{
          backgroundImage: `url(${ProjectsBackground})`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[clamp(1rem,3.4vw,3rem)] font-Merriweather">
            Impact Projects
          </h2>
          <a
            href="#"
            className="text-blue-500 flex items-center gap-1 hover:underline"
          >
            Explore <FiArrowUpRight />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden shadow-lg transition-all duration-500"
            >
              {/* Image and Hover Effect */}
              <div className="relative overflow-hidden">
                <LazyLoadImage
                  src={project.image}
                  alt={project.title}
                  effect="blur"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-start">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm mt-2">{project.description}</p>
                </div>
              </div>

              {/* Space between Image and Bottom Div */}
              <div className="mt-4 flex justify-between items-center p-4">
                <h3 className="text-[clamp(0.8rem,2vw,4rem)] text-start font-Montserrat font-semibold">
                  {project.title}
                </h3>
                <a href="#" className="text-white text-xl">
                  <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center">
                    <FiArrowUpRight />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactProjects;
