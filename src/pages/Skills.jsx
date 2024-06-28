import { useLoaderData } from "react-router-dom";
import Feature from "../components/home/Features/Feature";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../links";
import useTheme from "../hooks/useTheme";

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const { theme } = useTheme();

    useEffect(() => {
        axios.get(`${server}/skills`)
            .then(({ data }) => setSkills(data))
            .catch(err => console.error(err))
    }, []);

    return (
        <div className={`py-10 ${theme === 'light' ? "" : "bg-[#091229]"}`}>
            <div className="w-[95%] max-w-[1500px] mx-auto py-10 px-5">
                <div className="mx-5">
                    <h1 className="text-xl sm:text-3xl text-center font-bold mb-12 uppercase text-[#ff3c00]">My All Skills</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-7 xl:gap-10 mb-10">
                        {
                            skills.map(skill => <Feature
                                key={skill._id}
                                skill={skill}
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills