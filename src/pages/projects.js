
import React, { useState } from 'react'
import Link from 'next/link';

import MenuDivider from "@/components/MenuDivider";
import ProjectSection from "@/components/ProjectSection";
import ProjectSections from '@/components/ProjectSections';

export default function Projects() {
  const [projects, setProjects] = useState(ProjectSections)
  
  const displayProjects = projects.map(project => (
    <ProjectSection 
      id={project.id}
      src={project.src}
      name={project.name}
      desc={project.desc}
    />
  ))

    return (
        <div className="glass">
          <h1>Project page</h1>
          <MenuDivider />
          <Link href="https://github.com/guijunzhang" target="_blank" className='hover-links'><p>You can find all my projects on my Github</p></Link>
          {displayProjects}
        </div>
    )
}