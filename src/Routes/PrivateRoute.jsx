import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { BounceLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="w-full h-screen flex justify-center items-center"><BounceLoader color="#36d7b7" /></div>;
    }

    if (!user) {
        return <Navigate to="/" />;
    }

    return children;
}

export default PrivateRoute;