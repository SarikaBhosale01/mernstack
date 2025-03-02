const express = require("express");
const router = express.Router();
const Project = require("../models/Projects");

const {
    createProject,
    getProjects,
    updateProject,
    deleteProject
  } = require('../controllers/projectController');

router.post('/', createProject);
router.get('/', getProjects);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);
// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

// Create a project
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newProject = new Project({ title, description });
    await newProject.save();
    res.json({ success: true, message: "Project created" });
  } catch (err) {
    res.status(500).json({ error: "Failed to create project" });
  }
});

module.exports = router;
