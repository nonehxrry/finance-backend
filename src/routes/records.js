const express = require('express');
const router = express.Router();
const recordController = require('../controllers/recordController');
const { verifyToken } = require('../middleware/auth');
const { authorize } = require('../middleware/roles');

router.get('/', verifyToken, recordController.getRecords);
router.post('/', verifyToken, authorize(['Admin']), recordController.createRecord);
router.put('/:id', verifyToken, authorize(['Admin']), recordController.updateRecord);
router.delete('/:id', verifyToken, authorize(['Admin']), recordController.deleteRecord);

module.exports = router;