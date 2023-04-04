import React, { Component } from 'react';
/* import Project from '../components/project/Project'; */
import { projects } from '../../helpers/projectList';
import Project from '../project/project';

function Projects() {
    return (
        <>
            <main classNameName="section">
                <div classNameName="container">
                    <h2 className="title-1">Projects</h2>
                    <ul className="projects">
                        {projects.map((project, index) => {
                            return <Project key={index} title={project.title} img={project.img} />
                        })}
                    </ul>
                </div>
            </main>
        </>
    );
}

export default Projects;