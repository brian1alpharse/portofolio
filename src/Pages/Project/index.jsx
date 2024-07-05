import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import project1 from "../../assets/p1.png";
import project2 from "../../assets/p2.png";
import project3 from "../../assets/p3.png";

export default function Project() {
  const [isLoading, setIsLoading] = useState(true);
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

  useEffect(() => {
    setIsLoading(false); // Assuming the images are loaded initially
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-[10%] w-full h-full min-h-screen relative">
      <div className="pt-20 col-span-12 text-center">
        <h2 className="text-2xl md:text-4xl text-slate-50">
          <span className="text-2xl md:text-4xl text-blue-400">Project </span>
          History
        </h2>
      </div>
      <div className="mt-10 col-span-12 grid grid-cols-1 justify-center items-center text-darkSlate">
        {/* Card 1 */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mt-10 group relative flex flex-col md:flex-row items-start bg-gray-800 p-4 rounded-lg shadow-lg flex-grow"
        >
          <div className="max-w-full md:max-w-[40%] w-full md:w-auto h-auto md:h-[280px] relative transition-all duration-300 rounded-md overflow-hidden">
            <img
              src={project1}
              alt="Project 1"
              className={`object-cover w-full h-full transition-all duration-300 ${
                isLoading ? "hidden" : ""
              }`}
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <div className="pt-4 md:pt-0 md:pl-6 flex flex-col justify-center items-start">
            <div className="flex flex-row w-full items-center justify-center md:justify-start">
              <h2 className="text-xl md:text-2xl text-slate-50 whitespace-nowrap">KEJATI Perpus</h2>
              <span className="ml-4 w-full h-px bg-slate-700"></span>
            </div>
            <h3 className="pt-2 text-justify text-sm md:text-base text-slate-300 max-w-full md:max-w-[70%]">
              A system that aims to store book data in the agency. This system can also record book borrowings.
            </h3>
            <h3 className="pt-2 text-justify text-sm md:text-base text-slate-300 max-w-full mb-2">
              Technology used:
            </h3>
            <ul className="list-disc list-inside text-left text-sm md:text-base text-slate-300 max-w-full grid grid-cols-2 gap-x-10">
              <li>PHP</li>
              <li>AdminLTE</li>
              <li>MySQL</li>
              <li>CodeIgniter</li>
            </ul>
            <div className="pt-4">
              <a
                href="https://github.com/brian1alpharse/KEJATI_PERPUS"
                className="inline-block bg-blue-500 min-w-full text-center hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                See Repository
              </a>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mt-10 group relative flex flex-col md:flex-row items-start bg-gray-800 p-4 rounded-lg shadow-lg flex-grow"
        >
          <div className="max-w-full md:max-w-[40%] md:w-full w-auto h-auto md:h-[280px] relative transition-all duration-300 rounded-md overflow-hidden">
            <img
              src={project2}
              alt="Project 2"
              className={`object-cover w-full h-full transition-all duration-300 ${
                isLoading ? "hidden" : ""
              }`}
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <div className="pt-4 md:pt-0 md:pl-6 flex flex-col justify-center items-start">
            <div className="flex flex-row w-full items-center justify-center md:justify-start">
              <h2 className="text-xl md:text-2xl text-slate-50 whitespace-nowrap">Jastra Card</h2>
              <span className="ml-4 w-full h-px bg-slate-700"></span>
            </div>
            <h3 className="pt-2 text-justify text-sm md:text-base text-slate-300 max-w-full md:max-w-[70%]">
              A system for reviewing warehouse inventory. This system applies the FIFO method to more easily control the oldest items stored at the earliest. This system can also be used as a gallery to attract customers.
            </h3>
            <h3 className="pt-2 text-justify text-sm md:text-base text-slate-300 max-w-full mb-2">
              Technology used:
            </h3>
            <ul className="list-disc list-inside text-left text-sm md:text-base text-slate-300 max-w-full grid grid-cols-2 gap-x-10">
              <li>PHP</li>
              <li>AdminLTE</li>
              <li>MySQL</li>
              <li>CodeIgniter</li>
            </ul>
            <div className="pt-4">
              <a
                href="https://github.com/brian1alpharse/jcard"
                className="inline-block bg-blue-500 min-w-full text-center hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                See Repository
              </a>
            </div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mt-10 mb-20 group relative flex flex-col md:flex-row items-start bg-gray-800 p-4 rounded-lg shadow-lg flex-grow"
        >
          <div className="max-w-full md:max-w-[40%] w-full md:w-auto h-auto md:h-[280px] relative transition-all duration-300 rounded-md overflow-hidden">
            <img
              src={project3}
              alt="Project 3"
              className={`object-cover w-full h-full transition-all duration-300 ${
                isLoading ? "hidden" : ""
              }`}
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <div className="pt-4 md:pt-0 md:pl-6 flex flex-col justify-center items-start">
            <div className="flex flex-row w-full items-center justify-center md:justify-start">
              <h2 className="text-xl md:text-2xl text-slate-50 whitespace-nowrap">SIMHASPI</h2>
              <span className="ml-4 w-full h-px bg-slate-700"></span>
            </div>
            <h3 className="pt-2 text-justify text-sm md:text-base text-slate-300 max-w-full md:max-w-[70%]">
              Audit report results system. In this project I revamped the system by adding several needed features and pages.
            </h3>
            <h3 className="pt-2 text-justify text-sm md:text-base text-slate-300 max-w-full mb-2">
              Technology used:
            </h3>
            <ul className="list-disc list-inside text-sm text-lg md:text-base text-slate-300 max-w-full grid grid-cols-2 gap-x-10">
              <li>React JS</li>
              <li>Material UI</li>
              <li>Beego Server</li>
            </ul>
            <div className="pt-4">
              <a
                href="#"
                className="inline-block min-w-full text-center bg-gray-500 text-white font-bold py-2 px-4 rounded-md transition duration-300 cursor-not-allowed opacity-50"
                style={{ pointerEvents: "none" }}
              >
                Repository Not Available
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
