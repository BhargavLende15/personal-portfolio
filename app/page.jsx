"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi"
import Blob from "@/components/Blob";
import Image from "next/image";
import Platforms from "@/components/Platforms";
import avatarImg from "@/public/assets/assets/avatar.png";
import Link from "next/link";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center pt-4 xl:pt-0 pb-12"
    >
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        {/* text */}
        <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left order-2 xl:order-none">
          <h1 className="h1 flex-1 mb-6">
            Hi! I'm Bhargav, <br />
            <TypeAnimation 
            sequence={["@ Data Science", 2000, "@ Web Development", 2000]}
            wrapper="span"
            speed={40}
            className="text-accent"
            repeat={Infinity}
            cursor={false} />
          </h1>
          <p className="max-w-[500px] mb-8 text-xs xl:text-sm">
            I'm a Data Science student specializing in data analysis and visualization, with working knowledge of Web Development to deploy and present data-driven solutions effectively.
          </p>
          <Link href="https://drive.google.com/file/d/1b6rSOgRf_-VjtXcmZnSMN_BRgUwCpb1l/view?usp=drive_link" target="_blank">
            <button className="btn btn-lg btn-accent mb-12">
              <div className="flex items-center gap-3">
                <span className="text-sm xl:text-base">View Resume</span>
                <MdArrowOutward className="text-lg xl:text-xl" />
              </div>
            </button>
          </Link>

          {/* contact info */}
          <div className="flex flex-col gap-3 mb-12 xl:mb-0">
            {/* mail */}
            <a href="mailto:bhargavlende2208@gmail.com" className="flex items-center gap-3 text-sm xl:text-base hover:text-accent transition-colors">
              <span className="text-accent">
                <HiOutlineMail className="text-lg xl:text-xl" />
              </span>
              <span>bhargavlendeng@gmail.com</span>
            </a>

            <a href="https://www.linkedin.com/in/bhargav-lende-4b0232325/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm xl:text-base hover:text-accent transition-colors">
              <span className="text-accent">
                <FaLinkedin className="text-lg xl:text-xl" />
              </span>
              <span>Bhargav Lende</span>
            </a>

            <a href="https://www.instagram.com/lensational_b04" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm xl:text-base hover:text-accent transition-colors">
              <span className="text-accent">
                <BiLogoInstagramAlt className="text-lg xl:text-xl" />
              </span>
              <span>lensational_b04</span>
            </a>
          </div>

          {/* Socials */}
          <Platforms 
            containerStyles="flex gap-6 mt-8 xl:fixed xl:right-6 xl:top-1/2 xl:-translate-y-1/2 xl:flex-col xl:items-center xl:gap-4 xl:z-50 xl:mt-0"
            iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px]
            text-[22px] flex items-center justify-center rounded-full cursor-pointer"
          />
        </div>
        
        {/* blob & image */}
        <div className="hidden xl:block flex-1 relative z-30">
          {/*blob*/}
          <Blob containerStyles="w-[400px] h-[400px]"/>
          {/* avatar img */}
          <Image 
            src={avatarImg} 
            alt="" 
            width={400} 
            height={400} 
            quality={100} 
            className="absolute -top-12 left-[30px]"
          />
          {/* overlay gradient */}
          {/*<div className="w-full h-[164px] absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-primary/40"></div>*/}
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
