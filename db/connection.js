/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */

const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.DBUSERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  dateStrings: true,
  supportBigNumbers: true,
  bigNumberStrings: true,
  connectionLimit: 10,
});

module.exports = connection;
