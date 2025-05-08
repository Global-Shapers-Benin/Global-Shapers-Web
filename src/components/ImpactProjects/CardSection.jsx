import React from 'react';
import Card from './Card';
import tradbead from "../../assets/tradbead.png";
import workSeries from "../../assets/worksSeries.png";
import classChildren from "../../assets/class-children.png";
import greenUp from "../../assets/greenUp.png";
import ProjectsBackground from '../../assets/Projects.png'; // Import the background image

const CardSection = () => {
  const cardsData = [
    {
      image: workSeries,
      description: 'The Future of Work Series, facilitated by the Global Shapers Benin City Hub, is a program designed to prepare young people for a technology-driven workplace. Its primary goal is to provide undergraduate students, recent graduates, and early-career professionals with the skills, knowledge, and networks needed for the evolving world of work.',
    },
    {
      image: greenUp,
      description: 'The project has achieved notable milestones, including reaching 120 students across five classes and planting five trees. Despite these successes, challenges such as limited team size and budget constraints have restricted the scope of the initiative.',
    },
    {
      image: classChildren,
      
      description: 'Join our green initiatives.',
    },
    {
      image: tradbead,
      
      description: 'Join our green initiatives.',
    },
  ];

  return (
    <div 
      className="container mx-auto px-4 py-8 bg-cover bg-center" 
      style={{ backgroundImage: `url(${ProjectsBackground})` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {cardsData.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;