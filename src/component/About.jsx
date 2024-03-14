import React from "react";
import { FaCheck } from "react-icons/fa";
import person from "../assets/person.svg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full sm:flex flex-row px-4 text-white"
    >
      <div className="">
        <div className=" items-center justify-center flex">
          <h1 className="heading sm:text-6xl text-3xl font-bold mb-10">
            Why Mr. Arun's Course?
          </h1>
        </div>

        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4">
            <div className="image">
              <img src={person} alt="" className="w-full max-sm:hidden" />
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-2/3 px-4">
            <div className="">
              <h2 className="text-2xl mb-4">
                <FaCheck className="inline-block text-green-800 " />
                <span className="text-orange-900 font-semibold">
                  {"  "}A Mentor Like No Other
                </span>{" "}
                Benefit from Mr. Arun's wealth of experience, insights, and
                personalized guidance.
              </h2>
              <h2 className="text-2xl mb-4">
                <FaCheck className="inline-block text-green-800 " />
                <span className="text-orange-900 font-semibold">
                  {"  "} Practical Wisdom
                </span>{" "}
                Move beyond theory with practical exercises, ensuring you're
                ready for the dynamic world of journalism.
              </h2>
              <h2 className="text-2xl mb-4">
                <FaCheck className="inline-block text-green-800 " />
                <span className="text-orange-900 font-semibold">
                  {"  "} Exclusive Q&A Sessions
                </span>{" "}
                Engage directly with Mr. Arun in live Q&A sessions, gaining
                invaluable insights and advice.
              </h2>
              <h2 className="text-2xl mb-4">
                <FaCheck className="inline-block text-green-800 " />
                <span className="text-orange-900 font-semibold">
                  {"  "} Lifetime Access
                </span>{" "}
                Once enrolled, enjoy lifetime access to course materials and
                future updates.
              </h2>
              <br />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
