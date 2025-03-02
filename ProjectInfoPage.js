// src/pages/ProjectInfoPage.js
// src/pages/ProjectInfoPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectInfoPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Inline CSS Styles
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
    },
    heroSection: {
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/img/project-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    content: {
      maxWidth: '1200px',
      margin: '-50px auto 0',
      padding: '20px',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '15px',
      padding: '30px',
      marginBottom: '30px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
    },
    gallery: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '25px',
      marginTop: '30px',
    },
    image: {
      width: '100%',
      height: '220px',
      objectFit: 'cover',
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    },
    button: {
      backgroundColor: '#2a9d8f',
      color: 'white',
      padding: '15px 40px',
      borderRadius: '30px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '18px',
      margin: '40px 0',
      transition: 'all 0.3s ease',
    },
    title: {
      fontSize: '3.5rem',
      color: 'white',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    }
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div>
          <h1 style={styles.title}>Project Details</h1>
          <p style={{ color: '#fff', fontSize: '1.2rem' }}>
            Efficient Project Management Solutions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        {/* Benefits Card */}
        <div style={styles.card}>
          <h2>Why Use Project Management Tools?</h2>
          <ul style={{ 
            listStyle: 'none',
            padding: '20px 0',
            columns: '2',
            lineHeight: '1.8'
          }}>
            <li>✅ Centralized task management</li>
            <li>✅ Real-time team collaboration</li>
            <li>✅ Deadline tracking system</li>
            <li>✅ Progress visualization</li>
            <li>✅ Resource allocation</li>
            <li>✅ Automated reporting</li>
          </ul>
        </div>

        {/* Image Gallery */}
        <div style={styles.card}>
          <h2>Project Gallery</h2>
          <div style={styles.gallery}>
            <img src=" ./img/p1.png" alt="Project" style={styles.image} />
            <img src=" ./img/p4.png" alt="Project" style={styles.image} />
            <img src=" ./img/project.png" alt="Project" style={styles.image} />
          </div>
        </div>

        {/* Back Button */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <button 
              style={{ 
                ...styles.button,
                backgroundColor: isHovered ? '#21867a' : '#2a9d8f',
                transform: isHovered ? 'translateY(-2px)' : 'none'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Return to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoPage;