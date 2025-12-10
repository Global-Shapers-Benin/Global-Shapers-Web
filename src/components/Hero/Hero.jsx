import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import heroimg from "../../assets/heroimg.png";
import DynamicButton from "../DynamicButton";
import { FiArrowUpRight } from "react-icons/fi";
import btnMob from "../../assets/btnMob.png";

const Hero = () => {
  return (
    <div className="relative w-full font-Montserrat my-8 p-6 md:p-8 lg:p-10">
      {/* Hero Image as the background layer using lazy loading */}
      <LazyLoadImage
        src={heroimg}
        alt="Hero Background"
        effect="blur"
        wrapperProps={{
          style: { transitionDelay: '0.1s' }
        }}
        className="w-full h-auto object-cover"
      />

      {/* SVG Speech Bubble positioned on top of the image */}
      <div className="absolute top-6 lg:top-10 md:top-8 left-10 sm:left-16  md:left-20 lg:left-28 w-[75%] sm:w-[40%] md:w-[80%] lg:w-[60%] max-w-[550px]">
        <svg
          className="w-[80%] sm: sm:w-full md:w-full h-auto md:h-full"
          viewBox="0 0 510 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
        >
          {/* Speech Bubble Shape */}
          <path
            d="M0 20C0 8.9543 8.95431 0 20 0H490C501.046 0 510 8.95431 510 20V208.351C510 219.397 501.046 228.351 490 228.351H471.5C460.454 228.351 451.5 237.306 451.5 248.351V258.432C451.5 269.478 442.546 278.432 431.5 278.432H396.5C385.454 278.432 376.5 287.387 376.5 298.432V310.351C376.5 321.397 367.546 330.351 356.5 330.351H312C300.954 330.351 292 339.306 292 350.351V354C292 365.046 283.046 374 272 374H20C8.9543 374 0 365.046 0 354V20Z"
            fill="#1A1A1A"
          />

          {/* Main Heading with fluid text size */}
          <text
            x="20%"
            y="15%"
            fill="white"
            fontWeight="bold"
            fontFamily=""
            className="text-[clamp(2.4rem,2.5vw,3rem)]"
          >
            <tspan x="8%" dy="0">
              Empowering Change
            </tspan>
            <tspan x="8%" dy="1.2em">
              in <tspan fill="#00529B">Benin City, </tspan>One
            </tspan>
            <tspan x="8%" dy="1.2em">
              Community at a
            </tspan>
            <tspan x="8%" dy="1.2em">
              Time!
            </tspan>
          </text>

          {/* 'Explore the hub' Button with fluid text size */}
          <foreignObject x="8%" y="60%" width="60%" height="30%">
            <div xmlns="http://www.w3.org/1999/xhtml">
              <DynamicButton
                text="Explore the hub"
                className="text-white py-2 rounded-full hidden md:flex  md:text-[clamp(0.875rem,2vw,1rem)]"
                link="/about"
              />
            </div>
            <img src={btnMob} alt="" className="md:hidden" />
          </foreignObject>

          {/* 'Join Us' Link with Arrow with fluid text size */}
          <foreignObject className="hidden md:flex" x="10%" y="75%" width="50%" height="15%">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="flex items-center text-white cursor-pointer gap-2 text-[clamp(0.885rem,1.5vw,1.4rem)]"
            >
              <span>Join Us</span>
              <FiArrowUpRight />
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
