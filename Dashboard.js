import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
    };
    fetchProjects();
  }, []);

  <div style={styles.container}>Hello, World!</div>;
  
  return (
    <div className='container'>
    
    
    <div>
   
      <h1>Dashboard</h1>
      <Link to="/create-project" className="btn btn-success">Create New Project</Link>
      <br></br><br>
      </br>
      <Link to="/project-info" className="btn btn-success">
       View Project Details
      </Link>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <Link to={`/project/${project._id}`}>{project.title}</Link>
          </li>
        ))}
        
      </ul>
      
    </div>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: "url('https://cdn.pixabay.com/photo/2017/03/16/05/45/manager-2148233_1280.jpg')", // Replace with your image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}
export default Dashboard;