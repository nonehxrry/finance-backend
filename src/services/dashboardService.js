const db = require('../config/database');

const getSummary = () => {
  const records = db.prepare('SELECT * FROM records').all();
  
  const summary = {
    totalIncome: 0,
    totalExpense: 0,
    netBalance: 0,
    categoryWise: {},
    recentActivity: records.slice(-5).reverse()
  };

  records.forEach(r => {
    if (r.type === 'income') summary.totalIncome += r.amount;
    else summary.totalExpense += r.amount;

    summary.categoryWise[r.category] = (summary.categoryWise[r.category] || 0) + r.amount;
  });

  summary.netBalance = summary.totalIncome - summary.totalExpense;
  return summary;
};

module.exports = { getSummary };