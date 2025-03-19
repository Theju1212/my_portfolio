import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume-container">
            <h2>My Resume</h2>
            <a 
                href={`${process.env.PUBLIC_URL}/Resume.pdf`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="resume-button">
                View My Resume
            </a>
        </div>
    );
};

export default Resume;
