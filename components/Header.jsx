"use client";
import Logo from './Logo'
import {CiMenuFries} from 'react-icons/ci'
import {MdFileDownload} from "react-icons/md";
import {FaGithub} from "react-icons/fa";
import {SiLeetcode, SiCodechef, SiHackerrank} from "react-icons/si";
import { usePathname } from 'next/navigation';

import {Sheet, SheetContent, SheetDescription,SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet";
import NavLinks from './NavLinks';
import { Children } from 'react';
import Link from 'next/link';

const socialLinks = [
  { icon: <FaGithub />, path: "https://github.com/BhargavLende15" },
  { icon: <SiLeetcode />, path: "https://leetcode.com/u/Bhargav_Lende/" },
  { icon: <SiCodechef />, path: "https://codolio.com/profile/Bhargav-Lende" },
  { icon: <SiHackerrank />, path: "https://www.hackerrank.com/profile/bhargavlende11" },
];

const Header = () => {
  return (
    <header className="2xl:hidden fixed top-0 left-0 right-0 backdrop-blur-sm z-50 bg-primary/95 border-b border-white/5">
        <div className="container mx-auto">
            <div className='flex items-center justify-between py-6'>
                {/* logo */}
                <Logo />
                {/* nav mobile - (Sheet Component)*/}
                <Sheet>
                    <SheetTrigger className="cursor-pointer text-[30px] text-white">
                        <CiMenuFries />
                    </SheetTrigger>
                    <SheetContent className="bg-primary border-0 flex flex--col justify-between items-center pt-16 pb-20"
                    side="left">
                        <SheetHeader>
                            <SheetTitle><Logo /></SheetTitle>
                            <SheetDescription className="sr-only">
                                Navigation menu
                            </SheetDescription>
                        </SheetHeader>
                        <NavLinks containerStyles="flex flex-col gap-8 max-w-[100px] "/>
                        <div className="flex flex-col items-center gap-4">
                            <Link href="/contact" className="btn btn-lg btn-tertiary">
                                <div className="flex items-center gap-3">
                                    <span>Let's Talk</span>
                                </div>
                            </Link>
                            {/* <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-accent mb-8">
                                <div className="flex items-center gap-3">
                                    <span>View Resume</span>
                                    <MdFileDownload className="text-xl" />
                                </div>
                            </a> */}
                            {/* <div className="flex gap-4 justify-center">
                              {socialLinks.map((item, index) => (
                                <a 
                                  key={index}
                                  href={item.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-accent text-white hover:bg-accent-hover transition w-[40px] h-[40px] text-[20px] flex items-center justify-center rounded-full cursor-pointer"
                                >
                                  {item.icon}
                                </a>
                              ))}
                            </div> */}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    </header>
  )
}

export default Header