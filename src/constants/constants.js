import {LayoutDashboard,PackagePlusIcon,Logs, ChevronLeft, ChevronRight} from "lucide-react"

export const ADMINSIDEBAR = [
    {
        name: "Dashboard",
        icon:LayoutDashboard,
        url:"/dashboard"
    },
    {
        name: "Manage Orders",
        icon:Logs,
        url:"/orders"
    }  ,    
    {
        name: "Manage Products",
        icon:PackagePlusIcon,
        url:"/products"
    } ,   
  
]

export const SIDEBAR_ICONS = {
    open: ChevronRight,
    close: ChevronLeft,
};