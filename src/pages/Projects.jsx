import { useEffect, useState } from "react";
import Project from "../components/home/MyPortfolio/Project";
import { server } from "../../links";
import axios from "axios";
import useTheme from "../hooks/useTheme";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const { theme } = useTheme();

    useEffect(() => {
        axios.get(`${server}/projects`)
            .then(({ data }) => setProjects(data))
    }, []);

    return (
        <div className={`py-10 ${theme === 'light' ? "" : "bg-[#091229]"}`}>
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