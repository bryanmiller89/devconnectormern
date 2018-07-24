const express = require('express');
const router = express.Router();

// Mongoose Object Modeling Tool
const mongoose = require('mongoose');

// Passport Authentication Middleware
const passport = require('passport');

// @route   GET api/posts/test
// @desc    Tests posts route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Posts Works' }));

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post('/', passport.authenticate);

module.exports = router;
