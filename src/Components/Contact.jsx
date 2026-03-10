// Contact Section Component
// Is component me hum portfolio ka contact section bana rahe hain
// jisme heading, info section, social icons aur animated form hai

import React from "react";
import { motion } from "framer-motion";

// React Icons import
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

function Contact() {
  return (

    // MAIN SECTION
    // bg-slate-900 = dark background
    // px py = spacing
    <section  id="contact"
    className="bg-slate-900 text-white px-8 md:px-10 py-30">

      {/* GRID LAYOUT
      md:grid-cols-2 → desktop par 2 column
      mobile par automatically 1 column */}
      <div className="grid md:grid-cols-2 gap-12 items-center ml-10">


        {/* ================= LEFT SIDE CONTENT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}  // load pe left se slide
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* HEADING */}
          <h1 className="text-5xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h1>

          {/* SUB HEADING */}
          <h3 className="mt-6 text-xl font-semibold">
            Let's work Together
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-4 text-gray-400 leading-relaxed max-w-lg">
            Whether it's frontend development, backend solutions,
            or full-stack projects, I'm always excited to take on
            new challenges and bring ideas to life.
          </p>

          {/* EMAIL */}
          <div className="flex items-center gap-3 mt-6 text-cyan-400">
            <span className="hover:shadow-[0_0_20px_cyan] rounded-full">➤</span>
            <p>saxena.kashish97@gmail.com</p>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-3 mt-2 text-cyan-400">
            <span className="hover:shadow-[0_0_20px_cyan] rounded-full">📞</span>
            <p>+91 9717056860</p>
          </div>


          {/* ================= SOCIAL ICONS ================= */}

          <div className="flex gap-5 mt-8">

            {/* Github */}
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-400 p-3 rounded-full
              hover:bg-cyan-400 hover:text-black transition hover:shadow-[0_0_20px_cyan]"
            >
              <FaGithub size={20}/>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-400 p-3 rounded-full
              hover:bg-cyan-400 hover:text-black transition hover:shadow-[0_0_20px_cyan]"
            >
              <FaLinkedinIn size={20}/>
            </motion.a>

    

            {/* Instagram */}
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-400 p-3 rounded-full
              hover:bg-cyan-400 hover:text-black transition hover:shadow-[0_0_20px_cyan] "
            >
              <FaInstagram size={20}/>
            </motion.a>

          </div>

        </motion.div>


        {/* ================= RIGHT SIDE CONTACT FORM ================= */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}   // form right se slide
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <form className="flex flex-col gap-5">

            {/* NAME INPUT */}
            <input
              type="text"
              placeholder="Enter Your Name"
              className="p-4 rounded-lg bg-slate-800
              focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-4 rounded-lg bg-slate-800
              focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            {/* SUBJECT */}
            <input
              type="text"
              placeholder="Enter Your Subject"
              className="p-4 rounded-lg bg-slate-800
              focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            {/* MESSAGE */}
            <textarea
              rows="5"
              placeholder="Enter Your Message"
              className="p-4 rounded-lg bg-slate-800
              focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>


            {/* SUBMIT BUTTON */}

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 25px cyan"
              }}
              whileTap={{ scale: 0.95 }}
             className="bg-cyan-400 text-black font-semibold border border-white py-3 rounded-full mt-2"
            >
              Submit
            </motion.button>

          </form>

        </motion.div>


      </div>
    </section>
  );
}

export default Contact;