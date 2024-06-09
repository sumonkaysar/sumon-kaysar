import { useEffect, useState } from "react";
import Project from "./Project";

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
          <h1 className="text-3xl sm:text-5xl text-center sm:text-left font-bold mb-8">My Portfolio</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-7 xl:gap-10">
            {
              projects.map(project => <Project
                key={project._id}
                project={project}
              />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio;
