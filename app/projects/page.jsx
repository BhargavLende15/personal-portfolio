"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "web development",
    title: "Portfolio Website",
    description: "A modern, responsive personal portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Framer Motion" }],
    image: "/assets/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "web development",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product listing, cart functionality, and user authentication.",
    stack: [{ name: "React.js" }, { name: "Node.js" }, { name: "MongoDB" }],
    image: "/assets/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "data science",
    title: "Customer Churn Prediction",
    description: "A machine learning model to predict customer churn in a telecommunications company using historical data.",
    stack: [{ name: "Python" }, { name: "Scikit-learn" }, { name: "Pandas" }],
    image: "/assets/assets/work/thumb3.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "data science",
    title: "Stock Price Forecasting",
    description: "Time series analysis and forecasting of stock prices using LSTM neural networks.",
    stack: [{ name: "Python" }, { name: "TensorFlow" }, { name: "Matplotlib" }],
    image: "/assets/assets/work/thumb4.png",
    live: "",
    github: "",
  },
    {
    num: "05",
    category: "web development",
    title: "Task Management App",
    description: "A collaborative task management tool allowing users to create, assign, and track tasks in real-time.",
    stack: [{ name: "Vue.js" }, { name: "Firebase" }, { name: "Tailwind" }],
    image: "/assets/assets/work/thumb5.png",
    live: "",
    github: "",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("web development");
  const filteredProjects = projects.filter((project) => project.category === activeCategory);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
            {/* Header */}
            <div className="flex flex-col gap-2 text-center xl:text-left">
                <h2 className="h2 font-bold">
                  My <span className="text-accent">Projects</span>
                </h2>
                <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">
                  Explore my latest work in web development and data science.
                </p>
            </div>

            {/* Category Tabs */}
            <div className="flex gap-4 mx-auto xl:mx-0">
                {["web development", "data science"].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`${activeCategory === cat ? "text-accent border-b-2 border-accent" : "text-white/60"} capitalize font-medium text-xl pb-1 transition-all hover:text-white`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects List */}
            <ScrollArea className="h-[500px] xl:h-[600px]">
                <div className="flex flex-col gap-10 p-4">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="flex flex-col xl:flex-row gap-8 items-center bg-tertiary/20 p-8 rounded-xl border border-accent/20 hover:border-accent transition-all duration-300 group">
                            
                            {/* Project Details (Left) */}
                            <div className="w-full xl:w-1/2 flex flex-col gap-4 order-2 xl:order-1">
                                <div className="flex justify-between items-center">
                                    <div className="text-5xl leading-none font-extrabold text-transparent text-outline">
                                        {project.num}
                                    </div>
                                </div>

                                <h3 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                    {project.title}
                                </h3>

                                <p className="text-white/60 text-base">{project.description}</p>

                                <ul className="flex gap-4 flex-wrap">
                                    {project.stack.map((item, i) => (
                                        <li key={i} className="text-lg text-accent">
                                            {item.name}
                                            {i !== project.stack.length - 1 && ","}
                                        </li>
                                    ))}
                                </ul>

                                <div className="border border-white/20 my-2"></div>

                                <div className="flex items-center gap-4">
                                    <Link href={project.live} target="_blank" className="flex items-center gap-2 bg-accent/20 hover:bg-accent text-accent hover:text-white px-6 py-3 rounded-full transition-all duration-300">
                                        <span>Live Project</span>
                                        <BsArrowUpRight className="text-xl" />
                                    </Link>
                                    <Link href={project.github} target="_blank" className="flex items-center gap-2 bg-white/5 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300">
                                        <span>Github Repo</span>
                                        <BsGithub className="text-xl" />
                                    </Link>
                                </div>
                            </div>

                            {/* Project Image (Right) */}
                            <div className="w-full xl:w-1/2 h-[250px] xl:h-[300px] relative order-1 xl:order-2 rounded-xl overflow-hidden">
                                 <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 group-hover:bg-black/0 transition-all duration-500"></div>
                                 <Image 
                                    src={project.image} 
                                    fill 
                                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                                    alt={project.title}
                                 />
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
