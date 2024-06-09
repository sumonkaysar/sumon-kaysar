import { useEffect, useState } from "react";
import Project from "./Project";
import { Link } from "react-router-dom";

const MyPortfolio = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then(res => res.json())
      .then(data => setProjects(data))
  }, []);

  return (
    <div className="bg-[#ECF0F3] dark:bg-[#091229] py-10">
      <div className="w-[95%] max-w-[1500px] mx-auto py-10 px-5">
        <div className="mx-5">
          <p className="uppercase mb-3 text-[#ff3c00] text-center sm:text-left">Projects</p>
          <h1 className="text-3xl sm:text-5xl text-center sm:text-left font-bold mb-8 text-white">My Portfolio</h1>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-7 xl:gap-10">
            {
              projects.map(project => <Project
                key={project._id}
                project={project}
              />)
            }
          </div>
          <div className="text-center pt-20">
            <Link to="/projects" className="btn bg-[#ff3c00] text-white rounded-none border-0 px-12">See More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio;