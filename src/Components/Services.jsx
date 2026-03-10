import { motion } from "framer-motion";
import { RiComputerLine, RiCodeLine, RiBrushLine, RiSmartphoneLine } from "react-icons/ri";

function Services() {

  // services data
  const services = [
    {
      icon: <RiComputerLine size={40} />,
      title: "Web Development",
      description:
        "Building responsive and modern websites using React, Tailwind CSS, and JavaScript.",
    },
    {
      icon: <RiCodeLine size={40} />,
      title: "AI Automation",
      description: 
          "Experienced in working with multiple AI tools to streamline tasks, automate processes, and integrate intelligent features into web applications.",
    },
    {
      icon: <RiBrushLine size={40} />,
      title: "UI/UX Design",
      description:
        "Designing clean and user-friendly interfaces for web and mobile applications.",
    },
    {
      icon: <RiSmartphoneLine size={40} />,
     title: "WordPress Development",
description:
  "Built and customized WordPress websites for learning and practice, exploring themes, plugins, and basic site management."
    },
  ];

  return (
    <section
      id="services"
      // overflow-x-hidden → horizontal scroll bar remove
      className="bg-slate-900 text-white py-30 px-6 md:px-12 overflow-x-hidden"
    >

      {/* -------- SECTION HEADING -------- */}

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-cyan-400 mb-14 text-center"
      >
        <span className="text-white">My</span> Services
      </motion.h2>


      {/* -------- SERVICES GRID -------- */}

      {/* max width set karne se layout screen se bahar nahi jayega */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {services.map((service, index) => (

          <motion.div
            key={index}

            // card entry animation
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}

            // card style
            className="bg-slate-800 p-6 rounded-2xl flex flex-col items-center text-center cursor-pointer transition-all duration-300"

            // hover animation
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 50px #22d3ee"
            }}

            // click animation
            whileTap={{ scale: 0.95 }}
          >

            {/* icon */}
            <div className="text-cyan-400 mb-4">
              {service.icon}
            </div>

            {/* title */}
            <h3 className="text-xl font-bold mb-2">
              {service.title}
            </h3>

            {/* description */}
            <p className="text-gray-300 text-sm md:text-base mb-4">
              {service.description}
            </p>

            {/* learn more button */}
            <motion.a
              href="#about"
              className="px-4 py-2 rounded-full bg-cyan-400 text-black font-semibold"

              whileHover={{
                scale: 1.05,
                background: "transparent",
                color: "white",
                border: "2px solid #22d3ee",
                boxShadow: "0 0 40px #22d3ee"
              }}

              whileTap={{ scale: 0.9 }}
            >
              Learn More
            </motion.a>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Services;