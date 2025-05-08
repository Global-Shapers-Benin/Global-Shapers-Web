import React from "react";
import DynamicButton from "../DynamicButton";
import hands from "../../assets/hands.png";
import lilgirls from "../../assets/lilgirls.png";
import lilgirlsdesk from "../../assets/lilgirlsdesk.png";

const BetterFuture = () => {
  return (
    <div className="bg-[#F0F7FF]">
      <div className="overflow-x-hidden text-start pt-40 ml-20">
        <div className=" h-[520px] sm:flex">
          <div className="gap-y-5 flex flex-col">
            <h4 className="text-black font-[400] text-2xl">
              Partner with Global Shapers Benin Hub
            </h4>
            <h2 className="text-black font-bold text-[36px]">Let’s Shape a Better Future Together</h2>
            <p className="text-black font-[400] text-[26px] max-w-[830px]">
              Together, we can create solutions that leave a lasting legacy.
              Let’s make a difference, one partnership at a time.
            </p>

            <a href="" className="w-[132px]">
            <DynamicButton text="Join Us"  />
            </a>
          </div>
          <div className="w-[1.5/3] self-end"><img src={hands} alt="" className="w-[500px] h-[300px] ml-[0px]" /></div>
        </div>

        <div className="flex py-24">
          <img src={lilgirlsdesk} alt="" className="hidden sm:inline"/>
          <img src={lilgirls} alt="" className="sm:hidden"/>
          <div className="ml-20 mr-4  mt-20 gap-y-5 flex flex-col">
            <h2 className="text-black font-bold text-[40px]">Support The Change: Donate Today</h2>
            <p className="text-black font-[400] text-[28px]">
              Every donation, no matter the size brings us closer to a brighter
              future. Join us in shaping a better tomorrow!
            </p>
            <a href="" className="w-[132px]">
            <DynamicButton text="Donate" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetterFuture;
