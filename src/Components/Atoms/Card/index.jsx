import React from "react";
import { Link } from "react-router-dom";

export default function Card() {

  return (
    <div className="px-[10%] flex flex-col md:flex-row justify-center items-center w-full h-full min-h-screen">
      <div className="pt-20 md:pb-20 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl text-slate-50">
          Hello, <span className="text-blue-400">I'm</span>
        </h2>
        <h1 className="pt-1 text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50">Muhammad Roihan</h1>
        <h3 className="pt-2 text-lg md:text-xl lg:text-2xl text-slate-300 max-w-md">
          I'm a Web Developer. I am interested in developing websites and want to continue improving my programming skills.
        </h3>
        <div className="flex space-x-4 pt-4 justify-center md:justify-start">
          <a href="https://github.com/brian1alpharse" target="_blank" rel="noopener noreferrer">
            <svg
              className="w-6 h-6 text-slate-50 hover:text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.168c-3.338.726-4.033-1.416-4.033-1.416-.546-1.388-1.333-1.758-1.333-1.758-1.091-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.998.108-.775.418-1.305.76-1.605-2.665-.306-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.527.117-3.176 0 0 1.008-.323 3.301 1.23a11.52 11.52 0 013.005-.404c1.02.004 2.045.138 3.005.404 2.293-1.553 3.299-1.23 3.299-1.23.653 1.649.242 2.873.119 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.62-5.479 5.918.429.371.813 1.102.813 2.222v3.293c0 .319.192.69.801.574C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/roy44acc1/" target="_blank" rel="noopener noreferrer">
            <svg
              className="w-6 h-6 text-slate-50 hover:text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.998 0h-16C1.792 0 0 1.792 0 4.002v15.996C0 22.208 1.792 24 4.002 24h15.996C22.208 24 24 22.208 24 19.998V4.002C24 1.792 22.208 0 19.998 0zm-11.29 20.451H5.327v-9.859h3.382v9.859zM6.999 8.931h-.025c-1.138 0-1.875-.784-1.875-1.762 0-.998.761-1.762 1.925-1.762s1.875.764 1.9 1.762c0 .978-.737 1.762-1.925 1.762zm13.451 11.52h-3.383v-5.195c0-1.307-.466-2.199-1.635-2.199-.891 0-1.422.605-1.655 1.188-.085.212-.106.509-.106.805v5.401H9.288s.045-8.762 0-9.859h3.383v1.397c.449-.693 1.247-1.68 3.031-1.68 2.212 0 3.875 1.457 3.875 4.596v5.546h-.001z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
