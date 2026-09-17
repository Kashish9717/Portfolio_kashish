
// src/Components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const technicalSkills = [
  { name: "React.js & Next.js", level: 88 },
  { name: "JavaScript (ES6+)", level: 90 },
  { name: "Node.js & Express.js", level: 80 },
  { name: "MongoDB & Databases", level: 80 },
  { name: "AI Automation & APIs (LLM/Workflows)", level: 82 },
  { name: "Tailwind CSS & Modern UI", level: 92 },
  { name: "REST APIs & Webhooks", level: 85 },
  { name: "Git, GitHub & Deployment", level: 88 },
  { name: "HTML5 & Responsive CSS3", level: 95 },
];

const professionalSkills = [
  { name: "AI Automation Mindset", level: 88 },
  { name: "Problem Solving & DSA", level: 85 },
  { name: "Workflow Optimization", level: 90 },
  { name: "Team Collaboration", level: 92 },
  { name: "Quick Learning", level: 95 },
  { name: "Agile Execution", level: 88 },
];

function Skills() {
  return (
    <section id="skills" className="bg-[#0b101d] text-white py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* MAIN HEADING */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
          Core Strengths
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold mt-3"
        >
          Skills & <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Proficiencies</span>
        </motion.h2>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* ================= TECHNICAL SKILLS ================= */}
        <div className="bg-slate-900/80 border border-slate-800 p-6 md:p-8 rounded-2xl backdrop-blur-sm">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-cyan-400">⚡</span> Technical Capabilities
          </h3>

          <div className="space-y-4">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="flex justify-between mb-1.5 text-sm font-medium">
                  <span className="text-slate-200">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-cyan-500 to-teal-300 h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= PROFESSIONAL SKILLS ================= */}
        <div className="bg-slate-900/80 border border-slate-800 p-6 md:p-8 rounded-2xl backdrop-blur-sm">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-purple-400">🎯</span> Professional & Strategic
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center">
            {professionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-24 h-24 flex flex-col items-center justify-center text-center my-2"
              >
                <CircularProgressbar
                  value={skill.level}
                  text={`${skill.level}%`}
                  styles={buildStyles({
                    textSize: "18px",
                    pathColor: "#22d3ee",
                    textColor: "#fff",
                    trailColor: "#1e293b",
                  })}
                />
                <p className="text-xs text-slate-300 mt-2 font-medium">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;