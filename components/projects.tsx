"use client";

import React, { useEffect } from 'react'
import SectionHeading from './sectionHeading'
import { projectsData } from '@/lib/data'
import { useInView } from 'react-intersection-observer';
import Project from './project'
import { useActiveSectionContext } from '@/context/activeSectionContext';

export default function Projects() {
  const { ref, inView } = useInView({
      threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection])

  return (
    <section ref={ref} id="projects" className='scroll-mt-28'>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project}/>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}