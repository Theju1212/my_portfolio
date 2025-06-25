import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img
          src={`${process.env.PUBLIC_URL}/my_photo.jpg`}
          alt="THEJASWINI"
          className="profile-image"
        />
      </div>
      <h2>Hi, I'm THEJASWINI!</h2>
      <p>I'm passionate about web development and programming.</p>
    </div>
  );
};

export default Home;
