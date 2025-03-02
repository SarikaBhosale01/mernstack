import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
 // Import Sidebar

const ProjectDetails = () => {
  const { id } = useParams(); // Get project ID from the URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`/api/projects/${id}`);
        setProject(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch project details");
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
 


  
  return (
    <div style={styles.container}>
      {/* <Sidebar /> Sidebar on the left */}
      <div style={styles.content}>
        <h1 style={styles.heading}>{project.title}</h1>
        <p style={styles.description}>{project.description}</p>
        <h2>Tasks</h2>
        {project.tasks.length > 0 ? (
          <ul style={styles.taskList}>
            {project.tasks.map((task) => (
              <li key={task._id} style={styles.taskItem}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Status: {task.status}</p>
                <p>Assigned To: {task.assignedTo?.username || "Unassigned"}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks found.</p>
        )}
      </div>
    </div>
  );
};

// Styles for ProjectDetails
const styles = {
  container: {
    display: "flex", // Flex layout for Sidebar and content
  },
  content: {
    flex: 1, // Take remaining space
    padding: "20px",
  },
  heading: {
    marginBottom: "20px",
  },
  description: {
    marginBottom: "20px",
  },
  taskList: {
    listStyle: "none",
    padding: "0",
  },
  taskItem: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  },
};

export default ProjectDetails;