import { motion } from "framer-motion";
import Profile from "../assets/profile.jpg";
import { RiRobot2Line, RiCodeSSlashLine, RiSpeedUpLine } from "react-icons/ri";

function About() {
  const stats = [
    { label: "MERN Stack", value: "Full Stack", icon: <RiCodeSSlashLine className="text-cyan-400 text-xl" /> },
    { label: "AI & Automation", value: "APIs & Agents", icon: <RiRobot2Line className="text-purple-400 text-xl" /> },
    { label: "Web Projects", value: "10+ Deployed", icon: <RiSpeedUpLine className="text-teal-400 text-xl" /> },
  ];

  return (
    <section
      id="about"
      className="bg-[#0b101d] text-white pt-24 pb-20 px-6 md:px-16 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ---------------- MAIN CONTAINER ---------------- */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* ---------------- LEFT IMAGE SECTION ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-5/12 flex flex-col items-center relative"
        >
          {/* Glowing container */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/30 to-purple-600/30 blur-xl transform group-hover:scale-105 transition duration-500"></div>
            <motion.img
              src={Profile}
              alt="Kashish Saxena"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl border-2 border-cyan-400/60 shadow-[0_0_40px_rgba(34,211,238,0.25)] object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Quick Stats Cards */}
          <div className="grid grid-cols-3 gap-3 mt-8 w-full max-w-sm">
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center backdrop-blur-sm"
              >
                <div className="flex justify-center mb-1">{item.icon}</div>
                <p className="text-xs font-semibold text-white">{item.value}</p>
                <p className="text-[10px] text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ---------------- RIGHT TEXT SECTION ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-7/12 flex flex-col items-start gap-5"
        >
          {/* Heading */}
          <div>
            <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
              Introduction
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-3">
              About <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Me</span>
            </h2>
          </div>

          {/* Summary paragraphs with AI Automation */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Hi, I'm <span className="text-cyan-300 font-semibold">Kashish Saxena</span>, a forward-thinking{" "}
            <span className="text-white font-medium">Full Stack & AI Automation Developer</span> passionate about crafting smart, scalable, and high-performance digital solutions.
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            My core strength lies in combining modern <span className="text-cyan-300 font-medium">MERN stack development</span> (React.js, Node.js, Express, MongoDB) with <span className="text-teal-300 font-medium">AI automation workflows</span>, RESTful APIs, and intelligent data processes. Whether it's developing interactive client dashboards, building automated web scrapers, or integrating LLM/AI APIs to eliminate repetitive tasks, I design solutions that are fast, intuitive, and future-ready.
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Beyond full-stack engineering, I actively practice Data Structures & Algorithms in Java to sharpen analytical problem-solving and architectural efficiency.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <motion.a
              href="#contact"
              className="px-6 py-2.5 rounded-full font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>

            <motion.a
              href="./resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full font-medium text-white border border-cyan-400/60 hover:bg-cyan-950/40 hover:border-cyan-300 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Check Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;