import * as faIcons from "react-icons/fa";
import * as siIcons from "react-icons/si";
import * as ioIcons from "react-icons/io";
import * as grIcons from "react-icons/gr";

const Icon = ({icon}) => {
  const Icons = {...faIcons, ...siIcons, ...ioIcons, ...grIcons};
  const {name, color} = icon;

  const IconComponent = Icons[name];

  return <IconComponent className="text-5xl" color={color} />;
}

export default Icon;
