const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const { verifyToken } = require('../middleware/auth');
const { authorize } = require('../middleware/roles');

router.get('/summary', verifyToken, authorize(['Analyst', 'Admin']), dashboardController.getDashboardSummary);

module.exports = router;