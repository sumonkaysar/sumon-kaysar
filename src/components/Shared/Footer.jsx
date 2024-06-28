import useTheme from "../../hooks/useTheme";

const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer className={`footer footer-center p-4 ${theme === 'light' ? "text-slate-950 bg-slate-200" : "bg-slate-950 text-white"}`}>
            <aside>
                <p className="">Copyright © 2024 - <span className="text-[#ff4f1a]">SK</span></p>
            </aside>
        </footer>
    )
};

export default Footer