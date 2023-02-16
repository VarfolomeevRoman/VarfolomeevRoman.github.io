import { useEffect, useRef } from 'react';
import Background from '../components/background/Background';
import Project from '../components/project/Project';
import Section from '../components/section/Section';
import {projects} from "./../helpers/projectsList"

const Projects = () => {
	const containerRef = useRef()
   

    useEffect(() => {
        if (containerRef.current) {
            new Background(containerRef.current)
        }
    }, [containerRef.current])
 

	return (
		<Section>
		
			<div className="container">
				<h2 className="title-1">Projects</h2>
				<ul className="projects">
					{projects.map((project, index) => {
						return (
							<Project
								key={index}
								title={project.title}
								img={project.img}
								index={index}
							/>
						);
					})}
				</ul>
			</div>
		</Section>
		// <main className ="section" ref={containerRef}>
		// </main>
	);
};

export default Projects;
