import React from "react";
import "./Education.css"; 

const Education = () => {
  return (
    <div className="education-container">
      <h1>Education</h1>

      <div className="education-card">
        <h2>🎓 Bachelor of Technology (B.Tech) - Computer Science & DataSceince</h2>
        <p>📍 Sri Venkateswara College of Engineering and Technology, Chittoor, Andhra Pradesh</p>
        <p>📅 Currently in 3rd Year</p>
      </div>

      <div className="education-card">
        <h2>🏅 Intermediate (12th Grade) - IIIT RK Valley, Idupulapaya</h2>
        <p>📊 Scored: <strong>91.2%</strong> (2022)</p>
      </div>

      <div className="education-card">
        <h2>📖 10th Grade - Z.P.G.H.S Valmikipuram</h2>
        <p>🏆 Achieved: <strong>98%</strong> (2020)</p>
      </div>
    </div>
  );
};

export default Education;
