import React, { useEffect, useState } from "react";
import meImage from "../../assets/me.png"; // Pastikan path ini benar

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="px-[10%] flex flex-col md:flex-row justify-center items-center w-full h-full min-h-screen">
      <div
        className={`pt-20 md:pb-20 text-center md:text-left transform transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-3xl md:text-4xl text-slate-50">
          Let's make <span className="text-blue-400">connections</span>
        </h2>
        <h1 className="pt-1 text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50">Contact me here</h1>
        <div className="pt-4">
          <a
            href="mailto:roihan850@gmail.com"
            className="inline-block bg-blue-500 min-w-full text-center hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          >
            Email Me
          </a>
        </div>
        <div className="flex space-x-4 pt-4 justify-center md:justify-start">
          <a className="mr-2 md:mr-5" href="https://github.com/brian1alpharse" target="_blank" rel="noopener noreferrer">
            <svg
              className="w-10 h-10 text-slate-50 hover:text-blue-400"
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
          <a className="ml-0 md:ml-5" href="https://www.linkedin.com/in/roy44acc1/" target="_blank" rel="noopener noreferrer">
            <svg
              className="w-10 h-10 text-slate-50 hover:text-blue-400"
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
