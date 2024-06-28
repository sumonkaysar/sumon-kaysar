import { useLoaderData } from "react-router-dom";
import Feature from "../components/home/Features/Feature";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../links";

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get(`${server}/skills`)
            .then(({ data }) => setSkills(data))
            .catch(err => console.error(err))
    }, []);

    return (
        <div className="bg-[#ECF0F3] dark:bg-slate-900 py-10">
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