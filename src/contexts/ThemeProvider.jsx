import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    // const changeTheme = newTheme => {
    //     setTheme(newTheme)
    //     localStorage.setItem("sk-theme", newTheme)
    // }
    const changeTheme = () => setTheme(prevTheme => {
        localStorage.setItem("sk-theme", prevTheme === "light" ? "dark" : "light")
        return prevTheme === "light" ? "dark" : "light"
    });

    useEffect(() => {
        const storedTheme = localStorage.getItem("sk-theme")
        storedTheme && setTheme(storedTheme);
    }, [])

    const themeInfo = {
        theme,
        changeTheme,
    }

    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    )
};

export default ThemeProvider