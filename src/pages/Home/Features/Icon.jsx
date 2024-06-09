import * as faIcons from "react-icons/fa";
import * as siIcons from "react-icons/si";

const Icon = ({icon}) => {
  const Icons = {...faIcons, ...siIcons};
  const {name, color} = icon;

  const IconComponent = Icons[name];

  return <IconComponent className={`text-5xl ${name == "SiJavascript" && "bg-black"}`} color={color} />;
}

export default Icon;
