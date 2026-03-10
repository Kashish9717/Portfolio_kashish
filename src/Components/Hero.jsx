// Typewriter + particles + icons install
// npm install react-simple-typewriter
// npm install @tsparticles/react tsparticles
// npm install react-icons

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import Profile from "../assets/Profile.jpg";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {

  // particles engine initialize
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (

<div 
id="home"
className="relative w-full min-h-screen bg-slate-900 overflow-hidden pt-18"
>

{/* pt-28 navbar ke niche hero start karne ke liye */}


{/* ---------------- PARTICLES BACKGROUND ---------------- */}

<Particles
id="tsparticles"
init={particlesInit}
className="absolute inset-0 -z-10"

options={{
background:{ color:{value:"#0f172a"} },

particles:{
number:{value:60},

size:{ value:{min:1,max:3} },

move:{
enable:true,
speed:1
},

links:{
enable:true,
distance:150,
color:"#22d3ee",
opacity:0.3,
width:1
}
}
}}
/>


{/* ---------------- HERO CONTENT ---------------- */}

<div className="relative z-10 flex flex-col md:flex-row w-full min-h-screen items-center justify-between px-6 md:px-20 text-white">


{/* ---------------- LEFT TEXT ---------------- */}

<motion.div
initial="hidden"
animate="visible"

variants={{
hidden:{opacity:0},
visible:{
opacity:1,
transition:{staggerChildren:0.3} // har element thoda delay se ayega
}
}}

className="md:w-1/2"
>


{/* -------- HELLO TEXT ANIMATION -------- */}

<motion.h1
variants={{
hidden:{opacity:0,x:-100},
visible:{opacity:1,x:0}
}}

className="text-3xl md:text-5xl font-bold leading-normal"
>

Hello I'm

<span className="ml-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

Kashish Saxena

</span>

</motion.h1>


{/* ---------------- TYPEWRITER ---------------- */}

<motion.p

variants={{
hidden:{opacity:0,y:30},
visible:{opacity:1,y:0}
}}

className="text-xl md:text-2xl mt-4 text-cyan-400 font-semibold"
>

<Typewriter
words={[
"Frontend Developer",
"React Developer",
"Java Learner",
"Future Full Stack Developer"
]}
loop={true}
cursor
cursorStyle="|"
typeSpeed={70}
deleteSpeed={50}
delaySpeed={1500}
/>

</motion.p>


{/* ---------------- DESCRIPTION ---------------- */}

<motion.p

variants={{
hidden:{opacity:0,y:40},
visible:{opacity:1,y:0}
}}

className="text-gray-300 mt-6 text-sm md:text-lg"
>
I build modern and responsive web applications using
HTML, CSS, JavaScript, Tailwind CSS, React, and Firebase for backend services.
I also create dynamic websites using WordPress.

Currently learning Java and Data Structures
to strengthen my problem-solving skills and become a full-stack developer.

</motion.p>


{/* ---------------- BUTTON + ICONS ---------------- */}

<div className="flex flex-wrap gap-6 mt-8 items-center">


{/* -------- DOWNLOAD CV BUTTON (TOP FLY ANIMATION) -------- */}

<motion.a
href="/Portfolio_kashish/KashishResume.pdf"  //REpo name
target="_blank"
rel="noopener noreferrer"

initial={{y:-120,opacity:0}}
animate={{y:0,opacity:1}}

transition={{
delay:1,
type:"spring",
stiffness:120
}}
>

<motion.button

whileHover={{
scale:1.1,
boxShadow:"0 0 60px #22d3ee"
}}

whileTap={{scale:0.9}}

className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2 rounded-3xl font-semibold shadow-[0_0_40px_#22d3ee]"
>

Download CV

</motion.button>

</motion.a>


{/* ---------------- SOCIAL ICONS ---------------- */}

<motion.div

initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}

transition={{delay:1.3}}

className="flex gap-6 text-3xl text-cyan-400"
>


<motion.a
whileHover={{scale:1.3,rotate:10}}
href="https://github.com/kashish9717"
target="_blank"
className="hover:text-white"
>
<FaGithub/>
</motion.a>


<motion.a
whileHover={{scale:1.3,rotate:-10}}
href="https://linkedin.com/in/kashish-saxena9717"
target="_blank"
className="hover:text-white"
>
<FaLinkedin/>
</motion.a>


<motion.a
whileHover={{scale:1.3}}
href="#contact"
className="hover:text-white"
>
<MdEmail/>
</motion.a>


<motion.a
whileHover={{scale:1.3,rotate:10}}
href="https://instagram.com/___its_kashish"
target="_blank"
className="hover:text-white"
>
<FaInstagram/>
</motion.a>

</motion.div>

</div>

</motion.div>


{/* ---------------- RIGHT IMAGE ---------------- */}

<motion.div

initial={{opacity:0,scale:0.7}}
animate={{opacity:1,scale:1}}

transition={{duration:1}}

className="flex justify-center mt-12 md:mt-13"
>

<motion.img

src={Profile}

className="h-60 w-60 md:h-80 md:w-80 mb-36 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_40px_#22d3ee]"

animate={{
y:[0,-20,0],
rotate:[0,2,0,-2,0]
}}

transition={{
duration:6,
repeat:Infinity,
ease:"easeInOut"
}}

whileHover={{scale:1.08}}

alt="profile"
/>

</motion.div>

</div>

</div>
);
}