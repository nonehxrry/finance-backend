const db = require('../config/database');

const Record = {
  create: (data) => {
    const stmt = db.prepare('INSERT INTO records (amount, type, category, date, description, userId) VALUES (?, ?, ?, ?, ?, ?)');
    return stmt.run(data.amount, data.type, data.category, data.date, data.description, data.userId);
  },
  getAll: (filters) => {
    let query = 'SELECT * FROM records WHERE 1=1';
    const params = [];
    if (filters.category) {
      query += ' AND category = ?';
      params.push(filters.category);
    }
    if (filters.type) {
      query += ' AND type = ?';
      params.push(filters.type);
    }
    return db.prepare(query).all(...params);
  },
  update: (id, data) => {
    const stmt = db.prepare('UPDATE records SET amount = ?, type = ?, category = ?, description = ? WHERE id = ?');
    return stmt.run(data.amount, data.type, data.category, data.description, id);
  },
  delete: (id) => {
    return db.prepare('DELETE FROM records WHERE id = ?').run(id);
  }
};

module.exports = Record;