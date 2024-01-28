const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'vitalsign',
    waitForConnections: true,
    queueLimit: 0
  });
  
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL:', err)
      return
    }
    console.log('Connected to MySQL database');
    connection.release();
  });

  module.exports = pool