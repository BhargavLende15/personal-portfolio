import { FaGithub, FaCode } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";

const platforms = [
{
    icon: <FaGithub />,
    path: "",
},
{
    icon: <FaCode />,
    path: "",
},
{
    icon: <SiLeetcode />,
    path: "",
},
{
    icon: <SiCodechef />,
    path: "",
},
{
    icon: <SiHackerrank />,
    path: "",
}

]

const Platforms = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {platforms.map((item, index)=> {
        return (
            <div key={index} className={iconStyles}>{item.icon}</div>
        )
    })}
  </div>
}

export default Platforms
