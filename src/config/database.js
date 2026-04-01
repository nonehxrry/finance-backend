const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, '../../finance.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT CHECK(role IN ('Viewer', 'Analyst', 'Admin')) DEFAULT 'Viewer',
    status TEXT DEFAULT 'active'
  );

  CREATE TABLE IF NOT EXISTS records (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    amount REAL NOT NULL,
    type TEXT CHECK(type IN ('income', 'expense')) NOT NULL,
    category TEXT NOT NULL,
    date TEXT NOT NULL,
    description TEXT,
    userId INTEGER,
    FOREIGN KEY (userId) REFERENCES users(id)
  );
`);

module.exports = db;