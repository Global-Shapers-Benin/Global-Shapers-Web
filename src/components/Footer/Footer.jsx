import React, { useState } from "react";
import globallogo from "../../assets/global-logo.png";
import cylinder from "../../assets/cylinder.png";
import DynamicButton from "../DynamicButton";
import { FiArrowUpRight } from "react-icons/fi";
import line from "../../assets/Line.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate successful subscription
    setSuccess("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className=" relative">
      {/* <img src={cylinder} alt="" className="absolute right-0 w-[30rem]" /> */}
      <div className="wrapper p-12">
        <div className="">
          <img src={globallogo} alt="" className="h-20" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 pt-6 gap-8">
          <div className="sm:grid sm:grid-cols-2  font-medium gap-6 justify-between text-start md:flex-col">
            <div className="flex flex-col gap-4 pb-4 sm:pb-[auto] sm:">
              <h2 className="text-[clamp(1rem,2vw,1.2rem)] max-w-xs">
                Develop as a leader, collaborate for impact and make a global
                difference.
              </h2>
              
                <DynamicButton text="Join Us" className="text-sm" />
              
            </div>

            <div>
              <p>Call our Office</p>
              <p className="text-[0.74rem] font-Merrylight">+234 782 2342 332</p>

              <br />

              <p>Send a Message</p>
              <p className="text-[0.74rem]">info@beninglobalshapers.com</p>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-2 text-start  sm:text-center ">
            <div className="text-start md:text-center">
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2 font-normal">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Project
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Join Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-start md:text-center">
              <h3 className="text-lg font-bold  mb-4">Follow Us</h3>
              <ul className="flex flex-col space-y-2 ">
                <li>
                  <a href="#" className="text-normal hover:text-blue-500">
                    Instagram{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-normal hover:text-blue-500">
                    x{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-normal hover:text-blue-500">
                    Facebook{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-normal hover:text-blue-500">
                    LinkedIn{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-1 flex flex-col gap-3 text-start items-start">
            <h3 className="text-2xl  font-bold mb-4">
              Subscribe to our <br /> <span className="text-blue-500">Newsletter</span>
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="name@email.com"
                className={`w-full px-4 py-2 mb-2 rounded bg-white focus:outline-none text-black 
                ${
                  error ? "border-red-500" : success ? "border-green-500" : ""
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
              {success && (
                <p className="text-green-500 text-sm mb-2">{success}</p>
              )}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-3xl  py-2 hover:bg-blue-800 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-[clamp(0.6rem,2vw,1.2rem)] font-Merrylight items-center bg-[#141414] py-6">
        <p>Copyright @ 2024 Beninglobalshapers.com</p>
        <div className="flex gap-3 items-center  justify-center">
          <p>Privacy Policy</p>
          <img src={line} alt="" />
          <p>Terms of Service</p>
          <img src={line} alt="" />
          <p>Support</p>
          <img src={line} alt="" />
          <p>FAQs</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
