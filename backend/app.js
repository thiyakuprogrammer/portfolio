const express = require('express');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

// Basic health check endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Portfolio API' });
});

module.exports = app;
