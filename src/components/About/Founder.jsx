import React from "react";
import founder from "../../assets/founder.png";
import DynamicButton from "../DynamicButton";
import founderMob from "../../assets/founderMob.png";

/**
 * Sample component illustrating:
 * 1. White background on the left (2/3 width).
 * 2. Light-blue background on the right (1/3 width).
 * 3. A black strip below both.
 * 4. A content card overlapping these backgrounds.
 */

const FounderSection = () => {
  return (
    <section className="relative w-full">
      {/* Top portion: two unequal columns */}
      <div className="flex w-full h-[350px]">
        <div className="w-1/3 bg-[#d0daec]" />
        <div className="w-2/3 bg-[#F0F7FF]" />
      </div>

      {/* Bottom portion: black strip */}
      <div className="w-full h-[clamp(500px,12vh,700px)]  bg-black" />

      {/* Content that sits on top, spanning across the backgrounds */}
      <div className="absolute text-start top-0 left-0 w-full flex flex-col justify-center px-6  md:px-20  py-4 md:py-12">
        {/* Heading */}
        <h2 className="text-[clamp(1.04rem,2.4vw,4rem)] text-[#121212] font-Merriweather font-bold mb-1">
          Meet the Founder
        </h2>
        <p className="text-[clamp(0.8rem,2vw,28px)] font-Montserrat-reg text-[#121212] mb-8">
          Meet the Dream Team Making It Happen!
        </p>

        {/* Card */}
        <div className="bg-[#252525] w-full pt-4 pb-4 pl-4 pr-4 md:pl-0 md:pt-0 md:pb-0">
          <div className="flex flex-col md:flex-row md:gap-8">
            {/* Mobile: Image & Name Row */}
            <div className="flex md:hidden">
              
              <img src={founderMob} alt="Founder" className="w-1/2 object-cover" />
              <div className="w-1/2 p-4">
                <h3 className="text-[clamp(1.2rem,2.4vw,4rem)] font-Merrylight md:font-bold">Bright Osifo</h3>
                <p className="text-[#DCDCDC] text-[clamp(1rem,2.4vw,4rem)] ">Founding Curator</p>
                <a href="#" className="inline-block mt-4">
                  <button className="bg-[#00529B] text-white px-4 py-2 rounded hover:bg-blue-700">
                    LinkedIn
                  </button>
                </a> 
              </div>
            </div>

            {/* Desktop: Image Column */}
            <div className="hidden md:block md:w-[45%]">
              <img
                src={founder}
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Desktop: Combined Name + Content Column */}
            <div className="md:w-[55%] md:flex md:flex-col">
              {/* Name Section - Desktop */}
              <div className="hidden md:block p-4 md:pl-0 md:pt-6">
                <h3 className="text-[clamp(2.04rem,2.4vw,4rem)] font-Merriweather font-bold">Bright Osifo</h3>
                <p className="text-[#DCDCDC] font-Montserrat-reg text-[clamp(1.04rem,1.5vw,3rem)]">Founding Curator</p>
                <a href="#" className="inline-block mt-4">
                  <button className="bg-[#00529B] text-white px-4 py-2 rounded hover:bg-blue-700">
                    LinkedIn
                  </button>
                </a>
              </div>

              {/* Content Section - Both screen sizes */}
              <div className="p-4 md:px-0">
                <p className="text-[#DCDCDC]  font-light font-Montserrat-reg text-[clamp(1rem,1.8vw,3rem)]">
                  Bright Osifo is the founder of Global Shapers Benin, dedicated
                  to empower communities through innovative solutions that
                  prioritize sustainability, collaboration, and growth. With
                  expertise in [field, e.g., interaction design or
                  sustainability] and a passion for [cause, e.g., bridging gaps
                  in farming technology], they have led impactful projects that
                  drive meaningful change.
                </p>
                <div className="flex md:justify-end mt-4">
                  <DynamicButton text="Learn More" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
