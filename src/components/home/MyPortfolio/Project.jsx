import { Link } from "react-router-dom";
import "./Project.css";

const Project = ({ project }) => {
    const { title, img, details } = project;

    return (
        <div className="card card-compact project bg-gradient-to-br from-[#e2e8ec] to-white dark:from-slate-900 dark:to-slate-800 dark:shadow-[5px_5px_15px_#07122d,_-5px_-5px_15px_#000828] dark:text-white">
            <figure className="h-64 rounded-t-xl overflow-hidden " style={{ "display": "block" }}>
                <img className="transition-all" src={img} alt="Project" />
            </figure>
            <div className="card-body z-10 rounded-b-xl">
                <h2 className="card-title text-2xl mt-2">{title}</h2>
                <p className="text-gray-500 mt-1">{details.length > 60 ? details.slice(0, 60) + "..." : details}</p>
                <div className="card-actions justify-center mt-2 mb-6">
                    <Link to="" className="btn bg-[#ff3c00] text-white mt-4 rounded-none border-0">See Details</Link>
                </div>
            </div>
        </div>
    );
}

export default Project;
