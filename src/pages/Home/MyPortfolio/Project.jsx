// import Icon from "./Icon";
// import "./Feature.css";

const Project = ({ project }) => {
    const { title, img, details } = project;

    return (
        <div className="card skill dark:dark_skill bg-gradient-to-br from-[#e2e8ec] to-white dark:from-slate-900 dark:to-slate-800 dark:shadow-[5px_5px_15px_#07122d,_-5px_-5px_15px_#000828] dark:text-white">
            <figure className="h-64 m-8 rounded-xl overflow-hidden" style={{"display": "block"}}>
                <img src={img} alt="Project" />
            </figure>
            <div className="card-body z-10">
                <h2 className="card-title text-2xl">{title}</h2>
                <p>{details.length > 70 ? details.slice(0, 99) + "..." : details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default Project;
