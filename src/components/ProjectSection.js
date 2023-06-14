import Image from "next/image"
export default function ProjectSection(props) {
    return ( props.id % 2 == 0 ?
            <div className="project-section">
                <Image 
                    src={props.src}
                    className="image-display"
                    width={500}
                    height={0}
                    alt={`screenshot of ${props.name}`}
                />
                <div className="project-section-items">
                    <h2>{props.name}</h2>
                    <p>{props.desc}</p>
                </div>
            </div> :
            <div className="project-section">
                <div className="project-section-items">
                    <h2>{props.name}</h2>
                    <p>{props.desc}</p>
                </div>
                <Image 
                    src={props.src}
                    className="image-display"
                    width={500}
                    height={500}
                    alt={`screenshot of ${props.name}`}
                />
            </div>
        
    )
}