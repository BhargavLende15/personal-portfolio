"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from "next/image";
import Blob from "@/components/Blob";
import avatarImg from "@/public/assets/assets/avatar.png";
import { FaPython, FaJava, FaJs, FaReact, FaHtml5, FaDatabase, FaChartBar } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const technologies = [
  { icon: <FaPython />, name: "Python" },
  { icon: <FaReact />, name: "React.js" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaDatabase />, name: "SQL" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaChartBar />, name: "Power BI" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
];

const education = [
  {
    institution: "Shri Ramdeobaba college of Engineering & Management",
    degree: "B.Tech in Data Science",
    year: "2023 - Present",
    desc: "Currently pursuing the degree, maintaining a CGPA of 8.72 while building skills through coursework and projects."
  },
  {
    institution: "Shri Ramdeobaba college of Engineering & Management",
    degree: "Honours in Web Development",
    year: "2024 - Present",
    desc: "Pursuing honours in Web Development with an overall grade of AA, focused on building skills through real-world projects."
  },
  {
    institution: "School of Scholars, Wanadongri",
    degree: "Higher Secondary Education",
    year: "2021 - 2023",
    desc: "Scored 79.80% and completed higher secondary education with a focus on mathematics, physics & chemistry while exploring interests analytical thinking."
  },
  {
    institution: "Bhavans B.P Vidya Mandir, SKN",
    degree: "Secondary Education",
    year: "Up to 2021",
    desc: "Scored 95.20% in SSC & achieved strong academic performance alongside active participation in extracurricular activities. Served as House Captain twice. Earned a Black Belt in Taekwondo, competed as a divisional-level Badminton player, and secured a Bronze Medal in the English Olympiad, reflecting leadership, teamwork & a balanced growth in academics, sports, and personal development."
  },
];

const activities = [
  {
    role: "Data Science Intern",
    org: "Cognifyz Technologies",
    desc: "Worked on data analysis and visualization tasks, applying Python to extract insights from datasets and support data-driven decision making.",
  },
  {
    role: "Resource Manager",
    org: "REEF",
    desc: "Actively contributed to birding initiatives, public speaking events, and photography, while managing the resources for the forum activities.",
  },
  {
    role: "Photography Co-head",
    org: "DASCA",
    desc: "Led photography efforts by documenting events, curating visual content, and supporting creative storytelling for the association.",
  },
  {
    role: "Member",
    org: "NAZARIYA",
    desc: "Being a part of Nazariya - The Photography club, I've contributed to  events and creative initiatives focused on collaboration and expression.",
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <motion.section initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}

        className='h-screen flex items-center pt-24 2xl:pt-0'
        >
          <div className='container mx-auto px-0'>
            <div className='flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]'>
              {/* img & social icons*/}
              <div className='hidden xl:block flex-1 relative z-30'>
                <Blob containerStyles="w-[450px] h-[450px]"/>
                <Image 
                  src={avatarImg} 
                  alt="Bhargav Lende" 
                  width={500} 
                  height={500} 
                  quality={100} 
                  className="absolute -top-16 left-[45px]"
                />
              </div>
              {/* scroll area*/}
              <ScrollArea className="w-full h-[680px]">
                <div className="pr-8">
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-2 h-2 bg-accent rounded-full'></div>
                    <p>About me</p>
                  </div>
                  <h2 className='h2 mb-6'>
                    <span className='text-accent'>Intent creates Impact</span>
                  </h2>
                  <p className='max-w-[540px] mb-12'>
                    Hola! I'm <span className='text-accent brightness-130 font-bold'>Bhargav Lende</span>, I began my college journey with little knowledge of 
                    <span className='text-accent brightness-130 font-bold'> data science</span>, but discovering the field in my first year led to a strong 
                    interest that continues to grow. Since then, I’ve been building a foundation in 
                    <span className='text-accent brightness-130 font-bold'> Python</span>, <span className='text-accent brightness-130 font-bold'>Java</span>, <span className='text-accent brightness-130 font-bold'>SQL</span>
                    , and <span className='text-accent brightness-130 font-bold'>data analysis</span> while also learning <span className='text-accent brightness-130 font-bold'>web development</span> to create interactive, data-driven applications.
                  </p>
                  <p className='max-w-[540px] mb-12'>
                    Over time, I’ve worked on academic and personal projects spanning data analysis, machine learning fundamentals, 
                    and full-stack web development, helping me gain practical, hands-on experience. I also consistently practice 
                    problem-solving on platforms like LeetCode to strengthen my analytical and logical thinking.
                  </p>
                  <p className='max-w-[540px] mb-16'>
                    Currently, my focus is on growing as a data scientist while continuing to learn modern web technologies, with 
                    the goal of building impactful, data-driven applications that blend strong insights with clean design.
                  </p>
                  
                  {/* Navigation Tabs */}
                  <div className="flex gap-8 mb-12 border-b border-white/20 pb-2 max-w-[540px]">
                    {['education', 'activities', 'technologies', ].map((tab) => (
                      <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`${
                          activeTab === tab 
                            ? 'text-accent border-b-2 border-accent' 
                            : 'text-white/60 hover:text-white'
                        } capitalize font-medium text-xl pb-2 transition-all`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="min-h-[400px]">

                    {/* Education Section */}
                    {activeTab === 'education' && (
                      <div className="mb-12">
                        <div className="flex flex-col gap-8 max-w-[540px]">
                          {education.map((item, index) => (
                            <div key={index} className="flex flex-col gap-1 bg-tertiary/20 p-6 rounded-xl border border-accent/20 hover:border-accent transition-all duration-300">
                              <span className="text-accent text-base font-semibold">{item.year}</span>
                              <h4 className="text-xl font-bold">{item.degree}</h4>
                              <p className="text-white/80 font-semibold">{item.institution}</p>
                              <p className='text-white/60 text-sm'>{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Activities Section */}
                    {activeTab === 'activities' && (
                      <div className="mb-12">
                        <ul className="flex flex-col gap-6 max-w-[540px] list-disc pl-5">
                          {activities.map((item, index) => (
                            <li key={index} className="text-white/80 leading-relaxed pl-2 text-lg">
                              <h4 className="text-lg font-bold">
                              <span className="text-accent">{item.role}</span>
                              <span className="text-white mx-1"> @</span>
                              <span className="text-white">{item.org}</span>
                            </h4>
                              <p className="text-white/80 text-base font-semibold">{item.desc}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Skills Section */}
                    {activeTab === 'technologies' && (
                      <div className="mb-12">
                        <div className="grid grid-cols-2 gap-y-8 gap-x-10 max-w-[540px]">
                          {technologies.map((skill, index) => (
                            <div key={index} className="flex items-center gap-4 group">
                              <div className="text-2xl text-accent group-hover:text-white transition-all duration-300">
                                {skill.icon}
                              </div>
                              <p className="text-base">{skill.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    
                  </div>

                </div>
              </ScrollArea>
            </div>
          </div>
      </motion.section>
  )};

export default About;
