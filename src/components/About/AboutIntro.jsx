import React from "react";

const AboutIntro = () => {
  return (
    <div className="container pt-[4rem] pb-[2rem] px-4 mx-auto">
      <div className="wrapper flex flex-col lg:flex-row  space-y-4 lg:space-y-0">
        <div className="lg:w-2/3 w-full mb-6 md:mb-0">
          <h1 className="text-[clamp(1.2rem,3vw,4rem)] w-[clamp(100px,50%,600px)] lg:w-[40rem] leading-16 font-semibold text-start">
            The Global Shapers{" "}
            <span className="text-[#00529B]">Benin City Hub</span> is a dynamic
            community of young leaders.
          </h1>
        </div>
        <p className="lg:items-end text-right md:text-justify w-[45%] justify-end font-Montserrat align-baseline self-end flex text-[clamp(1.14rem,1vw,2rem)]">
          Our Journey: The Story of Global Shapers Benin
        </p>
      </div>
    </div>
  );
};

export default AboutIntro;

