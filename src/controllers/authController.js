const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { sendResponse } = require('../utils/response');

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    User.create(name, email, hashedPassword, role || 'Viewer');
    sendResponse(res, 201, true, 'User registered successfully');
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = User.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return sendResponse(res, 401, false, 'Invalid credentials');
    }
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '24h' });
    sendResponse(res, 200, true, 'Login successful', { token, role: user.role });
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};