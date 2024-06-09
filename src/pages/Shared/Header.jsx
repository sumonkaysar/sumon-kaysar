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
    <li>
      <label className="swap swap-rotate justify-start">
        <input type="checkbox" onClick={handleTheme} />
        <BsMoonFill className="swap-off text-xl" />
        <BiSun className="swap-on text-xl" />
      </label>
    </li>
  </>;

  return (
    <div className="w-full bg-white dark:bg-black fixed shadow z-50">
      <div className="w-[95%] max-w-[1500px] mx-auto navbar">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">SK</a>
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
          <ul className="menu hidden lg:flex menu-horizontal px-1">
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
