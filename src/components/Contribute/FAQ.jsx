import { useRef, useState } from "react";
import faq from "../../data/faq";
import Accordion from "../../components/Contribute/Accordion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const [FAQs, setFAQs] = useState(faq);
  const tl = useRef(null);
  const container = useRef(null);

  const setIsOpen = (index) => {
    setFAQs((prevFAQ) =>
      prevFAQ.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : false,
      }))
    );
  };

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".faq_title",
          start: "top 70%",
        },
      });

      tl.current
        .from(".faq_title", {
          opacity: 0,
          y: 100,
        })
        .from(".faqs > div", {
          rotateX: 90,
          stagger: 0.45,
          ease: "back",
        });
    },
    { dependencies: [], scope: container }
  );

  return (
    <div ref={container} className="px-5 pt-10 mb-10 text-justify ">
      <div className="max-w-[48.88rem] mx-auto ">
        <h1 className="heading mb-6 faq_title font-heading md:text-3xl font-bold text-white ">
          Frequently Asked Questions
        </h1>
        <div className="space-y-[1.12rem] font-open-sans faqs">
          {FAQs.map((faq, index) => (
            <Accordion
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={faq.isOpen}
              setIsOpen={() => setIsOpen(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
