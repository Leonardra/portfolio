import React from 'react';
import {Bolt, Launch} from "@mui/icons-material";
import Pictures from "./assets/windows-4nSKsoYyuPQ-unsplash.jpg"
import "./project.css"

const ProjectItem = () => {
    return (
        <div className="card">
            <div className="picture-holder">
                <img src={Pictures} alt="project pictures"/>
            </div>
            <div className="text-area">
                <h1>My Project</h1>
                <p>My little projeect sjnsjsknsk kmlk km n knk nk n</p>
                <div className="buttons">
                    <button>View Live<span><Bolt/></span></button>
                    <button>View on GitHub<Launch/></button>
                </div>
            </div>

        </div>
    );
};

export default ProjectItem;