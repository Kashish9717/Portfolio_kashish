// Footer Component
// Yeh portfolio website ka bottom section hai

import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";  
function Footer() {
  return (

    // Footer main container
    // bg-slate-900 = dark background
    // py-6 = vertical padding
    <footer className="bg-slate-900 text-white py-6">

      {/* Center content */}
      <div className="flex flex-col items-center gap-4">

        {/* Website Name / Logo */}
        <h1 className="text-xl font-bold text-cyan-400">
        Developed with love by Kashish Saxena © 2026
        </h1>

        {/* Social Icons */}
        <div className="flex gap-5">

          {/* Github */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="border border-cyan-400 p-2 rounded-full
            hover:bg-cyan-400 hover:text-black
            transition duration-300 hover:shadow-[0_0_20px_pink]"
          >
            <FaGithub size={18}/>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="border border-cyan-400 p-2 rounded-full
            hover:bg-cyan-400 hover:text-black
            transition duration-300 hover:shadow-[0_0_20px_pink]"
          >
            <FaLinkedinIn size={18}/>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="border border-cyan-400 p-2 rounded-full
            hover:bg-cyan-400 hover:text-black
            transition duration-300 hover:shadow-[0_0_20px_pink]"
          >
            <FaInstagram size={18}/>
          </a>

        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © 2026 Kashish.portfolio | All Rights Reserved
        </p>

      </div>

    </footer>
  );
}

export default Footer;