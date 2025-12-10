import React, { useEffect, useRef } from "react";
import { User, Handshake as IconHandshake, Building2, Gift, ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import handshake from "../../assets/handshake.png";
import jana from "../../assets/jana.png";
import halfcircle from "../../assets/halfcircle.png";

export default function Reviews() {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);



  return (
    <div
      ref={sectionRef}
      style={{
        backgroundImage: window.innerWidth >= 1024 ? `url(${halfcircle})` : "none",
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "300px",
        
      }}
      className="w-full bg-[#C2F1C1] text-black px-6 py-16 lg:px-20 flex flex-col lg:flex-row gap-10"
    >
      {/* Left: Reviews */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-6">Reviews</h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={800}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          className="w-full max-w-xl"
          loop={true} 
          onSwiper={(s) => (swiperRef.current = s)}
        >
          <SwiperSlide>
            <p className="text-lg leading-relaxed mb-6 md:text-xl">
              “Being part of Global Shapers has been transformative. It’s given me opportunities
              to develop leadership skills, collaborate with passionate individuals, and make a real impact in my community.”
            </p>
            <div className="flex items-center gap-3 md:text-2xl">
              <img src={jana} alt="Jane" className="w-10 h-10 rounded-full" />
              <span className="font-semibold">Jane A.</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <p className="text-lg leading-relaxed mb-6 md:text-xl">
              “The Global Shapers community helped me build meaningful connections and develop confidence in leading impactful initiatives.”
            </p>
            <div className="flex items-center gap-3 md:text-2xl">
              <img src={jana} alt="Michael" className="w-10 h-10 rounded-full" />
              <span className="font-semibold">Michael B.</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <p className="text-lg leading-relaxed mb-6 md:text-xl">
              “Fantastic platform to collaborate and put ideas into action — the learning and support here are outstanding.”
            </p>
            <div className="flex items-center gap-3 md:text-2xl">
              <img src={jana} alt="Amina" className="w-10 h-10 rounded-full" />
              <span className="font-semibold">Amina S.</span>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-between md:justify-start gap-4 mt-6">
          <button className="prev-btn w-12 text-white h-12 flex items-center justify-center bg-[#228B22]  rounded-full text-xl">
            <ArrowLeft />
          </button>
          <button className="next-btn w-12 text-white h-12 flex items-center justify-center bg-[#228B22]  rounded-full text-xl">
            <ArrowUpRight />
          </button>
        </div>
      </div>

      {/* Right: Join Us Box */}
      <div className="flex-1 bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h3 className="text-xl font-bold">JOIN US</h3>

        <div className="space-y-5">
          {[
            { label: "Join as a member", icon: <User className="w-5 h-5 text-green-700" /> },
            { label: "Volunteer with us", icon: <IconHandshake className="w-5 h-5 text-green-700" /> },
            { label: "Partner with the hub", icon: <Building2 className="w-5 h-5 text-green-700" /> },
            { label: "Donate", icon: <Gift className="w-5 h-5 text-green-700" />, highlight: true },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition hover:bg-green-50 ${
                item.highlight ? "text-green-700 font-semibold" : ""
              }`}
            >
              <div className="flex items-center gap-2 text-lg">
                <span>{item.icon}</span>
                {item.label}
              </div>
              <span className="text-green-700 font-bold"><ArrowRight /></span>
            </div>
          ))}
        </div>

        <div className="bg-green-50 rounded-2xl p-4">
          <img
            src={handshake}
            alt="Handshake"
            className="rounded-xl transform transition duration-500 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
