import { Link, useLoaderData } from "react-router-dom";
import Feature from "./Feature";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../../../links";
import useTheme from "../../../hooks/useTheme";

const Features = () => {
  const [skills, setSkills] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    axios.get(`${server}/skills/mern`)
      .then(({ data }) => setSkills(data))
      .catch(err => console.error(err))
  }, []);

  return (
    <div className={`py-10 ${theme === 'light' ? "bg-slate-100" : "bg-slate-900"}`}>
      <div className="w-[95%] max-w-[1500px] mx-auto py-10 px-5">
        <div className="mx-5">
          <p className="uppercase mb-3 text-[#ff3c00] text-center sm:text-left">Professional Skills</p>
          <h1 className={`text-3xl sm:text-5xl text-center sm:text-left font-bold mb-8 ${theme === 'light' ? "text-slate-950" : "text-white"}`}>My Expertise</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-7 xl:gap-10 mb-10">
            {
              skills.map(skill => <Feature
                key={skill._id}
                skill={skill}
              />)
            }
          </div>
          <div className="text-center pt-10">
            <Link to="/skills" className={`btn bg-[#ff3c00] text-white hover:text-[#ff3c00] rounded-none border-0 px-12 ${theme === 'light' ? "hover:bg-slate-950" : "hover:bg-white"}`}>See More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
