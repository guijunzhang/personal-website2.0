import { FaGraduationCap, FaRegLightbulb } from "react-icons/fa";
import { BsUniversalAccess } from "react-icons/bs"

import MenuDivider from "@/components/MenuDivider";
export default function About() {
    return (
        <div className="glass">
            <h1>About Me</h1>
            <MenuDivider />
            <br />
            <div className="ch my-4">
                <div className="text-accented2 stroke-black flex flex-col items-center px-4">
                    <FaGraduationCap size="48"/>
                    <p className="text-black">Education</p>
                </div>
                <div className="text-accented2 flex flex-col items-center px-4">
                    <BsUniversalAccess size="48"/>
                    <p className="text-black">Accessibility</p>
                </div>
                <div className="text-accented2 flex flex-col items-center px-4">
                    <FaRegLightbulb size="48"/>
                    <p className="text-black">Creativity</p>
                </div>
            </div>
            <br />
            <p>I'm a front-end developer specialized in UX design based in Tempe, AZ.</p>
            <p>I aim to make information <span>more accessible</span> and promote education <span>for all</span>, <br/>while making the world <span>more creative and entertaining</span>.</p>
            <h2>Let's create a better world!</h2>
        </div>
    )
}