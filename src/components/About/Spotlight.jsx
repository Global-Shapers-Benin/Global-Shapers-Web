import React from "react";
import chief from "../../assets/chief.png";
import mask from "../../assets/mask.png";
import { ArrowUpRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import chiefsmob from "../../assets/chiefs-mob.png";

const Spotlight = () => {
  return (
    <div className="">
      <div className="flex flex-col px-8 md:px-20 py-16 relative">
        <div className="flex justify-between pb-12">
          <h2 className="font-bold text-[clamp(1.3rem,3vw,3rem)]">Cultural Spotlight</h2>
          <a
            href="/projects"
            className="text-[#00529B] font-bold text-[1rem,2vw,2rem] flex items-center"
          >
            See all projects <ArrowUpRight className=" w-5 h-5 ml-3" size={5} />
          </a>
        </div>

        <div className="lg:flex  items-center justify-center gap-16">
          <div className="relative pb-20">

          <img src={chief} alt="" className="hidden lg:block w-[2979px] h-[587px] " />
          <img src={chiefsmob} alt="" className="lg:hidden w-[80%] " />
          <img src={mask} alt="" className="absolute w-[50%] bottom-[0] right-0 lg:right-[-3rem] "/>
          </div>
          <p className="text-start text-[clamp(1.4rem,2.4vw,3rem)] pt-3 font-medium">
            The Oba of Benin leads traditional rites, which include blessings
            for the people and the kingdom. It symbolizes the king’s divine
            connection to the gods and ancestors.
          </p>
        </div>
        <div className="flex justify-between lg:self-end lg:gap-6 mt-16">
        <a href="#" className="text-white text-2xl">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
              <ArrowLeft />
            </div>
          </a>
          <a href="#" className="text-white text-2xl">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
              <ArrowUpRight />
            </div>
          </a>
        </div>
        
      </div>
      
    </div>
  );
};

export default Spotlight;
