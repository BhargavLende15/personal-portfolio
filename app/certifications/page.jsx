"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { MdOutlineArrowOutward, MdArrowRightAlt } from "react-icons/md";

const certifications = [
  {
    icon: "/assets/assets/services/design.svg",
    href: "",
    title: "Website Interface Design"
  },
  {
    icon: "/assets/assets/services/frontend.svg",
    href: "",
    title: "Website Interface Design"
  },
  {
    icon: "/assets/assets/services/backend.svg",
    href: "",
    title: "Website Interface Design"
  },
  {
    icon: "/assets/assets/services/seo.svg",
    href: "",
    title: "Website Interface Design"
  },
  {
    icon: "/assets/assets/services/video.svg",
    href: "",
    title: "Website Interface Design"
  },
]

const Certifications = () => {
  return (
    <motion.section
      initial = {{ opacity: 0}}
      animate = {{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto w-full flex flex-col gap-16">
        {/* text */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
          <h2 className="h2 max-w-[600px] text-left xl:mb-0">
            • <span className="text-accent">Certificates</span> &<span className="text-accent"> Credentials</span>
          </h2>
        </div>
        {/* slider */}
        <Swiper 
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2},
            1024: {slidesPerView:3},
          }}
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true}}
          className="h-[320px]"
        >
          {certifications.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="bg-secondary/90 w-full h-[284px] rounded-[20px] 
                px-[30px] py-[40px] flex flex-col justify-between">
                  <div>
                    <Image src={item.icon} width={48} height={48} alt="" />
                  </div>
                </div>
              </SwiperSlide>);
          })}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Certifications;