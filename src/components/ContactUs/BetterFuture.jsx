import React from "react";
import DynamicButton from "../DynamicButton";
import hands from "../../assets/hands.png";
import lilgirls from "../../assets/lilgirls.png";
import lilgirlsdesk from "../../assets/lilgirlsdesk.png";

const BetterFuture = () => {
  return (
    <div className="bg-[#F0F7FF]">
      <div className="overflow-x-hidden text-start pt-20 md:pt-40 md:ml-20">
        <div className="w-[90%] mx-auto md:w-full min-h-[520px] flex flex-col-reverse sm:flex-col md:flex-row">
          <div className="gap-y-5 flex flex-col flex-1">
            <h4 className="text-black font-[400] text-2xl">
              Partner with Global Shapers Benin Hub
            </h4>

            <h2 className="text-black font-bold text-2xl leading-10 md:text-[30px] font-Merriweather">
              Let’s Shape a Better Future Together
            </h2>

            <p className="text-black font-[400] md:text-[26px] max-w-[830px]">
              Together, we can create solutions that leave a lasting legacy.
              Let’s make a difference, one partnership at a time.
            </p>

            <button className="w-[132px] pb-6">
              <DynamicButton text="Join Us" />
            </button>
          </div>

          <div className="flex-1 mb-6 md:mb-0 flex items-center justify-center">
            <img
              src={hands}
              alt="Partnership imagery"
              className="w-full max-w-[700px] h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col p-5  md:flex-row py-24 items-center">
          <img
            src={lilgirlsdesk}
            alt="Children learning"
            className="hidden md:block"
          />
          <img
            src={lilgirls}
            alt="Children learning"
            className="block md:hidden"
          />

          <div className="md:ml-10 mx-2 mt-12 md:mt-0 gap-y-5 flex flex-col">
            <h2 className="text-black font-bold text-2xl leading-10 md:text-[30px] font-Merriweather">
              Support The Change: Donate Today
            </h2>

            <p className="text-black font-normal text-base md:text-[20px]">
              Every donation, no matter the size brings us closer to a brighter
              future. Join us in shaping a better tomorrow!
            </p>

            <button className="w-[132px]">
              <DynamicButton text="Donate" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetterFuture;
