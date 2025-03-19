import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css"; 

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5002"; 

        try {
            console.log("📡 Sending data to:", `${API_URL}/contact`);
            console.log("📨 Form Data:", formData);

            const response = await axios.post(`${API_URL}/contact`, formData);
            console.log(" Response:", response.data);

            alert(" Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error(" Error sending message:", error);
            alert(` Failed to send message: ${error.message}`);
        }
    };

    return (
        <div className="contact-container">
            <h2>Contact Me</h2>

            
            <div className="social-links">
                <a href="https://www.linkedin.com/in/velvaluri-thejaswini-60a79a333" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
                <a href="https://github.com/Theju1212" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
                <a href="mailto:tejaswinivelvaluri@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} /> Email Me
                </a>
            </div>

          
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
