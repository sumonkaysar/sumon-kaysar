import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsMoonFill } from "react-icons/bs";
import { BiSun } from "react-icons/bi";
import useTheme from "../../hooks/useTheme";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { theme, changeTheme } = useTheme();
  const { user } = useAuth();

  const handleTheme = () => changeTheme();

  const menuItems = <>
    <li><NavLink className={({ isActive, isPending }) => `${isActive ? "bg-[#ff3c00] text-white" : "hover:bg-[#ff3c00] hover:text-white"}`} to="/">Home</NavLink></li>
    {
      user?.email === import.meta.env.OWNER_EMAIL &&
      <li><NavLink className={({ isActive, isPending }) => `${isActive ? "bg-[#ff3c00] text-white" : "hover:bg-[#ff3c00] hover:text-white"}`} to="/sk/dashboard">Dashboard</NavLink></li>
    }
    <li><NavLink className={({ isActive, isPending }) => `${isActive ? "bg-[#ff3c00] text-white" : "hover:bg-[#ff3c00] hover:text-white"}`} to="/skills">Skills</NavLink></li>
    <li><NavLink className={({ isActive, isPending }) => `${isActive ? "bg-[#ff3c00] text-white" : "hover:bg-[#ff3c00] hover:text-white"}`} to="/projects">Projects</NavLink></li>
    <li>
      <label className={"swap swap-rotate justify-start hover:bg-[#ff3c00] hover:text-white"}>
        <input type="checkbox" checked={theme === 'light'} onChange={handleTheme} />
        <BsMoonFill className="swap-off text-xl" />
        <BiSun className="swap-on text-xl" />
      </label>
    </li>
  </>;

  return (
    <div className={`w-full fixed shadow z-50 border-b border-[#ff3c00] ${theme === 'light' ? "bg-green-100" : "dark:bg-[#080b1b]"}`}>
      <div className="navbar w-[90%] max-w-[1440px] mx-auto px-0">
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
