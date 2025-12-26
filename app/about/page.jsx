"use client";
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from "next/image";
import { FaPython, FaJava, FaJs, FaReact, FaHtml5, FaDatabase, FaChartBar } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { icon: <FaPython />, name: "Python" },
  { icon: <FaDatabase />, name: "SQL" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaChartBar />, name: "Power BI" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React.js" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
];

const education = [
  {
    institution: "Your University Name",
    degree: "B.Tech in Data Science",
    year: "2022 - Present",
  },
  {
    institution: "Your Junior College Name",
    degree: "Higher Secondary Education",
    year: "2020 - 2022",
  },
  {
    institution: "Your School Name",
    degree: "Secondary Education",
    year: "2020",
  },
];

const activities = [
  "Member of Data Science Club, actively participating in workshops and hackathons.",
  "Volunteer at Tech Fest, organizing coding competitions and technical events.",
  "Consistent problem solver on LeetCode, enhancing algorithmic thinking.",
];

const About = () => {
  return (
    <motion.section initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}

        className='h-screen flex items-center'
        >
          <div className='container mx-auto px-0'>
            <div className='flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]'>
              {/* img & social icons*/}
              <div className='hidden xl:flex w-full h-full pt-14 max-w-[430px] relative bg-pink-50/10'>
                1
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
                    Hola! I'm <span className='text-accent brightness-130'>Bhargav Lende</span>, I began my college journey with little knowledge of 
                    <span className='text-accent brightness-130'> data science</span>, but discovering the field in my first year led to a strong 
                    interest that continues to grow. Since then, I’ve been building a foundation in 
                    <span className='text-accent brightness-130'> Python</span>, <span className='text-accent brightness-130'>Java</span>, <span className='text-accent brightness-130'>SQL</span>
                    , and <span className='text-accent brightness-130'>data analysis</span> while also learning <span className='text-accent brightness-130'>web development</span> to create interactive, data-driven applications.
                  </p>
                  <p className='max-w-[540px] mb-12'>
                    Over time, I’ve worked on academic and personal projects spanning data analysis, machine learning fundamentals, 
                    and full-stack web development, helping me gain practical, hands-on experience. I also consistently practice 
                    problem-solving on platforms like LeetCode to strengthen my analytical and logical thinking.
                  </p>
                  <p className='max-w-[540px] mb-12'>
                    Currently, my focus is on growing as a data scientist while continuing to learn modern web technologies, with 
                    the goal of building impactful, data-driven applications that blend strong insights with clean design.
                  </p>
                  <p className='max-w-[540px] mb-12'>
                    A few technologies I’ve been working with recently:
                  </p>
                  
                  {/* Skills Section */}
                  <div className="mb-12">
                    {/* <h3 className="h3 mb-8 text-accent">Skills</h3> */}
                    <div className="grid grid-cols-2 gap-y-6 gap-x-10 max-w-[540px]">
                      {skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className="text-2xl text-accent hover:text-white transition-all duration-300">
                            {skill.icon}
                          </div>
                          <p className="text-base">{skill.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education Section */}
                  <div className="mb-12">
                    <h3 className="h3 mb-8 text-accent">Education</h3>
                    <div className="flex flex-col gap-8 max-w-[540px]">
                      {education.map((item, index) => (
                        <div key={index} className="flex flex-col gap-1 bg-tertiary/20 p-6 rounded-xl border border-accent/20 hover:border-accent transition-all duration-300">
                          <span className="text-accent text-sm font-semibold">{item.year}</span>
                          <h4 className="text-xl font-bold">{item.degree}</h4>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Activities Section */}
                  <div className="mb-12">
                    <h3 className="h3 mb-8 text-accent">Activities</h3>
                    <ul className="flex flex-col gap-4 max-w-[540px] list-disc pl-5">
                      {activities.map((item, index) => (
                        <li key={index} className="text-white/80 leading-relaxed pl-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </ScrollArea>
            </div>
          </div>
      </motion.section>
  )};

export default About;