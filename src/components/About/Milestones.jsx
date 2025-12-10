import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FiPlayCircle } from "react-icons/fi";

const milestones = [
  {
    id: 1,
    title: "Founding Year - Jan 2025",
    description: "The establishment of a company",
    note: "Off to a great Start!",
    image: "https://source.unsplash.com/random/400x400?milestone-1",
  },
  {
    id: 2,
    title: "First Project Launch",
    description: "Initiating impactful projects",
    note: "Making a difference!",
    image: "https://source.unsplash.com/random/400x400?milestone-2",
  },
  {
    id: 3,
    title: "10K Lives Impacted",
    description: "Reaching a major milestone",
    note: "Celebrating success!",
    image: "https://source.unsplash.com/random/400x400?milestone-3",
  },
  {
    id: 1,
    title: "Founding Year - Jan 2025",
    description: "The establishment of a company",
    note: "Off to a great Start!",
    image: "https://source.unsplash.com/random/400x400?milestone-1",
  },
  {
    id: 2,
    title: "First Project Launch",
    description: "Initiating impactful projects",
    note: "Making a difference!",
    image: "https://source.unsplash.com/random/400x400?milestone-2",
  },
  {
    id: 3,
    title: "10K Lives Impacted",
    description: "Reaching a major milestone",
    note: "Celebrating success!",
    image: "https://source.unsplash.com/random/400x400?milestone-3",
  },
  {
    id: 3,
    title: "10K Lives Impacted",
    description: "Reaching a major milestone",
    note: "Celebrating success!",
    image: "https://source.unsplash.com/random/400x400?milestone-3",
  },
  {
    id: 1,
    title: "Founding Year - Jan 2025",
    description: "The establishment of a company",
    note: "Off to a great Start!",
    image: "https://source.unsplash.com/random/400x400?milestone-1",
  },
  {
    id: 2,
    title: "First Project Launch",
    description: "Initiating impactful projects",
    note: "Making a difference!",
    image: "https://source.unsplash.com/random/400x400?milestone-2",
  },
  {
    id: 3,
    title: "10K Lives Impacted",
    description: "Reaching a major milestone",
    note: "Celebrating success!",
    image: "https://source.unsplash.com/random/400x400?milestone-3",
  },
  
];

const MilestonesSection = () => {
  return (
    <section className="py-16 bg-[#111111] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[clamp(1.5rem,3vw,4rem)] font-bold text-center mb-8">
          Explore Our Milestones
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1.2}
          
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {milestones.map((milestone) => (
            <SwiperSlide key={milestone.id}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={milestone.image}
                  alt={milestone.title}
                  className="w-full h-[220px] object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <FiPlayCircle className="text-white text-6xl" />
                </div>
                <div className="p-6 bg-[#222222] rounded-b-2xl">
                  <h3 className="text-xl font-bold">{milestone.title}</h3>
                  <p className="mt-2">{milestone.description}</p>
                  <p className="text-sm text-gray-400">{milestone.note}</p>
                  <button className="mt-4 px-4 py-2 bg-[#00529B] text-white rounded-full hover:bg-[#003C7A] transition duration-300">
                    Learn more <span>↗</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MilestonesSection;
