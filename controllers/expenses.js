/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */

const expenses = require("../models/expenses");

const getExpenses = async (req, res) => {
  try {
    const response = await expenses.findAll();
    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.send(500);
  }
};

const getExpenseById = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const response = await expenses.findById(id);
    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.send(500);
  }
};

const getExpenseBySearch = async (req, res) => {
  const search = req.query;
  // Number(req.query).toFixed(2) (amountin fiksaus)
  try {
    const response = await expenses.findBySearch(search);
    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.send(500);
  }
};

const getExpenseByMonth = async (req, res) => {
  const { year, month } = req.params;
  const date = `${year}-${month}%`;
  try {
    const response = await expenses.findByMonth(date);

    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.send(500);
  }
};

const createExpense = async (req, res) => {
  const expense = {
    date: req.body.date,
    amount: req.body.amount,
    category: req.body.category,
    shop: req.body.shop,
  };
  try {
    const response = await expenses.save(expense);
    if (response) {
      expenses.id = response.insertId;
      res.send(expense);
    }
  } catch (e) {
    res.send(500);
  }
};

const deleteExpense = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const response = await expenses.deleteById(id);
    if (response) {
      res.send(`Expense ${id} deleted`);
    }
  } catch (e) {
    res.send(500);
  }
};

const updateExpenses = async (req, res) => {
  const expense = {
    id: req.body.id,
    date: req.body.date,
    amount: req.body.amount,
    category: req.body.category,
    shop: req.body.shop,
  };
  try {
    const response = await expenses.updateById(expense);
    if (response) {
      res.send(`Expense ${expense.id} updated`);
    }
  } catch (e) {
    res.send(500);
  }
};

module.exports = {
  getExpenses,
  getExpenseById,
  getExpenseBySearch,
  getExpenseByMonth,
  createExpense,
  deleteExpense,
  updateExpenses,
};
