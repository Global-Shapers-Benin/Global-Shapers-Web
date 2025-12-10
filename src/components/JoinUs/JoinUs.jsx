import { useEffect, useRef } from "react";
import gsap from "gsap";

import juclass from "../../assets/juclass.png";
import jumask from "../../assets/jumask.png";
import jumodels from "../../assets/jumodels.jpg";
import juchief from "../../assets/juchief.png";
import juvol from "../../assets/juvol.png";
import joinBtn from "../../assets/joinBtn.png";

const JoinUs = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const bottomImgs = useRef([]);

  useEffect(() => {
    // Entrance Animations
    gsap.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.3, duration: 1 }
    );

    gsap.fromTo(
      leftImgRef.current,
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.6, duration: 1 }
    );

    gsap.fromTo(
      rightImgRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, delay: 0.8, duration: 1 }
    );

    gsap.fromTo(
      bottomImgs.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, delay: 1 }
    );

    // Floating Animations
    gsap.to(leftImgRef.current, {
      y: 20,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    gsap.to(rightImgRef.current, {
      y: -25,
      duration: 3.5,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    bottomImgs.current.forEach((el, i) => {
      gsap.to(el, {
        y: i % 2 === 0 ? 20 : -20,
        duration: 4 + i,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <section className="w-full min-h-screen bg-transparent text-white px-6 lg:px-20 pt-10 pb-20 mt-20">
      {/* TOP SECTION */}
      <div className="grid lg:grid-cols-3 gap-12">
        {/* LEFT FLOATING IMAGE — comes first on desktop left, under text on mobile */}
        <div
          ref={leftImgRef}
          className="order-2 lg:order-none flex justify-start md:justify-center"
        >
          <img src={juclass} className="rounded-3xl max-w-md" alt="Join us" />
        </div>

        {/* TEXT SECTION — top on mobile, vertically centered on desktop */}
        <div className="order-1 lg:order-none lg:flex lg:flex-col lg:justify-center lg:col-span-1 space-y-6">
          <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold">
            Join Us
          </h1>

          <p ref={textRef} className="text-gray-300 leading-relaxed text-lg">
            Be part of a dynamic community of young leaders driving positive
            change in Benin. Together, we create impactful solutions and empower
            our communities for a brighter tomorrow.
          </p>

          <a href="/join-us" className="inline-block mt-10">
            <img src={joinBtn} alt="" />
          </a>
        </div>

        {/* RIGHT FLOATING IMAGE — stays last on mobile */}
        <div
          ref={rightImgRef}
          className="order-3 lg:order-none flex justify-end"
        >
          <img
            src={jumask}
            alt="Culture"
            className="bg-green-200 p-6 rounded-xl w-40 h-40 object-contain shadow-lg"
          />
        </div>
      </div>

      {/* BOTTOM GALLERY */}
      <div
        className="
      mt-20 
      grid 
      grid-cols-2 md:grid-cols-3 
      gap-6 md:gap-8
    "
      >
        <img
          ref={(el) => (bottomImgs.current[0] = el)}
          src={jumodels}
          className="rounded-xl w-full object-cover shadow-md h-[200px] md:h-[420px]"
          alt="Culture"
        />

        <img
          ref={(el) => (bottomImgs.current[1] = el)}
          src={juchief}
          className="rounded-xl w-full object-cover shadow-md h-[180px] md:h-[260px]"
          alt="Culture"
        />

        <img
          ref={(el) => (bottomImgs.current[2] = el)}
          src={juvol}
          className="hidden md:block rounded-xl w-full object-cover shadow-md md:h-[360px] md:mt-12"
          alt="Culture"
        />
      </div>
    </section>
  );
};

export default JoinUs;
