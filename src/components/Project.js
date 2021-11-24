import React from 'react';
import ProjectItem from "./ProjectItem";

const Project = () => {
    return (
        <div className="project-grid">
            <div className="card-grid">
                <ProjectItem/>
            </div>
            <div className="card-grid">
                <ProjectItem/>
            </div>
            <div className="card-grid">
                <ProjectItem/>
            </div>
            {/*<div className="card-grid">*/}
            {/*    <ProjectItem/>*/}
            {/*</div>*/}
        </div>
    );
};

export default Project;