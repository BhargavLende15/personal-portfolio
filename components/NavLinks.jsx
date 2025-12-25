"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "projects", path: "/projects" },
  { name: "certifications", path: "/certifications" },
  { name: "contact", path: "/contact" },
];

const NavLinks = ({ containerStyles }) => {
  const pathname = usePathname();

  return (
    <ul className={containerStyles}>
      {links.map((link, index) => {
        const isActive = pathname === link.path;
        
        return (
          <Link
            key={index}
            href={link.path}
            className={`relative text-lg uppercase text-white ${
              isActive
                ? "after:content-[''] after:block after:absolute after:left-0 after:top-1/2 after:w-[70%] after:h-[4px] after:bg-accent after:-translate-y-1/2 after:z-0"
                : ""
            }`}
          >
            <span className="relative z-10">{link.name}</span>
          </Link>
        );
      })}
    </ul>
  );
};

export default NavLinks;
