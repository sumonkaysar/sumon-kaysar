import { createContext, useEffect, useState } from "react";
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import Cookies from "js-cookie";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const token = Cookies.get("skToken8893312272920673");
    const authHeader = { "headers": { "authorization": `sk ${token}` } };

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = (navigate) => {
        signOut(auth).then(() => {
            Cookies.remove('skToken8893312272920673', { path: '/' });
            setUser(null);
            navigate("/sk/login");
        })
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser?.email === import.meta.env.OWNER_EMAIL) {
                setUser(currentUser);
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        };
    }, []);

    const authInfo = { loading, user, login, logout, authHeader };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;