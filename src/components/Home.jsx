import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1 className="welcome-heading">Welcome to First Aid Training</h1>
        <p className="description"> Empower Yourself with Life-Saving Skills</p>

        <Link to="/courses">
          <button className="cta-button">Go to Course List</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
