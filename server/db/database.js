require('dotenv').config();
const { Pool } = require("pg");

const db = new Pool ({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
})

db.connect()

module.exports = db;