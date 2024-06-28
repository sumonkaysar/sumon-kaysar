import Icon from "./Icon";
import "./Feature.css";
import { Link } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";

const Feature = ({ skill }) => {
  const { title, details, icon } = skill;
  const { theme } = useTheme();

  return (
    <div className={`card skill bg-gradient-to-br ${theme === 'light' ? "from-[#e2e8ec] to-white text-slate-950" : "from-slate-900 to-slate-800 shadow-[5px_5px_15px_#07122d,_-5px_-5px_15px_#000828] text-white"}`}>
      <div className="card-body z-10">
        <Icon
          icon={icon}
        />
        <h2 className="card-title text-2xl mt-3">{title}</h2>
        <p className="text-[#888]">{details.length > 70 ? details.slice(0, 99) + "..." : details}</p>
        <div className="card-actions">
          <Link to="" className="btn bg-[#ff3c00] text-white mt-4 rounded-none border-0">See Details</Link>
        </div>
      </div>
    </div>
  );
}

export default Feature;
