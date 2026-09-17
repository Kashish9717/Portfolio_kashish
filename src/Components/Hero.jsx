import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import Profile from "../assets/profile.jpg";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail, MdArrowOutward } from "react-icons/md";
import { RiRobot2Line, RiSparkling2Fill, RiCpuLine } from "react-icons/ri";

export default function Hero() {
  // particles engine initialize
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div
      id="home"
      className="relative w-full min-h-screen bg-[#090d16] overflow-hidden pt-24 md:pt-28 pb-16 flex items-center justify-center"
    >
      {/* ---------------- AMBIENT GLOWING GRADIENT ORBS ---------------- */}
      <div className="absolute top-1/4 left-10 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 md:w-96 md:h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

      {/* ---------------- PARTICLES BACKGROUND ---------------- */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0 pointer-events-none"
        options={{
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 65, density: { enable: true, area: 800 } },
            size: { value: { min: 1, max: 3 } },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              outModes: { default: "out" },
            },
            opacity: { value: { min: 0.2, max: 0.6 } },
            links: {
              enable: true,
              distance: 140,
              color: "#22d3ee",
              opacity: 0.25,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
            },
            modes: {
              grab: { distance: 160, links: { opacity: 0.5 } },
            },
          },
        }}
      />

      {/* ---------------- HERO CONTENT ---------------- */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* ---------------- LEFT TEXT SECTION ---------------- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="md:w-7/12 flex flex-col items-start"
        >
          {/* Status Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs md:text-sm font-medium backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span>Available for Full Stack & AI Automation Projects</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              Kashish Saxena
            </span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-xl md:text-3xl mt-3 text-cyan-300 font-semibold flex items-center gap-2 min-h-[36px]"
          >
            <RiSparkling2Fill className="text-cyan-400 animate-spin text-lg md:text-2xl" style={{ animationDuration: "6s" }} />
            <span>
              <Typewriter
                words={[
                  "Frontend & React Developer",
                  "MERN Stack Specialist",
                  "AI Automation & Workflows",
                  "Intelligent Web Solutions",
                  "Next-Gen UI/UX Builder"
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1800}
              />
            </span>
          </motion.div>

          {/* Summary / Description with AI Automation emphasis */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-slate-300 mt-5 text-base md:text-lg leading-relaxed max-w-xl"
          >
            I build high-performance, modern web applications and <span className="text-cyan-300 font-medium">AI-driven automated solutions</span>.
            Specializing in the <span className="text-white font-medium">MERN stack</span> (React.js, Node.js, Express, MongoDB) alongside
            <span className="text-cyan-300 font-medium"> AI workflow automation, smart API integrations,</span> and interactive UI architectures that streamline operations and deliver standout user experiences.
          </motion.p>

          {/* Feature highlights pill tags */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-wrap gap-2 mt-5 text-xs text-slate-300"
          >
            <span className="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/80">⚡ Full Stack MERN</span>
            <span className="px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">🤖 AI Automation & APIs</span>
            <span className="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/80">🎨 Interactive 3D/Motion UI</span>
          </motion.div>

          {/* Call to Actions & Socials */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-wrap gap-4 mt-8 items-center"
          >
            {/* Primary Action Button */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition shadow-[0_0_25px_rgba(34,211,238,0.4)] flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <MdArrowOutward className="text-lg" />
            </motion.a>

            {/* Resume Button */}
            <motion.a
              href="./resume.html"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl font-medium text-cyan-300 bg-slate-900/80 border border-cyan-500/40 hover:bg-cyan-950/50 hover:border-cyan-400 transition backdrop-blur-md"
            >
              View CV
            </motion.a>

            {/* Social Icons */}
            <div className="flex gap-3 ml-2 text-xl text-cyan-400">
              <motion.a
                whileHover={{ scale: 1.25, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/kashish9717"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-800/80 border border-slate-700 hover:border-cyan-400 hover:text-white transition shadow-sm"
                title="GitHub"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.25, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/kashish-saxena9717"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-800/80 border border-slate-700 hover:border-cyan-400 hover:text-white transition shadow-sm"
                title="LinkedIn"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.25, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="#contact"
                className="p-2.5 rounded-full bg-slate-800/80 border border-slate-700 hover:border-cyan-400 hover:text-white transition shadow-sm"
                title="Email Contact"
              >
                <MdEmail />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.25, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://instagram.com/___its_kashish"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-800/80 border border-slate-700 hover:border-cyan-400 hover:text-white transition shadow-sm"
                title="Instagram"
              >
                <FaInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* ---------------- RIGHT IMAGE & INTERACTIVE BADGES ---------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative md:w-5/12 flex justify-center items-center"
        >
          {/* Outer glowing halo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/25 to-purple-600/25 blur-2xl transform scale-105 pointer-events-none animate-pulse-glow" />

          {/* Profile Container */}
          <div className="relative group">
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Profile Image with cyber border */}
              <div className="p-1 rounded-full bg-gradient-to-br from-cyan-400 via-teal-500 to-purple-500 shadow-[0_0_50px_rgba(34,211,238,0.35)]">
                <img
                  src={Profile}
                  alt="Kashish Saxena"
                  className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Floating Badge 1: AI Automation */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-3 -right-2 md:-right-6 px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-slate-900/90 border border-cyan-400/50 backdrop-blur-md text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center gap-2 text-xs md:text-sm font-semibold"
              >
                <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300">
                  <RiRobot2Line className="text-base md:text-lg" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Expertise</p>
                  <p className="text-cyan-300">AI Automation</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: MERN Stack */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                  x: [0, -4, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-2 md:-left-6 px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-slate-900/90 border border-purple-400/50 backdrop-blur-md text-white shadow-[0_0_20px_rgba(168,85,247,0.25)] flex items-center gap-2 text-xs md:text-sm font-semibold"
              >
                <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300">
                  <RiCpuLine className="text-base md:text-lg" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Stack</p>
                  <p className="text-purple-300">MERN Developer</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}