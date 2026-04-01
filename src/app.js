const express = require('express');
const authRoutes = require('./routes/auth');
const recordRoutes = require('./routes/records');
const dashboardRoutes = require('./routes/dashboard');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/records', recordRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

module.exports = app;