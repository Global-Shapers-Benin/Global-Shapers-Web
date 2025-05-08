import React from "react";
import DynamicButton from "../DynamicButton";
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images from assets folder
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import bright from "../../assets/bright.png";
import whoback from "../../assets/whoback.png";

const WhoWeAre = () => {
  return (
    <div
      className=" bg-[#F1FCF1] text-black text-start relative"
      style={{
        backgroundImage: `url(${whoback})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto  py-12">
        <div className="sm:p-[none] p-4 sm:flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-Merriweather font-bold mb-4">Who We Are?</h1>
          </div>
          <div className="md:w-2/3">
            <p className="text-[clamp(1.3rem,2.5vw,3rem)] mb-6 font-semibold md:font-Montserrat leading-8 md:leading-10 lg:leading-[3.1rem]  md:leading-13">
              The Benin City Global Shapers Hub is a community of young leaders
              driving positive change through innovative projects in
              sustainability, youth empowerment, and social impact. Powered by
              the World Economic Forum, we work collaboratively to create
              meaningful solutions for our city and beyond.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="" className="text-white">
                <DynamicButton text="About Global Shapers" link="" />
              </a>
              <a
                href=""
                className="flex items-center gap-1 text-black font-medium hover:text-blue-800"
              >
                Meet the Team{" "}
                <FiArrowUpRight className="text-base md:text-xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 md:p-[none] pl-4">
          <h2 className="text-2xl font-Merriweather font-bold mb-6">Team Members</h2>
          {/* Swiper Component for team members */}
          <Swiper
            spaceBetween={30}
            slidesPerView={4.5}
            loop={true}
            grabCursor={true} // Enable grab cursor
            // navigation
            // pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loopAdditionalSlides={5} // Duplicate slides for seamless loop
            modules={[Navigation, Pagination, Autoplay]}
            className="my-12"
            breakpoints={{
              320: {
                slidesPerView: 1.2, // 1 slide on small screens
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2.2, // 2 slides on medium screens
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4.8, // 4.5 slides on large screens
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <img
                src={image1}
                alt="Team Member 1"
                className="w-full h-64 object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image2}
                alt="Team Member 2"
                className="w-full h-64 object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image3}
                alt="Team Member 3"
                className="w-full h-64 object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={bright}
                alt="Team Member 4"
                className="w-full h-64 object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image3}
                alt="Team Member 5"
                className="w-full h-64 object-cover rounded-lg"
              />
            </SwiperSlide>

            {/* Duplicate slides for looping */}
            <SwiperSlide>
              <img
                src={image1}
                alt="Team Member 6"
                className="w-full h-64 object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image2}
                alt="Team Member 7"
                className="w-full h-64 object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image1}
                alt="Team Member 1"
                className="w-full h-64 object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image2}
                alt="Team Member 2"
                className="w-full h-64 object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image3}
                alt="Team Member 3"
                className="sm:w-full sm:h-64 object-cover w-fit rounded-sm sm:rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
