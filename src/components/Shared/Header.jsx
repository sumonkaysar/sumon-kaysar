import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsMoonFill } from "react-icons/bs";
import { BiSun } from "react-icons/bi";

const Header = () => {

  const handleTheme = e => {
    console.log(e.target.checked);
  }

  const menuItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/skills">Skills</Link></li>
    <li><Link to="/projects">Projects</Link></li>
    <li>
      <label className="swap swap-rotate justify-start">
        <input type="checkbox" onClick={handleTheme} />
        <BsMoonFill className="swap-off text-xl" />
        <BiSun className="swap-on text-xl" />
      </label>
    </li>
  </>;

  return (
    <div className="w-full bg-white dark:bg-[#080b1b] fixed shadow z-50 border-b border-[#ff3c00]">
      <div className="w-[90%] max-w-[1440px] mx-auto navbar">
        <div className="navbar-start">
          <Link to="/" className="text-[#ff3c00] font-bold normal-case text-[32px] font-poppins">SK</Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars />
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0">
              {
                menuItems
              }
            </ul>
          </div>
          <ul className="menu hidden lg:flex menu-horizontal px-1 text-white text-[16px]">
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
