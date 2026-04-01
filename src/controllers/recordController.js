const Record = require('../models/record');
const { sendResponse } = require('../utils/response');

exports.createRecord = (req, res) => {
  try {
    const result = Record.create({ ...req.body, userId: req.user.id });
    sendResponse(res, 201, true, 'Record created', { id: result.lastInsertRowid });
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

exports.getRecords = (req, res) => {
  try {
    const records = Record.getAll(req.query);
    sendResponse(res, 200, true, 'Records retrieved', records);
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

exports.updateRecord = (req, res) => {
  try {
    Record.update(req.params.id, req.body);
    sendResponse(res, 200, true, 'Record updated');
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

exports.deleteRecord = (req, res) => {
  try {
    Record.delete(req.params.id);
    sendResponse(res, 200, true, 'Record deleted');
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};