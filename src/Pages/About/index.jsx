import React, { useEffect, useState } from "react";
import meImage from "../../assets/me.jpg"; // Pastikan path ini benar

export default function About() {
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-[10%] grid grid-cols-12 w-full h-full min-h-screen relative justify-center items-center">
      <div className="pt-20 col-span-12 text-center">
          <h2 className="text-2xl md:text-4xl text-slate-50">
            <span className="text-2xl md:text-4xl text-blue-400">About </span>
            Me
          </h2>
        </div>
      <div
        className={`col-span-12 md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-8 flex flex-col gap-4 text-darkSlate justify-center items-center transform transition-all duration-700 ${
          visible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        }`}
      >
        <div className="pt-20 md:mb-0 mb-5 md:pb-20 px-7 sm:px-8 md:px-2">
          <div className="flex items-center justify-center">
            <h2 className="text-xl md:text-2xl text-slate-50">#Introduction</h2>
            <span className="ml-4 w-full h-px bg-slate-700"></span>
          </div>
          <h3 className="pt-2 text-justify text-lg md:text-lg text-slate-300 max-w-full">
            Hello, my name is Muhammad Roihan. I am a web developer with experience since 2021. My interest in web application development began during my college years, where I found satisfaction in developing my logical thinking and problem-solving skills through programming. I am committed to continuously enhancing my passion and expertise in this field. Let's work together and share knowledge to achieve the best results.
          </h3>
          <h3 className="pt-2 text-justify text-lg md:text-lg text-slate-300 max-w-full mb-2">
            Here are some technologies I've learned about recently:
          </h3>
          <ul className="list-disc list-inside text-left text-lg md:text-base text-slate-300 max-w-full grid grid-cols-2 gap-x-10">
            <li>PHP</li>
            <li>Golang</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>MySQL</li>
            <li>ReactJS</li>
            <li>Bootstrap</li>
            <li>Laravel</li>
            <li>UI Materials</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>
      <div className="col-span-12 mb-20 md:mb-0 md:col-start-8 md:col-end-13 lg:col-start-9 lg:col-end-13 flex justify-center items-center">
        <div className="group relative">
          {isLoading && (
            <div className="absolute inset-0 flex justify-center items-center z-10">
              <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
            </div>
          )}
          <div className="w-[250px] md:w-[280px] lg:w-[300px] h-[250px] md:h-[280px] lg:h-[300px] relative transition-all duration-300 rounded-md overflow-hidden">
            <img
              src={meImage}
              alt="Me"
              className={`object-cover w-full h-full transition-all duration-300 ${isLoading ? 'hidden' : ''}`}
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <span className="absolute -z-10 top-3 left-3 w-[250px] md:w-[280px] lg:w-[300px] h-[250px] md:h-[280px] lg:h-[300px] border-2 border-blue-500 rounded-md transition-all duration-300 group-hover:mt-[1px] group-hover:ml-[1px] md:group-hover:mt-[3px] md:group-hover:ml-[3px]"></span>
        </div>
      </div>
    </div>
  );
}
