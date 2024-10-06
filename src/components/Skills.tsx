"use client"
import React from 'react'

import { SiTailwindcss, SiTypescript, SiNodedotjs, SiMongodb, SiNextdotjs, SiExpress } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaGit, FaDocker } from 'react-icons/fa';
import { SiRedux, SiFirebase, SiFigma, SiFramer } from 'react-icons/si';



const skillIcons = [
    { icon: <FaHtml5 size={140}/>, label: "HTML" },
    { icon: <FaCss3Alt size={140}/>, label: "CSS" },
    { icon: <FaJsSquare size={140}/>, label: "JavaScript" },
    { icon: <FaReact size={140}/>, label: "React" },
    { icon: <SiRedux size={140}/>, label: "Redux" },
    { icon: <SiTypescript size={140}/>, label: "TypeScript" },
    { icon: <SiTailwindcss size={140}/>, label: "Tailwind CSS" },
    { icon: <SiNodedotjs size={140}/>, label: "Node.js" },
    { icon: <SiExpress size={140}/>, label: "Express" },
    { icon: <SiMongodb size={140}/>, label: "MongoDB" },
    { icon: <SiNextdotjs size={140}/>, label: "Next.js" },
    { icon: <FaGit size={140}/>, label: "Git" },
    { icon: <FaDocker size={140}/>, label: "Docker" },
    { icon: <SiFirebase size={140}/>, label: "Firebase" },
    // { icon: <SiVercel size={140}/>, label: "Vercel" },
    // { icon: <SiNetlify size={140}/>, label: "Netlify" },
    { icon: <SiFigma size={140}/>, label: "Figma" },
    { icon: <SiFramer size={140}/>, label: "Framer Motion" }
]

const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
        <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
            <h2 className='text-6xl font-bold mb-4'>What I Do</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {skillIcons.map((skill,index) => (
                    <div key={index} className='h-[160px] w-[160px] md:h-[220] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'>
                        {skill.icon}
                        <p className='mt-2'>{skill.label}</p>
                        {}

                    </div>

                ))}
            </div>

        </div>

    </div>
  )
}

export default Skills