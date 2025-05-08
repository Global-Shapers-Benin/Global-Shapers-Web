import React from "react";
import workBg from "../../assets/workBg.png";

const RoadAhead = () => {
  return (
    <div>
      <div
        className="absolute  left-0 w-full h-1/2 lg:h-2/3  bg-repeat-x -z-10"
        style={{
          backgroundImage: `url(${workBg})`,
          backgroundAttachment: "",
        }}
      ></div>
      <div>
      <h1 className="font-Merriweather font-bold text-[clamp(1.2rem,2.5vw,3rem)] text-start py-8">Road Ahead</h1>
      </div>
      <div className="md:flex">
        <div>
          <h2 className="font-Merriweather font-bold text-[clamp(1rem,2vw,3rem)] text-start py-8">
            Future Plans
          </h2>
          <ul className="font-Montserrat list-inside list-disc p-4 text-[clamp(13px,2vw,2rem)] text-start">
            <li>Expanding the participant base.</li>
            <li>
              Forming partnerships with more tech organisation to improve
              employment rates for participants
            </li>
            <li>Developing advanced training programs in ML/AI</li>
          </ul>
        </div>
        <div>
          <h2 className="font-Merriweather font-bold text-[clamp(1rem,2vw,3rem)] text-start py-8">
            Sustainability Strategy:
          </h2>
          <ul className="font-Montserrat list-inside list-disc p-4 text-[clamp(13px,2vw,2rem)] text-start">
            <li>
              Securing funding and sponsorship through partnerships for further
              impact.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoadAhead;
