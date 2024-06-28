import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    // const changeTheme = newTheme => setTheme(newTheme)
    const changeTheme = () => setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")

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