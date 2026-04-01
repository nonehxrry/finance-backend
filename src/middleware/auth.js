const jwt = require('jsonwebtoken');
const { sendResponse } = require('../utils/response');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return sendResponse(res, 401, false, 'No token provided');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return sendResponse(res, 403, false, 'Invalid or expired token');
  }
};

module.exports = { verifyToken };