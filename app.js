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

app.use(
  cors({
    origin: ["http://localhost:3000", "https://expences-app-essi.onrender.com"],
  })
);

app.use(express.static("frontend/build"));

app.use("/api/expenses", expensesRouter);

module.exports = app;
