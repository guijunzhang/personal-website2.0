import { FaGraduationCap, FaRegLightbulb } from "react-icons/fa";
import { BsUniversalAccess } from "react-icons/bs"
import Link from 'next/link'
import Image from 'next/image'
import profilePicture from '/public/fox.jpg'
import MenuDivider from "@/components/MenuDivider"
export default function About() {
    return (
        <div className="glass">
            <h1>About Me</h1>
            <MenuDivider />
            <br />
            <div className="ch mt-8">
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
            <div className="flex flex-row justify-center py-16">
                <div className="flex justify-center px-8">
                    <Image className="object-cover odd-shape"src={profilePicture} width={250} height={250} alt="placeholder picture of a fox for my picture" />
                </div>
                <div className="flex flex-col justify-center w-90 px-8">
                    <div>
                        <p>I'm a front-end developer specialized in UX design based in Tempe, AZ.</p>
                        <p>I aim to <span>make information more accessible</span><br/> and to <span>promote education for all</span>, while <br/>making <span>the world a more creative and entertaining place</span>.</p>    
                    </div>
                    <div className="mt-4">
                        <Link href="/contact" className="hover-links"><h2>Let's create a better world!</h2></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}