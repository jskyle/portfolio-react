const { Pool } = require('pg');

const pool = new Pool({
  user: 'work',
  host: 'localhost',
  database: 'db1',
  password: '',
  post: 5432,
});

module.exports = pool;
