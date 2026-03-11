import { motion } from "framer-motion";

function Projects() {

  // ---------------- JAVASCRIPT PROJECTS ----------------
  const jsProjects = [
    {
      title: "QR Code Scanner",
      desc: "Scan QR codes using camera with JavaScript.",
      links: "https://kashish9717.github.io/Qr_Generator/",
    },
    {
      title: "Voice Assistant",
      desc: "Voice controlled assistant using Speech Recognition API.",
      links: "https://kashish9717.github.io/VoiceAssistant/",
        },
    {
      title: "Budget Calculator",
      desc: "Track income and expenses with dynamic calculations.",
      links:"https://kashish9717.github.io/Budget_Calculator/",
    },
    {
      title: "Snake Game",
      desc: "Classic snake game built using JavaScript logic.",
      links:"https://kashish9717.github.io/Snake_Game/",
    },
    {
      title: "Weather Checker",
      desc: "Fetch live weather data using API.",
      links:"https://kashish9717.github.io/Weather_Dasboard/",
    },
    {
      title: "Clothing Website",
      desc: "Simple e-commerce clothing website layout.",
      links:"https://kashish9717.github.io/Kashya_Clothing/",
    },
  ];

  // ---------------- REACT PROJECTS ----------------
  const reactProjects = [
    {
      title: "Bookify (Firebase)",
      desc: "Book management web app with Firebase database.",
      links:"https://kashish9717.github.io/Bookify/",
    },
    {
      title: "Notes Store",
      desc: "Save and manage notes with React.",
    },
    {
      title: "Employee Management",
      desc: "Manage employees with CRUD operations.",
    },
    {
      title: "My Portfolio",
      desc: "Personal developer portfolio built using React and Tailwind.",
    },
  ];

  return (

<section id="projects" className="bg-slate-900 text-white py-20 px-6 md:px-20">


{/* ---------------- HEADING ---------------- */}

<motion.h2
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.1}}
className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-16"
>

My <span className="text-white">Projects</span>

</motion.h2>



{/* ================= JS PROJECTS ================= */}

<h3 className="text-2xl font-bold text-cyan-400 mb-8">
JavaScript Projects
</h3>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

{jsProjects.map((project,index)=>(

<motion.div
key={index}

initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.1}}

whileHover={{
scale:1.05,
boxShadow:"0 0 40px #22d3ee"
}}

className="bg-slate-800 p-6 rounded-2xl cursor-pointer transition-all duration-300"
>
   {/*   PROJECT NAME   */}
<h4 className="text-xl font-bold mb-2">
{project.title}
</h4>

{/*    DESCRIPTION OF PROJECT */}
<p className="text-gray-300">
{project.desc}
</p>


{/*  LINKS BUTTON */}
<a
  href={project.links}
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg">
    View Project
  </button>
</a>

</motion.div>

))}

</div>



{/* ================= REACT PROJECTS ================= */}

<h3 className="text-2xl font-bold text-cyan-400 mb-8">
React Projects
</h3>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{reactProjects.map((project,index)=>(

<motion.div
key={index}

initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}

whileHover={{
scale:1.05,
boxShadow:"0 0 40px #22d3ee"
}}

className="bg-slate-800 p-6 rounded-2xl cursor-pointer transition-all duration-300"
>

<h4 className="text-xl font-bold mb-2">
{project.title}
</h4>

<p className="text-gray-300">
{project.desc}
</p>

  {/*  LINKS BUTTON */}
<a
  href={project.links}
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg">
    View Project
  </button>
</a>

</motion.div>

))}

</div>

</section>

  );
}

export default Projects;