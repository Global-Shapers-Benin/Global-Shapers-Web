import React from "react";
import led from "../../assets/led.png";
import stickers from "../../assets/stickers.png";
import world from "../../assets/world.png";
import { ArrowUpRight } from "lucide-react";
import Marquee from "react-fast-marquee";
import future from "../../assets/future.png";
import schoolKids from "../../assets/schoolKids.png";
import faces from "../../assets/faces.jpg";
import landscape from "../../assets/landscape.jpg";
import stud from "../../assets/stud.png";
import mother from "../../assets/mother.jpg";
import girls from "../../assets/girls.png";
import students from "../../assets/students.png";
import green from "../../assets/green.png";
import amb from "../../assets/amb.png";
import children from "../../assets/children.jpg";
import ledmob from "../../assets/led-mob.png";
import stickersmob from "../../assets/stickers-mob.png";

const AboutValues = () => {
  return (
    <div className="bg-white pt-10 pb-16">
      <div className="wrapper">
        <div className="bg-[#F1FCF1] text-black font-semibold text-start p-10" style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)" }}>
          <p>Our Values</p>
        </div>

        <div className="bg-[#C2F1C1]  py-10 flex flex-col lg:flex-row px-8 lg:px-20 justify-between gap-8">
          <img src={led} alt="" className="lg:block hidden w-full max-w-[391px] h-auto" />
          <img src={ledmob} alt="" className="w-full lg:hidden h-auto" />
          <div className="text-black text-start flex flex-col gap-4">
            <h2 className="font-bold font-Merriweather text-[clamp(1.8rem,4vw,2rem)]">Mission Statement</h2>
            <p className="font-light font-Montserrat" style={{ fontSize: "clamp(1rem, 3vw, 1.75rem)" }}>
              To empower communities through innovative solutions that prioritize sustainability, collaboration, and growth. We strive to create lasting value for our customers, employees, and the world by driving positive change and embracing forward-thinking practices.
            </p>
          </div>
        </div>

        <div className="bg-[#207521] px-8 lg:px-20 flex flex-col lg:flex-row justify-center gap-5">
          <div className="text-start flex flex-col self-center">
            <h2 className="font-bold pb-8 pt-4 font-Merriweather text-[clamp(1.8rem,4vw,2rem)]">Core Values</h2>
            <p className="font-light font-Montserrat text-[clamp(1rem,3vw,1.75rem)]">
              <span className="font-semibold">Innovation:</span> Pioneering creative solutions to meet evolving challenges.
            </p>
            <p className="font-light font-Montserrat text-[clamp(1rem,3vw,1.75rem)]">
              <span className="font-semibold">Sustainability:</span> Ensuring our actions today benefit future generations.
            </p>
            <p className="font-light font-Montserrat text-[clamp(1rem,3vw,1.75rem)]">
              <span className="font-semibold">Integrity:</span> Conducting all business with transparency and honesty.
            </p>
          </div>
          <img src={stickers} alt="" className="w-full hidden lg:block max-w-[470px] h-auto" />
          <img src={stickersmob} alt="" className="w-full lg:hidden h-auto" />
        </div>

        <div className="px-8 text-start lg:px-20 py-10 flex flex-col gap-12">
          <div className="flex items-center pt-10 gap-10">
            <div className="text-[#207521] leading-tight bg-[#C2F1C1] py-9 px-12 rounded-2xl">
              <p className="font-bold text-[clamp(2rem,5vw,4rem)]" >
                10K+
              </p>
              <p className="font-medium">Lives Impacted</p>
            </div>
            <div className="self-center flex flex-col gap-3">
            <img src={world} alt="" className="w-[clamp(1rem,15vw,5rem)]" />
              <p className="font-bold text-black text-[clamp(1rem,3.5vw,2.5rem)]" >
                Alumni Driving Real-World Impact
              </p>
            </div>
          </div>

          <div className="flex md:flex-row justify-between">
            <p className="text-start text-black font-bold" style={{ fontSize: "clamp(1.1rem, 4vw, 2rem)" }}>
              20 projects completed
            </p>
            <a
              href="#"
              className="text-[#207521] font-bold flex items-center"
              style={{ fontSize: "clamp(1rem, 3vw, 1.25rem)" }}
            >
              See all projects <ArrowUpRight className="w-5 h-5 ml-3" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <Marquee pauseOnHover={true} speed={50} gradient={false}>
            {[future, schoolKids, amb, stud, students, green].map((img, idx) => (
              <div key={idx} className="mx-4">
                <img
                  src={img}
                  alt=""
                  className="w-[350px] h-[260px] rounded-lg object-cover"
                />
              </div>
            ))}
          </Marquee>

          <Marquee direction="right" pauseOnHover={true} speed={50} gradient={false}>
            {[faces, mother, landscape, girls, children, children].map((img, idx) => (
              <div key={idx} className="mx-4">
                <img
                  src={img}
                  alt=""
                  className="w-[350px] h-[260px] rounded-lg object-cover"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default AboutValues;
