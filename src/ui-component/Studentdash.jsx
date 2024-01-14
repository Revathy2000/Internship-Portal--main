import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./styledash.css";
import { Link } from 'react-router-dom'; 

const Studentdash = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/project')
      .then(response => {
        console.log('Fetched data:', response.data);
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      <div className="card-container">
        {projects.map(project => (
          <div key={project._id} className="card">
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to="/Datascience">
        <button>Go to Other Page</button>
      </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Studentdash;