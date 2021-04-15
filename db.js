"use strict";

require("dotenv").config();
/** Database setup for jobly. */

const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

const db = process.env.NODE_ENV === "production"
? new Client({
  connectionString: getDatabaseUri(),
  ssl: {
    rejectUnauthorized: false
  }
})
:
new Client({
  connectionString: getDatabaseUri()
})


db.connect();

module.exports = db;
