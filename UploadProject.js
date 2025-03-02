// src/components/UploadProject.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadProject = () => {
  const [project, setProject] = useState({
    name: '',
    description: '',
    files: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', project.name);
    formData.append('description', project.description);
    Array.from(project.files).forEach(file => {
      formData.append('files', file);
    });

    try {
      await axios.post('/api/projects/upload', formData);
      alert('Project uploaded successfully!');
      setProject({ name: '', description: '', files: null });
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Project Name</label>
          <input
            type="text"
            value={project.name}
            onChange={(e) => setProject({...project, name: e.target.value})}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={project.description}
            onChange={(e) => setProject({...project, description: e.target.value})}
          />
        </div>

        <div className="form-group file-upload">
          <label>Upload Files</label>
          <input
            type="file"
            multiple
            onChange={(e) => setProject({...project, files: e.target.files})}
          />
          <div className="file-preview">
            {project.files && 
              Array.from(project.files).map((file, index) => (
                <span key={index} className="file-item">
                  📄 {file.name}
                </span>
              ))
            }
          </div>
        </div>

        <button type="submit" className="upload-btn">
          🚀 Upload Project
        </button>
      </form>
    </div>
  );
};

export default UploadProject;