// // Make sure you have these EXACT exports
// exports.createProject = async (req, res) => { /* ... */ };
// exports.getProjects = async (req, res) => { /* ... */ };
// exports.updateProject = async (req, res) => { /* ... */ };
// exports.deleteProject = async (req, res) => { /* ... */ };
//     try {
//       // Add validation
//       if (!req.body.title || !req.body.description) {
//         return res.status(400).json({
//           success: false,
//           error: 'Title and description are required'
//         });
//       }
  
//       const project = new project({
//         title: req.body.title,
//         description: req.body.description,
//         startDate: req.body.startDate || Date.now(),
//         endDate: req.body.endDate,
//         status: req.body.status || 'Not Started'
//       });
  
//       const savedProject = await project.save();
//       res.status(201).json({ success: true, data: savedProject });
//     } catch (error) {
//       res.status(400).json({
//         success: false,
//         error: error.message
//       });
//     };
  
const Project = require('../models/Projects');

// CREATE PROJECT (FIXED)
exports.createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    const savedProject = await project.save();
    res.status(201).json({ 
      success: true, 
      data: savedProject 
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// GET ALL PROJECTS (FIXED)
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort('-createdAt');
    res.json({ 
      success: true, 
      count: projects.length, 
      data: projects 
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// UPDATE PROJECT (FIXED)
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }
    
    res.json({ 
      success: true, 
      data: project 
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// DELETE PROJECT (FIXED)
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }
    
    res.json({ 
      success: true, 
      data: {} 
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};