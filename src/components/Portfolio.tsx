"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"

const projects = [
    {
        title: "Movie Ticket Booking Application",
        desc: "A movie ticket booking application featuring role-based access control for customers and admins.",
        devStack: "Node.js, Express, React, MongoDB, Nodemailer, Razorpay, Multer, TailwindCSS.",
        link: "https://movie-booking-app-dq5v.vercel.app/",
        videolink: "https://www.youtube.com/embed/WQPf1aoA6b4?si=MtIka-ZSuypaQQJg",
        git: "https://github.com/salmaanParis/Movie-Booking-App",
        isVideo: true,
    },
    {
        title: "Ecommerce Platform",
        desc: "An online marketplace that allows users to browse and purchase products.",
        devStack: "React, Node.js, Express, MongoDB, Redux, TailwindCSS.",
        link: "#",
        videolink: "",
        git: "#",
        isVideo: false,
    },
    {
        title: "Amazon clone ",
        desc: "I'll provide a basic template for a homepage that includes a header, product cards, and a footer. .",
        devStack: "Html, TailwindCSS.",
        link: " https://amazon-clone-seven-ochre.vercel.app/",
        videolink: "https://www.youtube.com/embed/L6nAd7IovHg?si=J5zV0ObWsO0t0nwu",
        git: "https://github.com/salmaanParis/Amazon-clone",
        isVideo: true,
    },
    {
        title: "iPhone Clone",
        desc: "React + Tailwind CSS: Crafting a Beautiful iPhone UI!.",
        devStack: "React, TailwindCSS.",
        link: "https://iphone-clone-neon.vercel.app/",
        videolink: "https://www.youtube.com/embed/DbWxBswNfeM",
        git: "https://github.com/salmaanParis/iphone-clone",
        isVideo: true,
    },
    {
        title: "Weather App",
        desc: "A simple weather application that fetches real-time weather data.",
        devStack: "React, OpenWeather API, CSS.",
        link: "#",
        videolink: "#",
        git: "#",
        isVideo: false,
    },
    {
        title: "Task Management Tool",
        desc: "An application to manage and track tasks with features for adding and editing tasks.",
        devStack: "React, Node.js, Express, MongoDB.",
        link: "#",
        videolink: "#",
        git: "#",
        isVideo: false,
    },
    {
        title: "Recipe Finder",
        desc: "An app that allows users to search for recipes based on ingredients.",
        devStack: "React, Spoonacular API, CSS.",
        link: "#",
        videolink: "#",
        git: "#",
        isVideo: false,
    },
    {
        title: "Fitness Tracker",
        desc: "A web application that allows users to log their workouts and track progress.",
        devStack: "React, Node.js, Express, MongoDB.",
        link: "#",
        videolink: "#",
        git: "#",
        isVideo: false,
    },
]

const projectsPerPage = 4;

const Portfolio = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52' id='Portfolio'>
            <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold my-12'>
                Selected <span className='text-orange-400'>Projects</span>
            </h1>
            <div className='px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24'>
                {currentProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"}`}
                    >
                        <div className='space-y-2 max-w-[550px]'>
                            <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1 + (currentPage - 1) * projectsPerPage}`}</h2>
                            <h2 className='text-4xl'>{project.title}</h2>
                            <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                            <p className='text-xl text-orange-400 font-semibold'>{project.devStack}</p>
                            <div className='w-64 h-[1px] bg-gray-400 my-4'>
                                <a href={project.link} className='mr-6'>Live Link</a>
                                <a href={project.videolink} className='mr-6'>Video</a>
                                <a href={project.git}>Git</a>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            {project.isVideo ? (
                                <iframe 
                                    width="560" 
                                    height="315" 
                                    src={project.videolink} 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerPolicy="strict-origin-when-cross-origin" 
                                    allowFullScreen 
                                    className='border rounded-lg shadow-lg' 
                                />
                            ) : (
                                <div className='h-[350px] w-full border rounded border-gray-700 flex items-center justify-center'>
                                    <span className='text-gray-500'>Image or demo coming soon...</span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className='flex justify-center mt-10 space-x-4'>
                <button 
                    onClick={handlePrevPage} 
                    disabled={currentPage === 1} 
                    className={`px-6 py-2 text-white bg-orange-600 rounded hover:bg-orange-500 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Previous
                </button>
                <button 
                    onClick={handleNextPage} 
                    disabled={currentPage === totalPages} 
                    className={`px-6 py-2 text-white bg-orange-600 rounded hover:bg-orange-500 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Portfolio;
