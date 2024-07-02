import useTheme from "../../hooks/useTheme";

const Dashboard = () => {
    const { theme } = useTheme()

    return (
        <div className={`py-10 ${theme === 'light' ? "bg-[#ff3c000d]" : "bg-slate-950"}`}>
            <div className="">dashboard</div>
        </div>
    )
};

export default Dashboard;