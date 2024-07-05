import React, { useEffect, useState } from "react";

export default function Experience() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-[10%] grid grid-cols-12 w-full h-full min-h-screen relative justify-center items-start">
      <div className="pt-20 col-span-12 text-center">
        <h2 className="text-2xl md:text-4xl text-slate-50">
          <span className="text-2xl md:text-4xl text-blue-400">My </span>
          Experience
        </h2>
      </div>

      <div
        className={`col-span-12 md:col-start-1 md:col-end-6 lg:col-start-1 lg:col-end-6 flex flex-col items-start px-7 sm:px-8 md:px-4 transform transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="pt-5 md:pt-0 min-w-full mb-5 md:mb-0 md:pb-5 border-b-2 border-blue-500">
          <h1 className="text-center text-lg md:text-2xl text-slate-50 hover:text-blue-400 flex items-center justify-center">
            <span className="mr-2">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
                />
              </svg>
            </span>
            Education
          </h1>
          <h3 className="pt-5 text-justify text-base md:text-lg text-slate-300 max-w-full">
            <span className="text-blue-400">University: </span>
            Universitas Teknokrat Indonesia
          </h3>
          <h3 className="pt-1 text-justify text-base md:text-lg text-slate-300 max-w-full">
            <span className="text-blue-400">Major: </span>
            Information Technology
          </h3>
          <h3 className="pt-1 text-justify text-base md:text-lg text-slate-300 max-w-full">
            <span className="text-blue-400">Graduate: </span>
            September 2022
          </h3>
        </div>
      </div>

      <div
        className={`col-span-12 mb-20 md:mb-0 md:col-start-7 md:col-end-12 lg:col-start-7 lg:col-end-12 flex flex-col items-start px-7 sm:px-8 md:px-4 justify-center transform transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="pt-5 md:pt-0 min-w-full mb-5 md:mb-0 md:pb-5 border-b-2 border-blue-500">
          <h1 className="text-center text-lg md:text-2xl text-slate-50 hover:text-blue-400 flex items-center justify-center">
            <span className="mr-2">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
                />
              </svg>
            </span>
            Work
          </h1>
          <h3 className="pt-5 text-justify text-base md:text-lg text-slate-300 max-w-full">
            <span className="text-blue-400">Company: </span>
            Kejaksaan Tinggi Lampung
          </h3>
          <h3 className="pt-1 text-justify text-base md:text-lg text-slate-300 max-w-full">
            <span className="text-blue-400">Position: </span>
            Administrative Intern
          </h3>
          <h3 className="pt-1 text-justify text-base md:text-lg text-slate-300 max-w-full">
            <span className="text-blue-400">Timeline: </span>
            July 2021 - September 2021
          </h3>
        </div>
        <div className="pt-5 mb-5 min-w-full md:mb-0 md:pb-5 border-b-2 border-blue-500">
          <h3 className="text-justify text-base md:text-lg text-slate-300 max-w-full">
            <span className="text-blue-400">Company: </span>
            CV Wisnu Jaya
          </h3>
          <h3 className="pt-1 text-justify text-base md:text-lg text-slate-300 max-w-full">
            <span className="text-blue-400">Position: </span>
            Administrative Staff
          </h3>
          <h3 className="pt-1 text-justify text-base md:text-lg text-slate-300 max-w-full">
            <span className="text-blue-400">Timeline: </span>
            Mei 2023 - Desember 2023
          </h3>
        </div>
        <div className="pt-5 min-w-full mb-5 md:mb-0 md:pb-5 border-b-2 border-blue-500">
          <h3 className="text-justify text-base md:text-lg text-slate-300 max-w-full">
            <span className="text-blue-400">Company: </span>
            PT Permodalan Nasional Madani
          </h3>
          <h3 className="pt-1 text-justify text-base md:text-lg text-slate-300 max-w-full">
            <span className="text-blue-400">Position: </span>
            Fullstack Developer Intern
          </h3>
          <h3 className="pt-1 text-justify text-base md:text-lg text-slate-300 max-w-full">
            <span className="text-blue-400">Timeline: </span>
            February 2024 - Mei 2024
          </h3>
        </div>
      </div>
    </div>
  );
}
