import React from "react";
import samuel from "../../assets/samuel.png";
import sandra from "../../assets/sandra.png";
import paleline from "../../assets/paleline.png";
import osahon from "../../assets/osahon.png";
import tracy from "../../assets/tracy.png";
import lisa from "../../assets/lisa.png";
import idehen from "../../assets/idehen.png";
import patricia from "../../assets/patricia.jpg";

const Shapers = () => {
  return (
    <div>
      <div className="">
        <div className="bg-[#F0F7FF] p-8 text-black text-start">
          <h2 className="font-bold text-[40px]">Meet the Shapers</h2>
          <div className="flex justify-between items-center p-12">
            <div className="flex justify-between gap-4">
              <img src={samuel} alt="" />
              <div className="flex flex-col self-end">
                <h2 className="text-[24px] font-bold">Samuel Obakpolo</h2>
                <p className="text-[14px] font-medium text-[#7C7C7C]">
                  Current Curator
                </p>
                <a href="#" className="">
                  <button className="mt-4 bg-[#00529B] text-white text-[12px] px-4 py-2 rounded hover:bg-blue-700">
                    LinkedIn
                  </button>
                </a>
              </div>
            </div>
            <img src={paleline} alt="" className="h-20" />
            <div className="flex justify-between gap-4">
              <img src={sandra} alt="" />
              <div className="flex flex-col self-end">
                <h2 className="text-[24px] font-bold">Current Curator</h2>
                <p className="text-[14px] font-medium text-[#7C7C7C]">
                  Vice - Curator
                </p>
                <a href="#" className="">
                  <button className="mt-4 bg-[#00529B] text-white text-[12px] px-4 py-2 rounded hover:bg-blue-700">
                    LinkedIn
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
            put swiper slide here
        </div>
      </div>
    </div>
  );
};

export default Shapers;
