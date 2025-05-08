import React from "react";
import Navbar from "../Navbar/Navbar";
import workSeriesMob from "../../assets/workSeriesMob.png";
import workSeriesDesk from "../../assets/workSeriesDesk.png";
import ideaMob from "../../assets/ideaMob.png";
import idea from "../../assets/idea.png";
import checkTick from "../../assets/checkTick.png";
import stats from "../../assets/stats.png";
import statsMob from "../../assets/statsMob.png";
import convo from "../../assets/convo.png";
import receive from "../../assets/receive.png";
import agree from "../../assets/agree.png";
import msg from "../../assets/msg.png";
import RoadAhead from "./RoadAhead";
import Footer from "../Footer/Footer";
import ReviewSection from "./ReviewSection";
import JoinUsSection from "./JoinUsSection";
// import JoinUsReview from "./JoinUsReviews";

const WorkSeries = () => {
  return (
    <div>
      <div className="px-6 mt-20 pt-4 md:pt-10 md:px-14 lg:20">
        <div className="lg:flex py-4 md:py-8 lg:py-10 text-start">
          <div className="">
            <h2 className="font-Merriweather font-bold  text-[clamp(18px,5vw,40px)]">
              The Future of Work Series
            </h2>
            <p className="font-Montserrat-reg text-[clamp(0.8rem,1.8vw,2rem)] my-4 lg:my-0 w-[clamp(100px,90%,800px)] lg:w-[37rem] leading-16 font-semibold text-start">
              Objective: To equip young adults with the necessary knowledge,
              skills, and network for the evolving workplace.
            </p>
          </div>
          <p className="font-Montserrat font-bold  md:self-end lg:text-right w-[75%] lg:justify-end  flex lg:items-end lg:text-[16px]  text-[clamp(0.8rem,1vw,2rem)]">
            Project kick-off: September 2023
          </p>
        </div>

        <div className="pb-8">
          <img src={workSeriesMob} alt="" className="w-full md:hidden" />
          <img src={workSeriesDesk} alt="" className="w-full hidden md:block" />
        </div>

        <div className="md:flex py-6 md:py-8 justify-between text-start">
          <div className="pb-6">
            <h2 className="font-Merriweather pb-3 font-bold text-[clamp(1rem,2.5vw,3rem)]">
              Target Group:
            </h2>
            <div>
              <ul className="font-Montserrat-reg pl-3 list-disc list-inside text-[clamp(13px,2vw,2rem)]">
                <li>Undergraduate students</li>
                <li>Recent students</li>
                <li>Early-career professionals</li>
              </ul>
            </div>
          </div>
          <div className="pb-6">
            <h2 className="font-Merriweather pb-3 font-bold text-[clamp(1rem,2.5vw,3rem)]">
              Key Focus Areas:
            </h2>
            <ul className="font-Montserrat-reg pl-3 list-disc list-inside text-[clamp(13px,2vw,2rem)]">
              <li>Learning from industry experts</li>
              <li>Access to upskilling opportunities</li>
              <li>Building connections for career growth</li>
            </ul>
          </div>
        </div>

        <div className="md:flex text-start py-14">
          <div className=" md:pr-6 py-4">
            <img src={ideaMob} alt="" className="w-full md:hidden" />
            <img src={idea} alt="" className="w-full hidden md:block" />
          </div>
          <div>
            <h2 className="font-Merriweather font-bold text-[clamp(1rem,2.5vw,3rem)]">
              How We’re Making It Happen
            </h2>
            <div className="flex items-center gap-3 py-3 md:gap-6 text-[clamp(13px,2vw,2rem)]">
              <img src={checkTick} alt="" />
              <p className="font-Montserrat-reg">
                Hosting webinars with subject-matter experts
              </p>
            </div>
            <div className="flex items-center gap-3 py-3 md:gap-6 text-[clamp(13px,2vw,2rem)]">
              <img src={checkTick} alt="" />
              <p className="font-Montserrat-reg">
                Building an online support community
              </p>
            </div>
            <div className="flex items-center gap-3 py-3 md:gap-6 text-[clamp(13px,2vw,2rem)]">
              <img src={checkTick} alt="" />
              <p className="font-Montserrat-reg">
                Connecting participants with scholarships and training programs
              </p>
            </div>
            <div className="flex items-center gap-3 py-3 md:gap-6 text-[clamp(13px,2vw,2rem)]">
              <img src={checkTick} alt="" />
              <p className="font-Montserrat-reg">
                Bridging participants to internships and tech jobs
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex">
          <div className="text-start ">
            <h2 className="font-Merriweather font-bold text-[clamp(1rem,2.5vw,3rem)] text-start">
              Tracking Our Progress
            </h2>

            <div className="flex items-center gap-3 py-3 md:gap-6 text-[clamp(13px,2vw,2rem)]">
              <img src={checkTick} alt="" />
              <p className="font-Montserrat-reg">
                Webinar registrations and attendance
              </p>
            </div>
            <div className="flex items-center gap-3 py-3 md:gap-6 text-[clamp(13px,2vw,2rem)]">
              <img src={checkTick} alt="" />
              <p className="font-Montserrat-reg">
                Active participation in the online community
              </p>
            </div>
            <div className="flex items-center gap-3 py-3 md:gap-6 text-[clamp(13px,2vw,2rem)]">
              <img src={checkTick} alt="" />
              <p className="font-Montserrat-reg">
                Number of upskilling opportunities shared
              </p>
            </div>
            <div className="flex items-center gap-3 py-3 md:gap-6 text-[clamp(13px,2vw,2rem)]">
              <img src={checkTick} alt="" />
              <p className="font-Montserrat-reg">
                Participants acquiring new skills
              </p>
            </div>
            <div className="flex items-center gap-3 py-3 md:gap-6 text-[clamp(13px,2vw,2rem)]">
              <img src={checkTick} alt="" />
              <p className="font-Montserrat-reg">Jobs/internships secured</p>
            </div>
          </div>
          <div className="py-4 md:pl-6">
            <img src={statsMob} alt="" className="hidden md:block" />
            <img src={stats} alt="" className=" md:hidden" />
          </div>
        </div>

        <div>
          <h2 className="font-Merriweather font-bold text-[clamp(1rem,2.5vw,3rem)] text-start py-8">
            Impact Thus Far
          </h2>
          <div className="md:flex md:flex-col gap-6 justify-between font-Montserrat-reg text-[clamp(13px,2vw,2rem)] text-start">
            <div className="md:flex justify-between">
              <div className="mb-4">
                <img src={convo} alt="" className="mb-4" />
                <p className="font-Montserrat-reg">
                  Good Engagement in Webinars {"(>150)"}
                </p>
              </div>
              <div className="mb-4 w-1/2">
                <img src={msg} alt="" className="mb-4" />
                <p className="font-Montserrat-reg">
                  Positive Community Feedback{" "}
                </p>
              </div>
            </div>
            <div className="md:flex justify-between">
              <div className="mb-4">
                <img src={agree} alt="" className="mb-4" />
                <p className="font-Montserrat-reg">
                  Partnership Secured with 5 different companies:
                </p>
                <ul className="list-disc list-inside p-4">
                  <li>
                    4 to provide trained participants with internships and jobs.
                  </li>
                  <li>1 to facilitate skill training for participants</li>
                </ul>
              </div>
              <div className="mb-4">
                <img src={receive} alt="" className="mb-4" />
                <p className="font-Montserrat-reg">
                  Over 30 persons currently employed earning above minimum wage.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-300 my-8"></div>
        <RoadAhead />
      </div>
      <div className="mb-20">you inclusive</div>
      {/* <JoinUsReview /> */}
      {/* <ReviewSection /> */}
      {/* <JoinUsSection /> */}
    
    </div>
  );
};

export default WorkSeries;
