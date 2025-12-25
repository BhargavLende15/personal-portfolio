import {FaGithub} from "react-icons/fa";

const platforms = [
{
    icon: <FaGithub />,
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