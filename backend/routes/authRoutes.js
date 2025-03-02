// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// @route   POST /api/auth/signup
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check existing user
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    user = new User({ email, password });
    await user.save();

    // Create JWT
    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '5h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );

  } catch (err) {
    res.status(500).send('Server error');
  }
});

// @route   POST /api/auth/login
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     let user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ error: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ error: 'Invalid credentials' });
//     }

//     // Create JWT
//     const payload = { user: { id: user.id } };
//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: '5h' },
//       (err, token) => {
//         if (err) throw err;
//         res.json({ token });
//       }
//     );

//   } catch (err) {
//     res.status(500).send('Server error');
//   }
// });
// routes/authRoutes.js
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check user exists
      const user = await User.findOne({ email }).select('+password');
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      // Verify password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      // Generate JWT
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h'
      });
  
      res.json({ token });
  
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Server error" });
    }
  });
module.exports = router;