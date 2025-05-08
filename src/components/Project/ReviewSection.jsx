import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Jane A.",
    text: "“Being part of Global Shapers has been transformative. It’s given me opportunities to develop leadership skills, collaborate with passionate individuals, and make a real impact in my community.”",
    avatar: "/path/to/avatar.jpg",
  },
  {
    id: 2,
    name: "John B.",
    text: "“I've grown my network and developed leadership skills I never knew I had. Highly recommend joining!”",
    avatar: "/path/to/avatar2.jpg",
  },
];

const ReviewSection = () => {
  return (
    <div className="bg-green-100 p-6 sm:p-10 w-full">
      <h2 className="text-2xl font-bold mb-6 text-left">Reviews</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        className="relative"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="flex flex-col items-start text-left">
              <p className="text-lg mb-4">{review.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-semibold">{review.name}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows */}
      <div className="flex items-center justify-between lg:justify-start gap-6 mt-6">
        <button className="prev-btn p-3 bg-gray-700 text-white rounded-full">
          <ArrowLeft size={20} />
        </button>
        <button className="next-btn p-3 bg-green-800 text-white rounded-full">
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
