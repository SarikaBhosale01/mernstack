// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const CreateProject = () => {
// //   const [title, setTitle] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [error, setError] = useState("");
// //   const [projects, setProjects] = useState([]); // Store fetched projects
// //   const navigate = useNavigate();
// //   axios.get("http://localhost:5000/api/projects")
// //   axios.post("http://localhost:5000/api/projects", { title, description })
  
// //   // Fetch projects from backend
// //   useEffect(() => {
// //     axios.get("/api/projects")
// //       .then(response => setProjects(response.data))
// //       .catch(error => console.error("Error fetching projects:", error));
// //   }, []);
// //   axios.post("/api/projects", { title, description })

  
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post("/api/projects", { title, description });
// //       if (response.data.success) {
// //         navigate("/dashboard"); // Redirect after project creation
// //       }
// //     } catch (err) {
// //       setError("Failed to create project");
// //     }
// //   };
  
  
// //   return (
// //     <div style={styles.container}>
// //       <h1 style={styles.heading}>Create Project</h1>
// //       {error && <p style={styles.error}>{error}</p>}
      
// //       {/* Project Form */}
// //       <form onSubmit={handleSubmit} style={styles.form}>
// //         <div style={styles.formGroup}>
// //           <label htmlFor="title" style={styles.label}>Title</label>
// //           <input type="text" id="title" placeholder="Enter project title"
// //             value={title} onChange={(e) => setTitle(e.target.value)}
// //             style={styles.input} required />
// //         </div>
// //         <div style={styles.formGroup}>
// //           <label htmlFor="description" style={styles.label}>Description</label>
// //           <textarea id="description" placeholder="Enter project description"
// //             value={description} onChange={(e) => setDescription(e.target.value)}
// //             style={styles.textarea} required />
// //         </div>
// //         <button type="submit" style={styles.button}>Create Project</button>
// //       </form>

// //       {/* Display Projects */}
// //       <h2 style={styles.heading}>Existing Projects</h2>
// //       <ul>
// //         {projects.map((project) => (
// //           <li key={project._id}>{project.title} - {project.description}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };
// // // Basic inline styles
// // const styles = {
// //   container: {
// //     maxWidth: "600px",
// //     margin: "0 auto",
// //     padding: "20px",
// //     backgroundImage:"url(https://cdn.pixabay.com/photo/2024/11/14/00/27/lights-9195661_1280.jpg)"
// //   },
// //   heading: {
// //     textAlign: "center",
// //     marginBottom: "20px",
// //   },
// //   form: {
// //     display: "flex",
// //     flexDirection: "column",
// //   },
// //   formGroup: {
// //     marginBottom: "15px",
// //   },
// //   label: {
// //     marginBottom: "5px",
// //     fontWeight: "bold",
// //   },
// //   input: {
// //     padding: "10px",
// //     borderRadius: "5px",
// //     border: "1px solid #ccc",
// //     width: "100%",
// //   },
// //   textarea: {
// //     padding: "10px",
// //     borderRadius: "5px",
// //     border: "1px solid #ccc",
// //     width: "100%",
// //     height: "100px",
// //   },
// //   button: {
// //     padding: "10px",
// //     borderRadius: "5px",
// //     border: "none",
// //     backgroundColor: "#007bff",
// //     color: "#fff",
// //     cursor: "pointer",
// //   },
// //   error: {
// //     color: "red",
// //     textAlign: "center",
// //   },
// // };

// // export default CreateProject;
// import React, { useState } from 'react';
// import { createProject } from '../services/api'; // Import the API function

// const CreateProject = () => {
//   // Initialize form data state
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     startDate: '',
//     endDate: '',
//     status: 'Not Started'
//   });

//   // Initialize error state (remove if not needed)
//   const [error, setError] = useState(null);
  
//   // Remove navigate if not used, or implement navigation
//   // const navigate = useNavigate();

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       // Convert dates to ISO format
//       const projectData = {
//         ...formData,
//         startDate: new Date(formData.startDate).toISOString(),
//         endDate: new Date(formData.endDate).toISOString()
//       };

//       const response = await createProject(projectData);
      
//       if (response.data.success) {
//         // Reset form after successful submission
//         setFormData({
//           title: '',
//           description: '',
//           startDate: '',
//           endDate: '',
//           status: 'Not Started'
//         });
//         alert('Project created successfully!');
//       }
//     } catch (err) {
//       setError(err.response?.data?.error || 'Failed to create project');
//     }
//   };

//   // Handle input changes
//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="create-project">
//       <h2>Create New Project</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title:</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Description:</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Start Date:</label>
//           <input
//             type="date"
//             name="startDate"
//             value={formData.startDate}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div>
//           <label>End Date:</label>
//           <input
//             type="date"
//             name="endDate"
//             value={formData.endDate}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Status:</label>
//           <select
//             name="status"
//             value={formData.status}
//             onChange={handleInputChange}
//           >
//             <option value="Not Started">Not Started</option>
//             <option value="In Progress">In Progress</option>
//             <option value="Completed">Completed</option>
//           </select>
//         </div>

//         <button type="submit">Create Project</button>
//         {error && <p className="error">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default CreateProject;
import React, { useState } from 'react';
import { createProject } from '../services/api';
import { Link } from 'react-router-dom';
const CreateProject = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    status: 'Not Started'
  });

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const projectData = {
        ...formData,
        startDate: new Date(formData.startDate).toISOString(),
        endDate: new Date(formData.endDate).toISOString()
      };

      const response = await createProject(projectData);
      
      if (response.data.success) {
        setFormData({
          title: '',
          description: '',
          startDate: '',
          endDate: '',
          status: 'Not Started'
        });
        alert('Project created successfully!');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create project');
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="app-container">
      
      <div className="form-container">
        
        <h2 className="form-title">Create New Project</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows="4"
            />
          </div>

          <div className="form-group">
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            
          </div>

          <button type="submit">Create Project</button>
          {error && <p className="error-message">{error}</p>}
          
        </form>
        
      </div>
      <button type="button" className='bg-warning'>
      <Link to="/projects" className="view-projects-link">
  View All Projects
</Link></button>
      
      <style jsx>{`
        .app-container {
          min-height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                      url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .form-container {
          background: rgba(255, 255, 255, 0.95);
          padding: 2rem 3rem;
          border-radius: 15px;
          box-shadow: 0 0 30px rgba(0,0,0,0.2);
          width: 100%;
          max-width: 600px;
          margin: 20px 0;
          background:url(https://cdn.pixabay.com/photo/2022/05/31/00/56/sky-7232494_1280.jpg);
        }

        .form-title {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 2rem;
          font-size: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          color: #34495e;
          font-weight: 600;
          font-size: 0.9rem;
        }

        input, textarea, select {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        input:focus, textarea:focus, select:focus {
          border-color: #3498db;
          box-shadow: 0 0 8px rgba(52, 152, 219, 0.2);
          outline: none;
        }

        textarea {
          resize: vertical;
          min-height: 100px;
        }

        button {
          background: #3498db;
          color: white;
          padding: 15px 30px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          margin-top: 1rem;
          font-weight: 600;
        }

        button:hover {
          background: #2980b9;
          transform: translateY(-1px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .error-message {
          color: #e74c3c;
          margin-top: 1rem;
          text-align: center;
        }

        .footer {
          text-align: center;
          color: white;
          margin-top: 2rem;
          padding: 1rem;
          width: 100%;
          font-size: 0.9rem;
          position: fixed;
          bottom: 0;
          background: rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
};

export default CreateProject;