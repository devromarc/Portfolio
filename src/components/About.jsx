import React from "react";
import Image from "../assets/avatar.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" flex flex-col justify-center items-center w-full h-full">
        <div className=" max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className=" sm:text-left pb-8 ml-4 mb-5">
            <p className=" text-4xl font-bold inline border-b-4 border-blue-600 capitalize">
              about
            </p>
          </div>
          <div></div>
        </div>
        <div className=" max-w[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className=" max-w-[350px] mx-auto mb-3">
            <img className=" rounded-lg" src={Image}></img>
          </div>
          <div className=" sm:text-left text-xl font-medium">
            <p>
              Contrary to popular belief, Lorem I "Lorem ipsum dolor sit amet..
              ontrary to popular belief, Lorem I "Lorem ipsum dolor sit amet
              ontrary to popular belief, Lorem I "Lorem ipsum dolor sit amet",
              comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
