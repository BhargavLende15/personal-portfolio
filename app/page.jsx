"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Blob from "@/components/Blob";
import Image from "next/image";
import avatarImg from "@/public/assets/assets/avatar.png";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        {/* text */}
        <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="h1 flex-1 mb-[28px]">
            Hi! I'm Bhargav, <br />
            <TypeAnimation 
            sequence={["@ Data Science", 2000, "@ Web Development", 2000]}
            wrapper="span"
            speed={40}
            className="text-accent"
            repeat={Infinity}
            cursor={false} />
          </h1>
          <p className="max-w-[500px] mb-[44px]">
            I’m a Data Science student specializing in data analysis and visualization, with working knowledge of Web Development to deploy and present data-driven solutions effectively.
          </p>
          <button className="btn btn-lg btn-accent mb-16">
            <div className="flex items-center gap-3">
              <span>View Resume</span>
              <MdArrowOutward className="text-xl" />
            </div>
          </button>

          {/* contact info */}
          <div>
            {/* mail */}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlineMail className="text-xl" />
              </span>
              <span>bhargavlende2208@gmail.com</span>
            </div>
          </div>
        </div>
        
        {/* blob & image */}
        <div className="hidden xl:block flex-1 relative z-30">
          {/*blob*/}
          <Blob containerStyles="w-[550px] h-[550px]"/>
          {/* avatar img */}
          <Image 
            src={avatarImg} 
            alt="" 
            width={600} 
            height={600} 
            quality={100} 
            className="absolute -top-16 left-[45px]"
          />
          {/* overlay gradient */}
          {/*<div className="w-full h-[164px] absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-primary/40"></div>*/}
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
