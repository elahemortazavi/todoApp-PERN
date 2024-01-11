const Pool = require("pg").Pool;

const pool = new Pool({
  user: "elahe",
  password: "281358Em@",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;