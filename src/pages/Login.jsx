import useTheme from "../hooks/useTheme";
import loginBg from "../assets/images/login-bg.avif";
import loginBg2 from "../assets/images/login-bg-2.avif";
import useAuth from "../hooks/useAuth";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const { theme } = useTheme();
    const { user, login, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        login(email, password)
            .then(result => {
                if (result?.user?.email === import.meta.env.OWNER_EMAIL) {
                    Cookies.set('skToken8893312272920673', data.token, { expires: 7, path: '/' });
                    navigate('/sk/dashboard');
                } else {
                    logout(navigate);
                }
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        user?.email === import.meta.env.OWNER_EMAIL ?
            <Navigate to="/sk/dashboard" /> :
            <div style={{ backgroundImage: `url(${theme === 'light' ? loginBg2 : loginBg})` }} className={`min-h-screen bg-cover bg-no-repeat flex justify-center items-center ${theme === 'light' ? "" : "bg-[#091229]"}`}>
                <div className={`card w-11/12 sm:w-1/2 max-w-[600px] shadow-[0_0_15px_3px_#0000001a] ${theme === 'light' ? "bg-[#ffffff33]" : "bg-[#00000033]"}`}>
                    <form onSubmit={handleLogin} className="card-body">
                        <h2 className={`text-lg sm:text-xl font-semibold text-center ${theme === 'light' ? "text-slate-950" : "text-slate-100"}`}>Login as <span className="uppercase">Sumon Kaysar</span></h2>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className={`label-text font-semibold ${theme === 'light' ? "text-slate-950" : "text-slate-100"}`}>Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Email" className={`input input-bordered ${theme === 'light' ? "bg-[#ffffff33] text-slate-950 placeholder:text-slate-700" : "bg-[#00000033] text-white placeholder:text-slate-300"}`} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className={`label-text font-semibold ${theme === 'light' ? "text-slate-950" : "text-slate-100"}`}>Password</span>
                                </label>
                                <input name="password" type="password" placeholder="Password" className={`input input-bordered ${theme === 'light' ? "bg-[#ffffff33] text-slate-950 placeholder:text-slate-700" : "bg-[#00000033] text-white placeholder:text-slate-300"}`} required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>

    )
};

export default Login;