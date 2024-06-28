import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsMoonFill } from "react-icons/bs";
import { BiSun } from "react-icons/bi";
import useTheme from "../../hooks/useTheme";

const Header = () => {
  const { theme, changeTheme } = useTheme();

  const handleTheme = e => changeTheme();

  const menuItems = <>
    <li><NavLink className={({ isActive, isPending }) => `${theme === 'light' ? isActive ? "bg-[#5714ff] text-white" : "hover:bg-[#5714ff] hover:text-white" : isActive ? "bg-[#260280]" : "hover:bg-[#260280]"}`} to="/">Home</NavLink></li>
    <li><NavLink className={({ isActive, isPending }) => `${theme === 'light' ? isActive ? "bg-[#5714ff] text-white" : "hover:bg-[#5714ff] hover:text-white" : isActive ? "bg-[#260280]" : "hover:bg-[#260280]"}`} to="/skills">Skills</NavLink></li>
    <li><NavLink className={({ isActive, isPending }) => `${theme === 'light' ? isActive ? "bg-[#5714ff] text-white" : "hover:bg-[#5714ff] hover:text-white" : isActive ? "bg-[#260280]" : "hover:bg-[#260280]"}`} to="/projects">Projects</NavLink></li>
    <li>
      <label className={`swap swap-rotate justify-start ${theme === 'light' ? "hover:bg-[#5714ff] hover:text-white" : "hover:bg-[#260280]"}`}>
        <input type="checkbox" checked={theme === 'light'} onClick={handleTheme} />
        <BsMoonFill className="swap-off text-xl" />
        <BiSun className="swap-on text-xl" />
      </label>
    </li>
  </>;

  return (
    <div className={`w-full fixed shadow z-50 border-b border-[#ff3c00] ${theme === 'light' ? "bg-green-100" : "dark:bg-[#080b1b]"}`}>
      <div className="w-[90%] max-w-[1440px] mx-auto navbar">
        <div className="navbar-start">
          <Link to="/" className="text-[#ff3c00] font-bold normal-case text-[32px] font-poppins">SK</Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden text-xl text-[#ff3c00] cursor-pointer">
              <FaBars />
            </label>
            <ul tabIndex={0} className={`menu menu-compact dropdown-content gap-1 mt-3 p-2 shadow bg-[#0f0c38] rounded-box w-52 right-0 ${theme === 'light' ? "bg-[#ecebff] text-slate-950" : "bg-[#0f0c38] text-white"}`}>
              {
                menuItems
              }
            </ul>
          </div>
          <ul className={`menu hidden lg:flex gap-1 menu-horizontal px-1 text-[16px] ${theme === 'light' ? "text-slate-950" : "text-white"}`}>
            {
              menuItems
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
