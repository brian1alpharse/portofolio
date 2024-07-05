import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/mlog.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed z-10 top-0 left-0 w-full bg-slate-900 flex flex-col justify-between">
      <div className="flex items-center h-12 px-[7%] justify-between">
        <Link to="/">
          <div className="flex flex-row items-center">
            <img src={logo} alt="Logo" className="h-9 w-9" />
            <h1 className="text-2xl font-bold text-slate-50 ml-4 duration-200 hover:drop-shadow-xl hidden lg:block">Muhammad Roihan</h1>
            <h1 className="text-2xl font-bold text-slate-50 ml-4 duration-200 hover:drop-shadow-xl lg:hidden">MR</h1>
          </div>
        </Link>

        <div className="hidden md:flex space-x-10">
            <Link to="/">
            <h1 className="text-slate-50 duration-200 hover:text-blue-400">Home</h1>
          </Link>
          <Link to="/about">
            <h1 className="text-slate-50 duration-200 hover:text-blue-400">About</h1>
          </Link>
          <Link to="/experience">
            <h1 className="text-slate-50 duration-200 hover:text-blue-400">Experience</h1>
          </Link>
          <Link to="/project">
            <h1 className="text-slate-50 duration-200 hover:text-blue-400">Project</h1>
          </Link>
          <Link to="/contact">
            <h1 className="text-slate-50 duration-200 hover:text-blue-400">Contact</h1>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-slate-50 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full h-0.5 bg-blue-500"></div>

      <div
        className={`${
          menuOpen ? 'max-h-screen opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-0'
        } md:hidden flex flex-col items-center space-y-4 bg-slate-900 bg-opacity-90 py-0 transition-all duration-300 ease-in-out transform origin-top`}
      >
        <Link to="/" onClick={toggleMenu} className="hover:bg-blue-500 p-1 w-full text-center">
          <h1 className="text-slate-50">Home</h1>
        </Link>
        <Link to="/about" onClick={toggleMenu} className="hover:bg-blue-500 p-1 w-full text-center">
          <h1 className="text-slate-50">About</h1>
        </Link>
        <Link to="/experience" onClick={toggleMenu} className="hover:bg-blue-500 p-1 w-full h-full text-center">
          <h1 className="text-slate-50">Experience</h1>
        </Link>
        <Link to="/project" onClick={toggleMenu} className="hover:bg-blue-500 p-1 w-full text-center">
          <h1 className="text-slate-50">Project</h1>
        </Link>
        <Link to="/contact" onClick={toggleMenu} className="hover:bg-blue-500 p-1 w-full text-center">
          <h1 className="text-slate-50">Contact</h1>
        </Link>
      </div>
    </div>
  );
}
