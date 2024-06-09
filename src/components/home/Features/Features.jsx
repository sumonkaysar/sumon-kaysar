import { Link, useLoaderData } from "react-router-dom";
import Feature from "./Feature";

const Features = () => {
  const skills = useLoaderData();

  return (
    <div className="bg-[#ECF0F3] dark:bg-slate-900 py-10">
      <div className="w-[95%] max-w-[1500px] mx-auto py-10 px-5">
        <div className="mx-5">
          <p className="uppercase mb-3 text-[#ff3c00] text-center sm:text-left">Professional Skills</p>
          <h1 className="text-3xl sm:text-5xl text-center sm:text-left font-bold mb-8 text-white">My Expertise</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-7 xl:gap-10 mb-10">
            {
              skills.map(skill => <Feature
                key={skill._id}
                skill={skill}
              />)
            }
          </div>
          <div className="text-center pt-10">
            <Link to="/skills" className="btn bg-[#ff3c00] text-white rounded-none border-0 px-12">See More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
