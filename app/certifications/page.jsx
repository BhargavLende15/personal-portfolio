"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { FaPenNib, FaLaptopCode, FaServer, FaSearch, FaVideo } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const certifications = [
  {
    icon: <FaPenNib />,
    title: "DSA in Java",
    description: "Mastering the art of creating intuitive and user-friendly interfaces.",
    date: "2024",
    issuer: "NPTEL",
    href: ""
  },
  {
    icon: <FaLaptopCode />,
    title: "Smart India Hackathon",
    description: "Building responsive and interactive web applications using modern frameworks.",
    date: "2024",
    issuer: "RBU",
    href: ""
  },
  {
    icon: <FaServer />,
    title: "Adobe Hackathon",
    description: "Designing robust server-side architecture and API integrations.",
    date: "2023",
    issuer: "Adobe",
    href: ""
  },
  {
    icon: <FaSearch />,
    title: "Java Basics",
    description: "Optimizing web content to improve visibility and ranking on search engines.",
    date: "2023",
    issuer: "HackerRank",
    href: ""
  },
  {
    icon: <FaVideo />,
    title: "AI-ML Virtual Internship",
    description: "Professional video editing and post-production for digital media.",
    date: "2022",
    issuer: "EduSkills",
    href: ""
  },
];

const Certifications = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-center xl:text-left">
            <h2 className="h2 font-bold">
              <span className="text-accent">Certifications</span> & <span className="text-accent">Credentials</span>
            </h2>
          </div>

          <ScrollArea className="h-[400px] xl:h-[480px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-tertiary/20 p-6 rounded-xl border border-accent/20 hover:border-accent transition-all duration-300 group flex flex-col gap-4"
                >
                  <div className="flex justify-between items-start">
                    <div className="text-4xl text-transparent stroke-accent group-hover:text-accent transition-all duration-300">
                      {/* Using text color for icon, but adding a specific effect if needed. 
                          For now, just text-accent is safer. */}
                      <span className="text-white/80 group-hover:text-accent transition-colors duration-300">
                        {cert.icon}
                      </span>
                    </div>
                    <Link href={cert.href} className="flex items-center gap-1 text-accent text-sm font-bold border border-accent/20 px-4 py-2 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                      View Certificate <MdArrowOutward />
                    </Link>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                        {cert.title}
                    </h3>
                    <p className="text-sm text-white/60 mb-2">{cert.issuer}</p>
                    <p className="text-white/80 leading-relaxed text-sm">
                      {cert.description}
                    </p>
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

export default Certifications;
