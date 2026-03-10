// mobile icons ke liye remix icons install karo
// npm install @remixicon/react

import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

function Navbar() {

  // mobile menu open/close state
  const [menu, setMenu] = useState(false);

  return (

    <motion.nav

      // navbar page load par upar se slide hoke ayega
      initial={{ y: -80 }}

      // final position bilkul top
      animate={{ y: 0 }}

      // animation speed
      transition={{ duration: 0.5 }}

      // fixed navbar
      // top-0 → bilkul top par stick
      // px-4 md:px-12 → responsive spacing
      className="flex items-center justify-between px-4 md:px-12 py-4 bg-slate-900 text-white fixed top-0 w-full h-20 z-50
      border-b border-cyan-400/40"
    >

      {/* ---------- LOGO ---------- */}

      <h1 className="text-xl md:text-2xl font-bold text-cyan-400 cursor-pointer">
        Kashish.Portfolio
      </h1>


      {/* ---------- DESKTOP LINKS ---------- */}

      {/* md se bade screen par show honge */}
      <div className="hidden md:flex gap-18 font-semibold text-xl mr-20">

        <a href="#home" className="hover:text-cyan-400 transition">Home</a>
        <a href="#about" className="hover:text-cyan-400 transition">About</a>
        <a href="#services" className="hover:text-cyan-400 transition">Services</a>
        <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
        <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
        <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>

      </div>


      {/* ---------- MOBILE MENU ICON ---------- */}

      <div className="md:hidden">

        {menu ? (
          <RiCloseLine
            size={30}
            className="cursor-pointer"
            onClick={() => setMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="cursor-pointer"
            onClick={() => setMenu(true)}
          />
        )}

      </div>


      {/* ---------- MOBILE MENU ---------- */}

      {menu && (

        <div
          className="absolute top-16 left-0 w-full bg-slate-900 flex flex-col items-center gap-6 py-6 text-lg font-semibold md:hidden"
        >

          <a href="#home" onClick={()=>setMenu(false)}>Home</a>
          <a href="#about" onClick={()=>setMenu(false)}>About</a>
          <a href="#services" onClick={()=>setMenu(false)}>Services</a>
          <a href="#skills" onClick={()=>setMenu(false)}>Skills</a>
          <a href="#projects" onClick={()=>setMenu(false)}>Projects</a>
          <a href="#contact" onClick={()=>setMenu(false)}>Contact</a>

        </div>

      )}
   

    </motion.nav>
  );
}

export default Navbar;