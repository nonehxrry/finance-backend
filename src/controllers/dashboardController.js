const dashboardService = require('../services/dashboardService');
const { sendResponse } = require('../utils/response');

exports.getDashboardSummary = (req, res) => {
  try {
    const data = dashboardService.getSummary();
    sendResponse(res, 200, true, 'Dashboard summary loaded', data);
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};