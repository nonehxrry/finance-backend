const db = require('../config/database');

const User = {
  create: (name, email, password, role) => {
    const stmt = db.prepare('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)');
    return stmt.run(name, email, password, role);
  },
  findByEmail: (email) => {
    return db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  },
  findById: (id) => {
    return db.prepare('SELECT id, name, email, role, status FROM users WHERE id = ?').get(id);
  }
};

module.exports = User;