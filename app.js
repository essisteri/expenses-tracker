/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */

const express = require("express");

const cors = require("cors");
const expensesRouter = require("./routes/expenses");

const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());

app.use("/api/expenses", expensesRouter);

module.exports = app;