const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken } = require('../middleware/auth');
const { authorize } = require('../middleware/roles');

router.get('/', verifyToken, authorize(['Admin']), userController.getAllUsers);

module.exports = router;