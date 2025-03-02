import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/api';
import { Link } from 'react-router-dom';

const ViewProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        if (response.data.success) {
          setProjects(response.data.data);
        }
      } catch (err) {
        setError(err.message);
      console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);


  
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="loading-spinner"></div>;
  if (error) return <div className="error-message">⚠️ Error: {error}</div>;
 



  
  return (
    <div className="projects-container">
      <div className="header-section">
        <h2>All Projects</h2>
        <div className="controls">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <Link to="/create" className="create-btn">
            + New Project
          </Link>
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project._id} className="project-card">
            <div className="card-header">
              <h3>{project.title}</h3>
              <div className={`status-badge ${project.status.replace(' ', '-')}`}>
                {project.status}
              </div>
            </div>
            <p className="description">{project.description}</p>
            
            <div className="project-meta">
              <div className="dates">
                <span>📅 Start: {new Date(project.startDate).toLocaleDateString()}</span>
                <span>🏁 End: {new Date(project.endDate).toLocaleDateString()}</span>
              </div>
              
              {project.files && project.files.length > 0 && (
                <div className="file-attachments">
                  {project.files.slice(0, 3).map((file, index) => (
                    <span key={index} className="file-item">
                      📎 {file.name}
                    </span>
                  ))}
                  {project.files.length > 3 && 
                    <span className="more-files">+{project.files.length - 3} more</span>}
                </div>
              )}
            </div>

            <div className="card-footer">
              <Link to={`/projects/${project._id}`} className="view-link">
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .projects-container {
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .header-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .controls {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .search-input {
          padding: 0.8rem;
          border: 2px solid #e0e0e0;
          border-radius: 25px;
          min-width: 300px;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          border-color: #3498db;
          outline: none;
          box-shadow: 0 0 8px rgba(52,152,219,0.2);
        }

        .create-btn {
          background: #2ecc71;
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          text-decoration: none;
          transition: transform 0.2s ease;
        }

        .create-btn:hover {
          transform: translateY(-2px);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: white;
          padding: 1.5rem;
          border-radius: 15px;
          box-shadow: 0 5px 25px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }

        .status-badge {
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          white-space: nowrap;
        }

        .status-badge.Not-Started {
          background: #f1c40f22;
          color: #f39c12;
        }

        .status-badge.In-Progress {
          background: #3498db22;
          color: #2980b9;
        }

        .status-badge.Completed {
          background: #2ecc7122;
          color: #27ae60;
        }

        .description {
          color: #666;
          line-height: 1.6;
          flex-grow: 1;
        }

        .project-meta {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .dates {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: #888;
        }

        .file-attachments {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-size: 0.85rem;
        }

        .file-item {
          background: #f8f9fa;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .more-files {
          color: #3498db;
          cursor: pointer;
        }

        .card-footer {
          border-top: 1px solid #eee;
          padding-top: 1rem;
          margin-top: auto;
        }

        .view-link {
          color: #3498db;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .view-link:hover {
          color: #2980b9;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 2rem auto;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .error-message {
          color: #e74c3c;
          background: #fee;
          padding: 1rem;
          border-radius: 8px;
          margin: 2rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default ViewProjects;