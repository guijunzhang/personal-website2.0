import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

import SideBarIcon from "./SideBarIcon"
import Sidebars from './Sidebars'
import Divider from "./Divider"

export default function SideBar() {    
    const [tabs, setTabs] = useState(Sidebars)
    const router = useRouter();

    function toggle(id) {
        setTabs(prevTabs => {
          return prevTabs.map((tab) => {
            return {
              ...tab,
              on: router.pathname === "/" + tab.dir
            };
          });
        });
    }

    useEffect(() => {
        toggle(router.pathname);
    }, [router.pathname]);

    const cubeSidebar = tabs.slice(0,1).map(tab => (
        <SideBarIcon
            icon={tab.icon}
            text={tab.text}
            id={tab.id}
            on={tab.on} 
            toggle={() => toggle(tab.id)}
            dir={tab.dir}
        />
    ))
    const mainSidebar = tabs.slice(1).map(tab => (
        <SideBarIcon
            icon={tab.icon}
            text={tab.text}
            id={tab.id}
            on={tab.on}
            toggle={() => toggle(tab.id)}
            dir={tab.dir}
        />
    ))
    
    return (
        <div className="fixed top-0 left-0 h-screen w-[4.5rem] m-0 
                        flex flex-col 
                        bg-primary 
                        text-contrast 
                        shadow-lg">
            {cubeSidebar}
            <Divider />
            {mainSidebar}
        </div>
    )
}