
// src/Components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const technicalSkills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 75 },
  { name: "JavaScript", level: 70 },
  { name: "React", level: 60 },
  // { name: "Java", level: 50 },
  // { name: "SQL", level: 60 },
  { name: "Firebase", level: 60 }
];

const professionalSkills = [
  { name: "Creativity", level: 90 },
  { name: "Communication", level: 70 },
  { name: "Problem Solving", level: 75 },
  { name: "Team Work", level: 90 }
];

function Skills() {
  return (
    <section id="skills" className="bg-slate-900 text-white py-20 md:py-30 px-6 md:px-20">

      {/* MAIN HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl ml-10 font-bold text-cyan-400  mb-16 md:text-center"
      >
        My <span className="text-white ">Skills</span>
      </motion.h2>


      {/* MAIN GRID → side by side sections */}
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* ================= TECHNICAL SKILLS ================= */}
        <div className="max-w-md">

          <h3 className="text-2xl font-bold underline mb-6 ml-30  drop-shadow-[0_0_10px_cyan]">
            Technical Skills
          </h3>

          <div className="space-y-4  w-100 mt-10 ">

            {technicalSkills.map((skill, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >

                {/* Skill Name + Percentage */}
                <div className="flex justify-between mb-1 text-sm ">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 h-3 rounded-full ">

                  <div
                    className="bg-cyan-400 h-3 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>

                </div>

              </motion.div>

            ))}

          </div>
        </div>


        {/* ================= PROFESSIONAL SKILLS ================= */}

        <div className="max-w-md">

          <h3 className="text-2xl font-bold underline mb-6 ml-30 drop-shadow-[0_0_10px_cyan]">
            Professional Skills
          </h3>

          {/* circles grid */}
          <div className="grid grid-cols-2 gap-8 place-items-center mr-20">

            {professionalSkills.map((skill, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="w-25 h-25 mt-10"  // circle size smaller
              >

                <CircularProgressbar
                  value={skill.level}
                  text={`${skill.level}%`}
                  styles={buildStyles({
                    textSize: "18px",
                    pathColor: "#22d3ee",
                    textColor: "#fff",
                    trailColor: "#334155"
                  })}
                />

                <p className="text-center text-sm mt-2">
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