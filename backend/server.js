const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const projectRoutes = require("./routes/projectRoutes");
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');
//app.use('/api/auth', authRoutes);
const app = express();
app.use(express.json());
//app.use(cors()); // Allow frontend to access backend

app.use(cors({
    origin: 'http://localhost:3000', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));
mongoose.connect("mongodb://127.0.0.1:27017/projects", {
  
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.use("/api/projects", projectRoutes);
app.use('/api/auth', authRoutes);
app.listen(5000, () => console.log("Server running on port 5000"));
// Add this after route declarations
app.use((req, res, next) => {
    res.status(404).json({
      success: false,
      error: 'Endpoint not found'
    });
  });
  
  // Improved error handler
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
      success: false,
      error: process.env.NODE_ENV === 'production' ? 'Server error' : err.message
    });
  });