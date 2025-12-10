import React from "react";
import aboutHero from "../../assets/aboutHero.jpg";
import line from "../../assets/Line.png";
import mobileHero from "../../assets/mobileHero.png"; 

const AboutHero = () => {
  return (
    <main className="overflow-hidden">
      <section className="relative w-full h-[256px] md:h-[600px]">

        {/* SMALL SCREEN BACKGROUND SLOT */}
        <div
          className="absolute inset-0 bg-cover  md:hidden"
          style={{
            backgroundImage: `url(${mobileHero})`, 
          }}
        ></div>

       
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: `url(${aboutHero})`,
          }}
        ></div>

        {/* Overlay (stats bar) - stays the same */}
        <div className="absolute hidden bottom-8 left-0 right-0 md:flex p-2 justify-center space-x-8">
          <div className="relative flex text-3xl items-center justify-between w-full lg:w-[1200px] text-white p-6 rounded-xl text-start min-w-[150px] overflow-hidden text-[clamp(1rem,3vw,4rem)]">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md rounded-xl -z-0"></div>

            <div className="z-10 text-[clamp(0.8rem,2.5vw,3rem)]">
              <h2 className="lg:font-bold font-Montserrat">100 +</h2>
              <p className="sm:mt-[clamp(0.145rem,0.1vw,0.5rem)] leading-6 font-Montserrat">
                Projects completed
              </p>
            </div>

            <img src={line} className="h-10 w-[2px] z-10" alt="" />

            <div className="z-10 text-[clamp(0.8rem,2.5vw,3rem)]">
              <h2 className="lg:font-bold font-Montserrat">10</h2>
              <p className="sm:mt-[clamp(0.145rem,0.1vw,0.5rem)] leading-6 font-Montserrat">
                Milestones
              </p>
            </div>

            <img src={line} className="h-10 w-[2px] z-10" alt="" />

            <div className="z-10 text-[clamp(0.8rem,2.5vw,3rem)]">
              <h2 className="lg:font-bold font-Montserrat">10K +</h2>
              <p className="sm:mt-[clamp(0.145rem,0.1vw,0.5rem)] leading-6 font-Montserrat">
                Lives Impacted
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile stat layout (unchanged) */}
      <div className="container md:hidden flex mt-10 mb-10 mx-auto px-4 lg:px-0 justify-between lg:w-[800px] items-center lg:text-[clamp(1.5rem,3vw,2.5rem)] text-[clamp(1rem,3vw,2rem)] font-Montserrat font-semibold">
        <div className="text-[clamp(0.8rem,2.5vw,3rem)]">
          <h2 className="font-extrabold font-Merriweather">100 +</h2>
          <p>Projects completed</p>
        </div>

        <img src={line} className="h-8 w-[2px] z-10 mx-2" alt="" />

        <div className="text-[clamp(0.8rem,2.5vw,3rem)]">
          <h2 className="font-extrabold font-Merriweather">10</h2>
          <p>Milestones</p>
        </div>

        <img src={line} className="h-8 w-[2px] z-10 mx-2" alt="" />

        <div className="text-[clamp(0.8rem,2.5vw,3rem)]">
          <h2 className="font-extrabold font-Merriweather">10K +</h2>
          <p>Lives Impacted</p>
        </div>
      </div>
    </main>
  );
};

export default AboutHero;
