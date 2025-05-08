import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Top section images
import samuel from "../../assets/samuel.png";
import sandra from "../../assets/sandra.png";
import paleline from "../../assets/paleline.png";

// Import Swiper slide data
import swiperData from "../../data/shapersData";

const Shapers = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current) {
        swiperRef.current.update();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Top Section - Static Content */}
      <div className="bg-[#F0F7FF]  p-[clamp(1.5rem,2vw,5rem)] text-black text-start">
        <h2 className="font-bold text-[clamp(1.8rem,2vw,40px)] font-Merriweather">Meet the Shapers</h2>
        <div className="flex justify-between items-center lg:p-12">
          <div className="lg:flex  justify-between gap-4">
            <img src={samuel} alt="Samuel Obakpolo" className="w-full"/>
            <div className="flex flex-col self-end">
              <h2 className="text-[clamp(1rem,2vw,24px)] font-Merriweather font-bold">Samuel Obakpolo</h2>
              <p className="text-[clamp(0.5rem,2vw,14px)] font-Montserrat-Lite font-medium text-[#7C7C7C]">
                Current Curator
              </p>
              <a href="#">
                <button className="mt-4 bg-[#00529B] text-white text-[12px] px-4 py-2 rounded hover:bg-blue-700">
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
          <img src={paleline} alt="Paleline" className="h-20 px-4" />
          <div className="lg:flex justify-between gap-4">
            <img src={sandra} alt="Sandra" className="w-full" />
            <div className="flex flex-col self-end">
              <h2 className="text-[clamp(1rem,2vw,24px)] font-Merriweather font-bold">Sandra Ogini</h2>
              <p className="text-[clamp(0.5rem,2vw,14px)] font-Montserrat-Lite font-medium text-[#7C7C7C]">
                Vice - Curator
              </p>
              <a href="#">
                <button className="mt-4 bg-[#00529B] text-white text-[12px] px-4 py-2 rounded hover:bg-blue-700">
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Swiper Slider */}
      <div className="my-8 ml-[clamp(1.4rem,2vw,4rem)] px-4">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="py-4"
        >
          {swiperData.map((person) => (
            <SwiperSlide key={person.id}>
              <div className="relative group flex flex-col gap-8">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-auto object-cover group-hover:blur-sm rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-lg p-4">
                  <p className="text-[clamp(0.7rem,2vw,16px)] font-Montserrat-reg text-start mb-4">
                    {person.hoverText}
                  </p>
                  <button className="bg-[#00529B] text-white px-4 py-2 rounded">
                    {person.buttonText}
                  </button>
                </div>
              </div>
              <div className="text-start flex my-4 flex-col gap-2">
                <h2 className="font-bold font-Merriweather text-[clamp(1rem,2vw,24px)]">{person.name}</h2>
                <p className="text-[#DCDCDC] font-Montserrat-reg text-[clamp(0.7rem,2vw,16px)] font-medium">
                  {person.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Shapers;
