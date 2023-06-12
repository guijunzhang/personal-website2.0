import React, { useState } from 'react'

export default function SideBarIcon(props) {
    return (
        <div 
            className="sidebar-icon group"
            onClick={props.toggle}
        >
            <div className={
                    "pill group-hover:scale-100 " + 
                    (props.on ? "scale-100 h-10" : "scale-0")
                }
            >
                
            </div>
            {props.icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {props.text}
            </span>
        </div>
    )
}