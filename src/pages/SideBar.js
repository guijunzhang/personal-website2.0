import { FaHome, FaInfo, FaAt } from "react-icons/fa"


import SideBarIcon from "./SideBarIcon"


export default function SideBar() {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 
                        flex flex-col 
                        bg-primary 
                        text-contrast 
                        shadow-lg">
            <SideBarIcon 
                className=""
                icon={
                    <FaHome size="28" />
                }
                text={"Home"}/>
            <SideBarIcon 
                className=""
                icon={
                    <FaInfo size="28" />
                }
                text={"About"}/>
            <SideBarIcon 
                className=""
                icon={
                    <FaAt size="28" />
                }
                text={"Contact"}/>
            
        </div>
    )
}