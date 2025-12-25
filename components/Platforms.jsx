import { FaGithub, FaCode } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";

const platforms = [
{
    icon: <FaGithub />,
    name: "GitHub",
    path: "",
},
{
    icon: <FaCode />,
    name: "Codolio",
    path: "",
},
{
    icon: <SiLeetcode />,
    name: "LeetCode",
    path: "",
},
{
    icon: <SiCodechef />,
    name: "CodeChef",
    path: "",
},
{
    icon: <SiHackerrank />,
    name: "HackerRank",
    path: "",
}

]

const Platforms = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {platforms.map((item, index)=> {
        return (
            <div key={index} className={`group relative ${iconStyles}`} title={item.name}>
              {item.icon}
              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-tertiary text-white text-sm px-3 py-1 rounded-md shadow opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                {item.name}
              </span>
            </div>
        )
    })}
  </div>
}

export default Platforms
