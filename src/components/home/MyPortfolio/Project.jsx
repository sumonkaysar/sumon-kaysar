import { Link } from "react-router-dom";
import "./Project.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import useTheme from "../../../hooks/useTheme";

const Project = ({ project, i }) => {
    const { title, img, details } = project;
    const { theme } = useTheme();

    return (
        <div className={`card card-compact project bg-gradient-to-br cursor-pointer ${theme === 'light' ? "from-[#e2e8ec] to-white shadow-[5px_5px_15px_#e2ebff,_-5px_-5px_15px_#d2d3d2] text-slate-950" : "from-slate-900 to-slate-800 shadow-[5px_5px_15px_#07122d,_-5px_-5px_15px_#000828] text-white"}`}>
            <PhotoProvider>
                <figure className="h-64 rounded-t-xl overflow-hidden " style={{ "display": "block" }}>
                    <PhotoView key={i} src={img}>
                        <img className="transition-all" src={img} alt="Project" />
                    </PhotoView>
                </figure>
            </PhotoProvider>
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
