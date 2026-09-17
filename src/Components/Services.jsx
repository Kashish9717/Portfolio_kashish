import { motion } from "framer-motion";
import { RiComputerLine, RiCodeLine, RiRobot2Line, RiSmartphoneLine } from "react-icons/ri";

function Services() {
  // services data
  const services = [
    {
      icon: <RiRobot2Line size={40} />,
      title: "AI & Automation Solutions",
      badge: "Trending",
      description:
        "Building intelligent automated workflows, LLM/AI API integrations, chatbots, and task automation to scale digital operations efficiently.",
    },
    {
      icon: <RiCodeLine size={40} />,
      title: "MERN Stack Development",
      badge: "Core",
      description:
        "Developing full-stack web applications with MongoDB, Express.js, React.js, and Node.js, complete with secure REST APIs and role-based auth.",
    },
    {
      icon: <RiComputerLine size={40} />,
      title: "Frontend Engineering",
      badge: "UI/UX",
      description:
        "Crafting highly responsive, interactive, and animated web interfaces using React, Tailwind CSS, Framer Motion, and modern web standards.",
    },
    {
      icon: <RiSmartphoneLine size={40} />,
      title: "API & Cloud Integration",
      badge: "Scalable",
      description:
        "Seamlessly integrating third-party APIs, database hooks, cloud microservices, and asynchronous background pipelines with high reliability.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#090d16] text-white py-28 px-6 md:px-16 relative overflow-hidden"
    >
      {/* Background glow orb */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* -------- SECTION HEADING -------- */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
          What I Offer
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold mt-3"
        >
          Specialized <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Services</span>
        </motion.h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm md:text-base">
          Delivering modern full-stack web engineering infused with AI intelligence and streamlined automation.
        </p>
      </div>

      {/* -------- SERVICES GRID -------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group relative bg-slate-900/80 border border-slate-800 hover:border-cyan-400/50 p-7 rounded-2xl flex flex-col items-start justify-between cursor-pointer transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            whileHover={{ y: -8 }}
          >
            <div>
              {/* Header with icon and badge */}
              <div className="w-full flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl bg-cyan-950/60 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                  {service.icon}
                </div>
                <span className="text-[11px] font-semibold text-cyan-300 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                  {service.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            {/* Link */}
            <motion.a
              href="#contact"
              className="text-xs font-semibold text-cyan-400 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
            >
              <span>Discuss Project</span>
              <span>→</span>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;