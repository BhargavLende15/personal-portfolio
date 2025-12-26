"use client";
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from "next/image";

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
                <div>
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
                </div>
              </ScrollArea>
            </div>
          </div>
      </motion.section>
  )};

export default About;