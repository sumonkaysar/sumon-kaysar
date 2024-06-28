import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";

const useTheme = () => {
    const { theme, changeTheme } = useContext(ThemeContext);
    return { theme, changeTheme };
};

export default useTheme;