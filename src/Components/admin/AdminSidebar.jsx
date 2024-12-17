import React, { useState } from "react";
// import Logo from "./../../assets/react.svg";
import { ADMINSIDEBAR, SIDEBAR_ICONS } from "../../constants/constants";
import { motion } from "motion/react"
import { Link } from "react-router-dom"

function AdminSidebar() {
    const [activeSidebarIndex, setActiveSidebarIndex] = useState(0); // Tracks the active sidebar item.
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const variants = {
        expanded: {width:"20%"},
        nonExpanded: { width: "5%" }
    }
    const ToggleIcon = isSidebarOpen ? SIDEBAR_ICONS.close : SIDEBAR_ICONS.open;
    return (
        <>
            <motion.div animate={isSidebarOpen ? "expanded" : "nonExpanded"}
                variants={variants} className={`py-12 flex flex-col border-r-1 w-1/5 h-screen bg-blue-950 text-white relative ${isSidebarOpen? "px-10":"px-4"}`}>
                {/* Logo Section */}
                <div className="logo-div flex space-x-3 items-center text-3xl">
                    {/* <img src={Logo} alt="logo" /> */}
                    <span className={isSidebarOpen?"block":"hidden"}>Food Ease</span>
                </div>

                <button className="w-5 h-5 bg-blue-500 rounded-full absolute -right-[10.5px] top-14 flex items-center " onClick={() => setIsSidebarOpen(!isSidebarOpen)} >
                    <ToggleIcon  />
                </button>

                {/* Sidebar Items */}
                <div className="mt-10 flex flex-col space-y-8">
                    {ADMINSIDEBAR.map((item, index) => (
                        // Highlight active item.
                        <Link to={item.url} >
                        <div
                            key={index}
                            className={`flex space-x-3 p-2 rounded ${activeSidebarIndex === index ? "bg-blue-500" : ""
                                }`}
                            onClick={() => setActiveSidebarIndex(index)}
                        >
                                <item.icon size={32} />
                                <span className={isSidebarOpen?"block":"hidden"}>{item.name}</span>
                        </div>
                            </Link>
                    ))}
                </div>
            </motion.div>
        </>
    );
}

export default AdminSidebar;
