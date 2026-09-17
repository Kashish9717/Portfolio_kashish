import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between px-6 md:px-16 py-4 bg-[#090d16]/80 backdrop-blur-md text-white fixed top-0 w-full h-20 z-50 border-b border-slate-800/80 shadow-lg shadow-black/20"
    >
      {/* ---------- LOGO ---------- */}
      <a href="#home" className="flex items-center gap-2 group">
        <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:rotate-6 transition-transform">
          K
        </span>
        <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
          Kashish<span className="text-cyan-400">.dev</span>
        </h1>
      </a>

      {/* ---------- DESKTOP LINKS ---------- */}
      <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-300">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-cyan-400 transition-colors duration-200 relative py-1 group"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Action CTA in Navbar */}
      <div className="hidden md:flex items-center gap-4">
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-[0_0_15px_rgba(34,211,238,0.15)]"
        >
          Let's Talk
        </motion.a>
      </div>

      {/* ---------- MOBILE MENU ICON ---------- */}
      <div className="md:hidden">
        {menu ? (
          <RiCloseLine
            size={28}
            className="cursor-pointer text-cyan-400"
            onClick={() => setMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={28}
            className="cursor-pointer hover:text-cyan-400 transition-colors"
            onClick={() => setMenu(true)}
          />
        )}
      </div>

      {/* ---------- MOBILE MENU ---------- */}
      {menu && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 w-full bg-[#0b101d]/95 backdrop-blur-xl flex flex-col items-center gap-6 py-8 text-base font-semibold border-b border-slate-800 shadow-2xl md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenu(false)}
              className="text-slate-200 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenu(false)}
            className="mt-2 px-6 py-2.5 rounded-full text-sm font-semibold bg-cyan-400 text-slate-950"
          >
            Let's Talk
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;