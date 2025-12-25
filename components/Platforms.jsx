import { FaGithub, FaCode } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";

const platforms = [
{
    icon: <FaGithub />,
    name: "GitHub",
    path: "https://github.com/BhargavLende15",
},
{
    icon: <FaCode />,
    name: "Codolio",
    path: "https://codolio.com/profile/Bhargav-Lende",
},
{
    icon: <SiLeetcode />,
    name: "LeetCode",
    path: "https://leetcode.com/u/Bhargav_Lende/",
},
{
    icon: <SiCodechef />,
    name: "CodeChef",
    path: "https://www.codechef.com/users/bhargavlende",
},
{
    icon: <SiHackerrank />,
    name: "HackerRank",
    path: "https://www.hackerrank.com/profile/bhargavlende11",
}

]

const Platforms = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {platforms.map((item, index)=> {
        return (
            <a 
              key={index} 
              href={item.path} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`group relative ${iconStyles}`}
            >
              {item.icon}
              {/* Tooltip: Hidden on mobile (default), visible on hover for desktop (xl) */}
              <span className="hidden xl:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-tertiary text-white text-sm px-3 py-1 rounded-md shadow opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none">
                {item.name}
              </span>
            </a>
        )
    })}
  </div>
}

export default Platforms
