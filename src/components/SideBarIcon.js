import Link from 'next/link'

export default function SideBarIcon(props) {
    return (
        <Link href={"/"+`${props.dir}`}>
            <div 
                className={
                    "sidebar-icon group " + 
                    (props.on ? "rounded-xl" : "")
                }
                onClick={props.toggle}>
                
                <div 
                className={
                    "pill bg-accented2 group-hover:scale-100 " + 
                    (props.on ? "scale-100 h-10" : "scale-0")
                }>
                    
                </div>
                {props.icon}
                <span className="sidebar-tooltip bg-white group-hover:scale-100">
                    {props.text}
                </span>
                
            </div>
        </Link>
    )
}