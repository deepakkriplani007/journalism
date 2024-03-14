import React from "react";
import { motion } from "framer-motion";
const Card = () => {
  return (
    <motion.div
      id="card"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className=" w-full p-8 mt-32 justify-center gap-3 flex flex-col  items-center "
    >
      <div className=" text-center  bg-[#162242] rounded-lg p-1 mb-16 ">
        <h1 className="text-white text-3xl font-semibold">COURSE HIGHLIGHTS</h1>
      </div>
      <div className=" flex  justify-center max-lg:flex-col gap-10">
        <div class="bg-white  rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div class="p-1 bg-green-200"></div>
          <div class="p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">
              {" "}
              Introduction to Feature Journalism
            </h2>
            <p class="text-gray-600 mb-6">
              Explore what sets feature journalism apart from other journalistic
              forms in this course
            </p>
            <p class="text-4xl font-bold text-gray-800 mb-6">$49.99</p>
            <ul class="text-sm text-gray-600 mb-6">
              <li class="mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-4 h-4 mr-2 text-green-500"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
                Knowledge of how feature journalism
              </li>
              <li class="mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-4 h-4 mr-2 text-green-500"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
                Skills to analyze the legal and ethical parameters
              </li>
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-4 h-4 mr-2 text-green-500"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
                Discuss the history and development of journalism
              </li>
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-4 h-4 mr-2 text-green-500"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
                basic step-by-step construction of news items{" "}
              </li>
            </ul>
          </div>
          <div class="p-4">
            <button class="w-full bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800">
              Enroll Now
            </button>
          </div>
        </div>
        <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div class="p-1 bg-green-200"></div>
          <div class="p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">
              {" "}
              Journalism & Finding the Truth in the News
            </h2>
            <p class="text-gray-600 mb-6">
              Learn to ask the right questions & tell captivating stories
            </p>
            <p class="text-4xl font-bold text-gray-800 mb-6">$69.99</p>
            <ul class="text-sm text-gray-600 mb-6">
              <li class="mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-4 h-4 mr-2 text-green-500"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
                Analyze and investigate news
              </li>
              <li class="mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-4 h-4 mr-2 text-green-500"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
                Produce sharp, concise writing
              </li>
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-4 h-4 mr-2 text-green-500"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
                Skills of effortlessly presentation
              </li>
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-4 h-4 mr-2 text-green-500"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
                The vital role of press freedom to empowering society
              </li>
            </ul>
          </div>
          <div class="p-4">
            <button class="w-full bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800">
              Enroll Now
            </button>
          </div>
        </div>
        <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div class="p-1 bg-green-200"></div>
          <div class="p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">
              Gathering and Developing the News
            </h2>
            <p class="text-gray-600 mb-6">
              course will teach you advance concept of journalism
            </p>
            <p class="text-4xl font-bold text-gray-800 mb-6">$99.99</p>
            <ul class="text-sm text-gray-600 mb-6">
              <li class="mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-4 h-4 mr-2 text-green-500"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
                How - and where - journalists obtain information
              </li>
              <li class="mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-4 h-4 mr-2 text-green-500"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
                Path of successful journalists
              </li>
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  class="w-4 h-4 mr-2 text-green-500"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
                Use internet resources in journalism
              </li>
            </ul>
          </div>
          <div class="p-4">
            <button class="w-full bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
