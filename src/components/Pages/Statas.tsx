import Image from "next/image";
import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { RiEmotionHappyLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";

const Statas = () => {
  return (
    <div className="h-[400px] relative">
      <img
        src={"/assets/png/blockqoute-bg.jpg"}
        alt=""
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-[400px] bg-blue-700 opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex gap-4">
        <div className="flex items-center gap-4 w-[300px]">
          <FaHome className="h-[100px] w-[100px] border rounded-full p-8 hover:bg-white hover:text-blue-600 transition ease-in-out duration-500" />
          <span>
            <h1 className="font-semibold text-3xl">4367</h1>
            <p className="text-[18px]">Hospital Rooms</p>
          </span>
        </div>
        <div className="flex items-center gap-4 w-[300px]">
          <IoIosPerson className="h-[100px] w-[100px] border rounded-full p-8 hover:bg-white hover:text-blue-600 transition ease-in-out duration-500" />
          <span>
            <h1 className="font-semibold text-3xl">4367</h1>
            <p className="text-[18px]">Hospital Rooms</p>
          </span>
        </div>
        <div className="flex items-center gap-4 w-[300px]">
          <RiEmotionHappyLine className="h-[100px] w-[100px] border rounded-full p-8 hover:bg-white hover:text-blue-600 transition ease-in-out duration-500" />
          <span>
            <h1 className="font-semibold text-3xl">4367</h1>
            <p className="text-[18px]">Hospital Rooms</p>
          </span>
        </div>
        <div className="flex items-center gap-4 w-[300px]">
          <SlCalender className="h-[100px] w-[100px] border rounded-full p-8 hover:bg-white hover:text-blue-600 transition ease-in-out duration-500" />
          <span>
            <h1 className="font-semibold text-3xl">4367</h1>
            <p className="text-[18px]">Hospital Rooms</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Statas;
