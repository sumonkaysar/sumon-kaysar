import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header";

const Root = () => {

  return (
    <div className="bg-white">
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
