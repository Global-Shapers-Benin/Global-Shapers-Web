import React from "react";
import aboutHero from "../../assets/aboutHero.jpg";
import line from "../../assets/Line.png";

const AboutHero = () => {
  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutHero})` }}
    >
      <div className="absolute inset-0"></div>

      <div className="absolute bottom-8 left-0 right-0 flex p-2  justify-center space-x-8">
        <div className="relative flex text-3xl items-center justify-between w-full lg:w-[1200px] text-white p-6 rounded-xl text-start min-w-[150px] overflow-hidden text-[clamp(1rem,3vw,4rem)]">
          {/* Background Blur */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md rounded-xl -z-0"></div>

          <div className="z-10 text-[clamp(1rem,2.5vw,3rem)]">
            <h2 className="lg:font-bold font-Montserrat">100 +</h2>
            <p className="mt-[clamp(0.145rem,0.1vw,0.5rem)] font-Montserrat">Projects completed</p>
          </div>

          <img src={line} className="h-10 w-[2px] z-10" alt="" />

          <div className="z-10 text-[clamp(1rem,2.5vw,3rem)]">
            <h2 className="lg:font-bold font-Montserrat">10</h2>
            <p className="mt-[clamp(0.145rem,0.1vw,0.5rem)] font-Montserrat">Milestones</p>
          </div>

          <img src={line} className="h-10 w-[2px] z-10" alt="" />

          <div className="z-10 text-[clamp(1rem,2.5vw,3rem)]">
            <h2 className="lg:font-bold font-Montserrat">10K +</h2>
            <p className="mt-[clamp(0.145rem,0.1vw,0.5rem)] font-Montserrat">Lives Impacted</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
