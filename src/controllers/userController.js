const db = require('../config/database');
const { sendResponse } = require('../utils/response');

exports.getAllUsers = (req, res) => {
  try {
    const users = db.prepare('SELECT id, name, email, role, status FROM users').all();
    sendResponse(res, 200, true, 'Users retrieved', users);
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};