import { useEffect, useState } from "react";
import useTheme from "../hooks/useTheme";
import axios from "axios";
import { server } from "../../links";
import { Link, useParams } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const ProjectDetails = () => {
    const { theme } = useTheme();
    const { id } = useParams()
    const [project, setProject] = useState({});

    const { _id, title, img: imgs, details } = project;

    useEffect(() => {
        axios.get(`${server}/projects/${id}`)
            .then(({ data }) => setProject(data))
    }, [id]);

    return (
        <div className={`${theme === 'light' ? "bg-white" : "bg-slate-950"}`}>
            <div className="w-[90%] max-w-[1500px] mx-auto py-10">
                <h2 className="text-2xl">{title}</h2>
                <p className="text-gray-500 mt-1">{details}</p>
            </div>
        </div>
    )
};

export default ProjectDetails;