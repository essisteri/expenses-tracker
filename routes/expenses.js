/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */

const express = require("express");

const {
  getExpenses,
  getExpenseById,
  getExpenseBySearch,
  getExpenseByMonth,
  createExpense,
  deleteExpense,
  updateExpenses,
} = require("../controllers/expenses");

const router = express.Router();

router.get("/", getExpenses);
router.get("/filter", getExpenseBySearch);
router.get("/:id", getExpenseById);
router.get("/:year/:month", getExpenseByMonth);
router.post("/", createExpense);
router.delete("/:id", deleteExpense);
router.put("/", updateExpenses);

module.exports = router;
