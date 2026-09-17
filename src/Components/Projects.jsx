import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { RiCodeSSlashLine, RiRobot2Line } from "react-icons/ri";

function Projects() {
  // ---------------- JAVASCRIPT & MERN PROJECTS ----------------
  const jsProjects = [
    {
      title: "RecruWeb Job Portal",
      tag: "MERN Stack",
      featured: true,
      desc: "Full-stack MERN job portal with intelligent role-based dashboards, secure JWT auth, resume processing, and recruiter management.",
      links: "https://recruweb-frontend-git-main-kashishsaxen97-projects.vercel.app/",
    },
    {
      title: "Voice Assistant AI",
      tag: "Speech & Automation",
      desc: "Voice-controlled smart assistant leveraging Speech Recognition Web APIs for hands-free workflow commands and responses.",
      links: "https://kashish9717.github.io/VoiceAssistant/",
    },
    {
      title: "Weather Checker API",
      tag: "REST API",
      desc: "Live dynamic weather analytics dashboard fetching real-time climate data with async API integration.",
      links: "https://kashish9717.github.io/Weather_Dasboard/",
    },
    {
      title: "QR Code Generator & Scanner",
      tag: "JavaScript / Camera",
      desc: "Interactive QR scan and generator utility using dynamic camera streaming and real-time canvas decoding.",
      links: "https://kashish9717.github.io/Qr_Generator/",
    },
    {
      title: "Budget Calculator",
      tag: "FinTech Logic",
      desc: "Expense and income tracking application with live interactive calculations and state persistence.",
      links: "https://kashish9717.github.io/Budget_Calculator/",
    },
    {
      title: "Kashya Clothing E-Commerce",
      tag: "Frontend Design",
      desc: "E-commerce responsive storefront featuring clean catalog filters, cart interactions, and modern typography.",
      links: "https://kashish9717.github.io/Kashya_Clothing/",
    },
  ];

  // ---------------- REACT PROJECTS ----------------
  const reactProjects = [
    {
      title: "Bookify Cloud Store",
      tag: "React + Firebase",
      desc: "Cloud book management web app powered by Firebase Firestore, real-time database updates, and state management.",
      links: "https://kashish9717.github.io/Bookify/",
    },
    {
      title: "Interactive Quiz Hub",
      tag: "React State & Timers",
      desc: "Dynamic quiz platform with immediate scoring logic, animated transitions, and personalized result summaries.",
      links: "https://kashish9717.github.io/QuizApp/",
    },
    {
      title: "My Album Multimedia Gallery",
      tag: "React + Tailwind",
      desc: "Dynamic photo and video gallery web app showcasing creative media with fluid responsive grid layouts.",
      links: "https://kashish9717.github.io/MyAlbum/",
    },
    {
      title: "Notes Store Application",
      tag: "React CRUD",
      desc: "Productivity application to capture, organize, and store notes with instant search filtering.",
      links: "https://kashish9717.github.io/NoteApp/",
    },
    {
      title: "Clothing Layout Pro",
      tag: "Modern UI/UX",
      desc: "State-of-the-art e-commerce storefront layout built with React, interactive image carousels, and responsive design.",
      links: "https://kashish9717.github.io/ClothingLayout/",
    },
  ];

  return (
    <section id="projects" className="bg-[#090d16] text-white py-28 px-6 md:px-16 relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ---------------- HEADING ---------------- */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
          Featured Work
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold mt-3"
        >
          My <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Projects</span>
        </motion.h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm md:text-base">
          A showcase of full-stack MERN applications, smart web utilities, and modern React interfaces.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* ================= FEATURED & JS/MERN PROJECTS ================= */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <RiCodeSSlashLine className="text-cyan-400 text-2xl" />
            <h3 className="text-2xl font-bold text-white">Full-Stack & Web Applications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jsProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative bg-slate-900/80 border p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 backdrop-blur-sm ${
                  project.featured
                    ? "border-cyan-400/60 shadow-[0_0_25px_rgba(34,211,238,0.2)]"
                    : "border-slate-800 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold text-cyan-300 bg-cyan-950/70 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                      {project.tag}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] uppercase font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                        ★ Featured MERN
                      </span>
                    )}
                  </div>

                  <h4 className="text-xl font-bold mb-2.5 text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                <a
                  href={project.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-md group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                >
                  <span>Launch Project</span>
                  <MdArrowOutward className="text-sm" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= REACT PROJECTS ================= */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <RiRobot2Line className="text-purple-400 text-2xl" />
            <h3 className="text-2xl font-bold text-white">React & UI Applications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reactProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-slate-900/80 border border-slate-800 hover:border-purple-400/40 p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold text-purple-300 bg-purple-950/70 border border-purple-500/30 px-2.5 py-0.5 rounded-full">
                      {project.tag}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold mb-2.5 text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                <a
                  href={project.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-xs text-white bg-slate-800 border border-slate-700 hover:border-purple-400/60 hover:text-purple-300 transition-all"
                >
                  <span>Launch Project</span>
                  <MdArrowOutward className="text-sm" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;