// import Image from "next/image";
// import ProjectCard from "../components/ProjectCard";

// export default function HomePage() {
//   const skills = [
//     "React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5", "CSS3", "Tailwind CSS",
//   ];

//   const services = [
//     { title: "Full Stack Development", description: "Building scalable web apps using MERN stack." },
//     { title: "SEO Optimization", description: "On-Page & Off-Page SEO for organic growth." },
//     { title: "Frontend Design", description: "Creating modern UI with React.js & Tailwind CSS." },
//     { title: "Backend API Development", description: "Secure APIs with Node.js & Express.js." },
//   ];

//   const projects = [
//     {
//       title: "Task Management System",
//       description: "Full-stack task app with role-based auth, assignment, status tracking.",
//       techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
//       githubLink: "https://github.com/ronak3846/taskmanager-frontend.git",
//       liveDemo: "https://taskmanager-ronak.vercel.app/",
//     },
//     {
//       title: "Weather App",
//       description: "Responsive React app displaying real-time city-specific weather data.",
//       techStack: ["React", "HTML", "CSS"],
//       githubLink: "https://github.com/ronak3846/Weather-info.git",
//       liveDemo: "https://weather-info-eta.vercel.app",
//     },
//   ];

//   const education = [
//     { degree: "B.Tech - Compurer Science", institution: "Geetanjali Institute of Technical Studies", year: "2018-2021" },
//   ];

//   const experience = [
//     { role: "Freelance Web Developer", duration: "2023-Present", description: "Building full stack websites & SEO projects for clients." },
//   ];

//   return (
//     <main className="max-w-7xl mx-auto px-4 py-20 space-y-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
//       {/* 🔷 1. Hero Section */}
//       {/* <section className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
//         <Image
//           src="/profile.jpg"
//           alt="Ronak Vaishnav"
//           width={200}
//           height={200}
//           className="rounded-full shadow-lg object-cover"
//         />
//         <div>
//           <h1 className="text-4xl font-bold mb-2">Hi, I'm Ronak Vaishnav</h1>
//           <h2 className="text-xl text-pink-600 mb-4">
//             Full Stack Developer & Digital Marketer
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300">
//             I build scalable web applications and drive digital growth with my
//             skills in development and marketing.
//           </p>
//         </div>
//       </section> */}
      

//       {/* 🔷 2. Skills Section */}
//       <section>
//         <h3 className="text-3xl font-bold mb-6 text-center">My Skills</h3>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-center shadow"
//             >
//               {skill}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 🔷 3. What I Do / Services Section */}
//       <section>
//         <h3 className="text-3xl font-bold mb-6 text-center">What I Do</h3>
//         <div className="grid md:grid-cols-2 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 dark:bg-gray-800 p-6 rounded shadow"
//             >
//               <h4 className="text-xl font-bold mb-2">{service.title}</h4>
//               <p className="text-gray-600 dark:text-gray-300">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 🔷 4. Projects Section */}
//       <section>
//         <h3 className="text-3xl font-bold mb-6 text-center">Projects</h3>
//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard
//               key={index}
//               title={project.title}
//               description={project.description}
//               techStack={project.techStack}
//               githubLink={project.githubLink}
//               liveDemo={project.liveDemo}
//             />
//           ))}
//         </div>
//       </section>

//       {/* 🔷 5. Education Section */}
//       <section>
//         <h3 className="text-3xl font-bold mb-6 text-center">Education</h3>
//         <div className="space-y-4">
//           {education.map((edu, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 dark:bg-gray-800 p-4 rounded shadow"
//             >
//               <h4 className="text-xl font-bold">{edu.degree}</h4>
//               <p className="text-gray-600 dark:text-gray-300">
//                 {edu.institution}
//               </p>
//               <p className="text-gray-500 dark:text-gray-400">{edu.year}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 🔷 6. Experience Section */}
//       <section>
//         <h3 className="text-3xl font-bold mb-6 text-center">Experience</h3>
//         <div className="space-y-4">
//           {experience.map((exp, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 dark:bg-gray-800 p-4 rounded shadow"
//             >
//               <h4 className="text-xl font-bold">{exp.role}</h4>
//               <p className="text-gray-500 dark:text-gray-400">{exp.duration}</p>
//               <p className="text-gray-600 dark:text-gray-300">
//                 {exp.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// import Image from "next/image";
// import ProjectCard from "../components/ProjectCard";
// import TypewriterText from "../components/TypewriterText";

// export default function HomePage() {
//   const skills = [
//     "React.js",
//     "Node.js",
//     "Express.js",
//     "MongoDB",
//     "JavaScript",
//     "HTML5",
//     "CSS3",
//     "Tailwind CSS",
//   ];

//   const services = [
//     {
//       title: "Full Stack Development",
//       description: "Building scalable web apps using MERN stack.",
//     },
//     {
//       title: "SEO Optimization",
//       description: "On-Page & Off-Page SEO for organic growth.",
//     },
//     {
//       title: "Frontend Design",
//       description: "Creating modern UI with React.js & Tailwind CSS.",
//     },
//     {
//       title: "Backend API Development",
//       description: "Secure APIs with Node.js & Express.js.",
//     },
//   ];

//   const projects = [
//     {
//       title: "Task Management System",
//       description:
//         "Full-stack task app with role-based auth, assignment, status tracking.",
//       techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
//       githubLink: "https://github.com/ronak3846/taskmanager-frontend.git",
//       liveDemo: "https://taskmanager-ronak.vercel.app/",
//     },
//     {
//       title: "Weather App",
//       description:
//         "Responsive React app displaying real-time city-specific weather data.",
//       techStack: ["React", "HTML", "CSS"],
//       githubLink: "https://github.com/ronak3846/Weather-info.git",
//       liveDemo: "https://weather-info-eta.vercel.app/",
//     },
//   ];

//   const education = [
//     {
//       degree: "B.Tech - Computer Science",
//       institution: "Geetanjali Institute of Technical Studies",
//       year: "2018-2021",
//     },
//   ];

//   const experience = [
//     {
//       role: "Freelance Web Developer",
//       duration: "2023-Present",
//       description: "Building full stack websites & SEO projects for clients.",
//     },
//   ];

//   return (
//     <main className="max-w-7xl mx-auto px-4 py-20 space-y-20 bg-black text-gray-200 min-h-screen">
//       {/* 🔷 1. Hero Section */}
//       <section className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
//         <Image
//           src="/profile.jpg"
//           alt="Ronak Vaishnav"
//           width={200}
//           height={200}
//           className="rounded-full object-cover border-4 border-pink-500 shadow-lg"
//         />
//         <div>
//           <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 mb-2">
//             Hi, I'm Ronak Vaishnav
//           </h1>
//           <h2 className="text-xl mb-4">
//             <TypewriterText />
//           </h2>
//           <p className="text-gray-400 max-w-md">
//             I build scalable web applications and drive digital growth with my
//             skills in development and marketing.
//           </p>
//         </div>
//       </section>

//       {/* 🔷 2. Skills Section */}
//       <section>
//         <h3 className="text-3xl font-bold mb-10 text-center">My Skills</h3>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-black/30 backdrop-blur-lg p-4 rounded-lg text-center shadow hover:shadow-pink-500/50 transition"
//             >
//               {skill}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 🔷 3. What I Do / Services Section */}
//       <section>
//         <h3 className="text-3xl font-bold mb-10 text-center">What I Do</h3>
//         <div className="grid md:grid-cols-2 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-black/30 backdrop-blur-lg p-6 rounded-lg shadow hover:shadow-cyan-500/50 transition"
//             >
//               <h4 className="text-xl font-bold mb-2">{service.title}</h4>
//               <p className="text-gray-400">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 🔷 4. Projects Section */}
//       <section>
//         <h3 className="text-3xl font-bold mb-10 text-center">Projects</h3>
//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-black/30 backdrop-blur-lg rounded-lg shadow hover:shadow-pink-500/50 transition"
//             >
//               <ProjectCard
//                 title={project.title}
//                 description={project.description}
//                 techStack={project.techStack}
//                 githubLink={project.githubLink}
//                 liveDemo={project.liveDemo}
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 🔷 5. Education Section */}
//       <section>
//         <h3 className="text-3xl font-bold mb-10 text-center">Education</h3>
//         <div className="space-y-4">
//           {education.map((edu, index) => (
//             <div
//               key={index}
//               className="bg-black/30 backdrop-blur-lg p-4 rounded-lg shadow"
//             >
//               <h4 className="text-xl font-bold">{edu.degree}</h4>
//               <p className="text-gray-400">{edu.institution}</p>
//               <p className="text-gray-500">{edu.year}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 🔷 6. Experience Section */}
//       <section>
//         <h3 className="text-3xl font-bold mb-10 text-center">Experience</h3>
//         <div className="space-y-4">
//           {experience.map((exp, index) => (
//             <div
//               key={index}
//               className="bg-black/30 backdrop-blur-lg p-4 rounded-lg shadow"
//             >
//               <h4 className="text-xl font-bold">{exp.role}</h4>
//               <p className="text-gray-500">{exp.duration}</p>
//               <p className="text-gray-400">{exp.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBriefcase,
  FaGraduationCap,
  FaSearch,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

import TypewriterText from "../components/TypewriterText";
import ProjectCard from "../components/ProjectCard";

export default function HomePage() {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  ];

  const services = [
    {
      title: "Full Stack Development",
      description: "Building scalable MERN apps.",
      icon: <FaReact className="text-pink-500 text-3xl" />,
    },
    {
      title: "SEO Optimization",
      description: "On-Page & Off-Page SEO for growth.",
      icon: <FaSearch className="text-cyan-500 text-3xl" />,
    },

    {
      title: "Frontend Design",
      description: "Modern UI with React & Tailwind.",
      icon: <FaHtml5 className="text-orange-500 text-3xl" />,
    },
    {
      title: "Backend APIs",
      description: "Secure REST APIs with Node & Express.",
      icon: <FaNodeJs className="text-green-500 text-3xl" />,
    },
  ];

  const projects = [
    {
      title: "Task Management System",
      description: "Full-stack app with role-based auth & task tracking.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      githubLink: "https://github.com/ronak3846/taskmanager-frontend.git",
      liveDemo: "https://tasksuite.vercel.app/",
    },
    {
      title: "Weather App",
      description: "Real-time weather data with responsive UI.",
      techStack: ["React", "HTML", "CSS"],
      githubLink: "https://github.com/ronak3846/Weather-info.git",
      liveDemo: "https://weather-info-eta.vercel.app",
    },
  ];

  const education = [
    {
      degree: "B.Tech - Computer Science",
      institution: "Geetanjali Institute of Technical Studies",
      year: "2018-2021",
    },
  ];

  const experience = [
    {
      role: "Business Developer officer",
      company: "SRG Housing Finance printTreeView. Ltd.",
      duration: "FEB 2022-JULY 2022",
      description: "Building full stack websites & SEO projects for clients.",
    },
    {
      role: "Digital Marketing Executive ",
      company: "SVA Group",
      duration: "JUNE 2023-FEB 2024",
      description: "Building full stack websites & SEO projects for clients.",
    },
  ];

  return (
    <main className="bg-black text-gray-200 min-h-screen">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10"
      >
        {/* Hero Section */}
        <Image
          src="/images/profile.png"
          alt="Ronak Vaishnav"
          width={220}
          height={220}
          className="rounded-full  object-center border-4 border-pink-500 shadow-lg"
        />

        <div className="text-center md:text-left space-y-4">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text">
            Hi, I'm Ronak Vaishnav
          </h1>
          <h2 className="text-xl">
            <TypewriterText />
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto md:mx-0">
            I build scalable web applications and drive digital growth with my
            skills in development and marketing.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 pt-4">
            <a
              href="/resume.pdf"
              download
              className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-5 py-2 rounded-full font-semibold shadow hover:scale-105 transition"
            >
              Download CV
            </a>
            <a
              href="/contact"
              className="border border-pink-500 text-pink-500 px-5 py-2 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.1 }}
        className="max-w-6xl mx-auto px-4 py-20"
      >
        <h3 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text">
          My Skills
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center space-y-2 bg-black/30 backdrop-blur-lg p-4 rounded-lg shadow hover:shadow-pink-500/50 transition"
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 py-20"
      >
        <h3 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text">
          What I Do
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-black/30 backdrop-blur-lg p-6 rounded-lg shadow hover:shadow-cyan-500/50 transition"
            >
              <div className="flex items-center space-x-4 mb-3">
                {service.icon}
                <h4 className="text-xl font-bold">{service.title}</h4>
              </div>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 py-20"
      >
        <h3 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text">
          Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-black/30 backdrop-blur-lg rounded-lg shadow "
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                githubLink={project.githubLink}
                liveDemo={project.liveDemo}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 py-20"
      >
        <h3 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text">
          Education
        </h3>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="flex items-center bg-gradient-to-r from-gray-800 to-gray-900/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-pink-500/20 hover:border-pink-500/40 transition"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center shadow-md">
                <FaGraduationCap size={20} />
              </div>

              <div className="ml-4">
                <h4 className="text-xl font-semibold text-pink-400">
                  {edu.degree}
                </h4>
                <p className="text-gray-300">{edu.institution}</p>
                <p className="text-gray-400 text-sm">{edu.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 py-20"
      >
        <h3 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text">
          Experience
        </h3>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="flex items-start bg-gradient-to-r from-gray-800 to-gray-900/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-cyan-500/20 hover:border-cyan-500/40 transition"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center shadow-md">
                <FaBriefcase size={20} />
              </div>

              <div className="ml-4">
                <h4 className="text-xl font-semibold text-cyan-400">
                  {exp.role}
                </h4>
                <p className="text-gray-300 font-medium">{exp.company}</p>
                <p className="text-gray-400 text-sm italic">{exp.duration}</p>
                <p className="text-gray-400 mt-2">{exp.description}</p>
                
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}


