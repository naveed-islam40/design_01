import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa6";

const options = [
  "Maecenas vitae luctus nibh.",
  "Duis massa massa.",
  "Aliquam feugiat interdum.",
  "Maecenas vitae luctus nibh.",
  "Duis massa massa.",
  "Aliquam feugiat interdum.",
];

const Services = () => {
  const middleIndex = Math.ceil(options.length / 2);
  const leftOptions = options.slice(0, middleIndex);
  const rightOptions = options.slice(middleIndex);

  return (
    <div className="h-[100vh] mt-10 w-full ">
      <div className="flex justify-center items-center md:flex-col md:gap-6">
        <h1 className="text-4xl font-bold md:w-[650px] text-center">
          We Offer Different Services To Improve Your Health
        </h1>
        <Image
          src={"/assets/png/section-img.png"}
          alt="Image"
          width={60}
          height={60}
        />
        <p className="mt-5 md:w-[650px] text-[20px] text-center text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
          molestias explicabo earum repellat exercitationem magni cupiditate,
          vero totam? Voluptatibus officia eos ea vitae magnam architecto
          voluptatem sequi, reprehenderit minus optio?
        </p>
      </div>
      <div className="flex justify-evenly  items-center mt-5">
        {/* Left Section  */}
        <div>
          <div>
            <h1 className="text-3xl font-bold pb-3">Who We Are</h1>
            <span className="block h-[3px] w-[50px] bg-blue-600 "></span>
          </div>
          <p className="my-5 md:w-[550px] text-[15px] text-[#757575]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            pharetra antege vel est lobortis, a commodo magna rhoncus. In quis
            nisi non emet quam pharetra commodo.
          </p>
          <p className="my-5 md:w-[550px] text-[15px] mb-6 text-[#757575]">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </p>
          <div className="flex gap-10">
            <ul className="list-none pl-0 w-1/2">
              {leftOptions.map((option, index) => (
                <li key={index} className="flex items-center mb-2">
                  <span className="flex items-center justify-center w-5 h-5 bg-blue-600 rounded-full mr-3">
                    <FaPlay className="text-white text-xs" />
                  </span>
                  <span className="text-[15px] text-[#757575]">{option}</span>
                </li>
              ))}
            </ul>
            <ul className="list-none pl-0 w-1/2">
              {rightOptions.map((option, index) => (
                <li key={index} className="flex items-center mb-2">
                  <span className="flex items-center justify-center w-5 h-5 bg-blue-600 rounded-full mr-3">
                    <FaPlay className="text-white text-xs" />
                  </span>
                  <span className="text-[15px] text-[#757575]">{option}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right Section  */}
        <div>
          <Image src="/assets/png/pf1.jpg" alt="" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Services;
