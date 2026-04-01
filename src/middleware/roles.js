const { sendResponse } = require('../utils/response');

const authorize = (roles = []) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return sendResponse(res, 403, false, 'Access denied for this role');
    }
    next();
  };
};

module.exports = { authorize };