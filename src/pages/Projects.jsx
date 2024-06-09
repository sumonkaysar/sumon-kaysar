import { useEffect, useState } from "react";
import Project from "../components/home/MyPortfolio/Project";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
      fetch("projects.json")
        .then(res => res.json())
        .then(data => setProjects(data))
    }, []);

    return (
        <div className="bg-[#ECF0F3] dark:bg-[#091229] py-10">
            <div className="w-[95%] max-w-[1500px] mx-auto py-5 px-5">
                <div className="mx-5">
                    <h1 className="text-xl sm:text-3xl text-center font-bold mb-12 uppercase text-[#ff3c00]">My All Projects</h1>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-7 xl:gap-10">
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
    )
};

export default Projects