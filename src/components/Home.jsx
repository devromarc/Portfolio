import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full h-screen bg-gradient-to-b from-black to-gray-800"
    >
      {/* Container */}
      <div className=" text-white max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className=" text-blue-600 text-lg">Hi, my name is</p>
        <h1 className=" text-5xl sm:text-7xl font-bold">Romarc Salvador</h1>
        <h2 className=" text-2xl text-gray-400  font-semibold">
          I'm an aspiring Full Stack Developer
        </h2>
        <p className=" py-2 text-gray-600 max-w-[600px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          consequuntur beatae id dicta tempora explicabo sapiente l aboriosam
          mollitia odio ipsam.
        </p>
        <div className="flex">
          <button
            className=" group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600"
          >
            View My Work
            <span className=" group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className=" ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <motion.p
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} */
}
