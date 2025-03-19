import React, { useState } from "react";
import "./Projects.css";

const projects = [
    { 
        name: "Atmosphere App", 
        image: "atmosphere_app.png",
        description: "A weather app using an official government API. Enter a city name to get temperature, humidity, and wind speed. Built with HTML, CSS, and JavaScript."
    },
    { 
        name: "Mini Calendar", 
        image: "mini_calendar.png",
        description: "A simple calendar that displays the current date, year, and month using HTML, CSS, and JavaScript."
    },
    { 
        name: "QR Code Generator", 
        image: "qr_code_generator.png",
        description: "Generates a QR code from user input (text or URL). Built using HTML, CSS, and JavaScript."
    },
    { 
        name: "QR Code (Python)", 
        image: "QR_code.png",
        description: "A Python-based QR code generator with a stylish CSS UI."
    },
    { 
        name: "Quiz App", 
        image: "quiz_app.png",
        description: "A quiz game with 20 random questions. Green for correct answers, red for incorrect. Users can replay and track their scores. Built with HTML, CSS, and JavaScript."
    },
    { 
        name: "Random Password App", 
        image: "Random_password_app.png",
        description: "Generates a secure random password when clicked. Built with HTML, CSS, and JavaScript."
    },
    { 
        name: "Real-Time Chat", 
        image: "real_time_chat.png",
        description: "A Flask-based real-time chat app with live updates using Socket.IO and JavaScript. Deployed on Render."
    },
    { 
        name: "Simple Notes App", 
        image: "simple_notes_App.png",
        description: "A minimal notes app where users can add and delete notes. Built with HTML, CSS, and JavaScript."
    },
    { 
        name: "Simple Web Server", 
        image: "simple_web_server.png",
        description: "A Python web server hosted using Flask and Render. Helps understand web hosting, deployment, and GitHub integration."
    },
    { 
        name: "To-Do List", 
        image: "To_Do_list.png",
        description: "A to-do app where users can add or delete daily tasks. Built with HTML, CSS, and JavaScript."
    },
    { 
        name: "Toast Notification", 
        image: "toast_notification.png",
        description: "A sidebar popup notification for success, errors, and validation messages. Built with HTML, CSS, and JavaScript."
    },
    { 
        name: "URL Shortener", 
        image: "url_shortener.png",
        description: "A Flask-based URL shortener deployed on Render. Converts long URLs into short, shareable links."
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="projects-container">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card" onClick={() => setSelectedProject(project)}>
                        <img
                            src={require(`../assets/Projects/${project.image}`)}
                            alt={project.name}
                            className="project-image"
                        />
                        <h3>{project.name}</h3>
                    </div>
                ))}
            </div>

            {/* Popup Modal */}
            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={() => setSelectedProject(null)}>&times;</span>
                        <h2>{selectedProject.name}</h2>
                        <p>{selectedProject.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
