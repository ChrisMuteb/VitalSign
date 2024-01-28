// const express = require('express');
// const mysql = require('mysql');

// const app = express();
// const PORT = 3306

// custom middleware
// const cors = require('cors')


// Routes
// const testRoute = require('../routes/testServer.routes');

// MySQL connection
// const db = mysql.createConnection({
//     host: 'Mysql@localhost:3306',
//     user: 'root',
//     password: '65412Muteb',
//     database: 'vitalSignLogin',
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL database:', err);
//         throw err;
//     }
//     console.log('Connected to MySQL database');
// });

// middleware


// start application
// const startApp = async () => {
//     try {
//         app.use(cors())
//         app.use(express.json())

//         app.use('/testserver', testRoute)

//         app.listen(PORT, () => {
//             console.log('Server running on http://127.0.0.1:' + PORT);
//         });
//     } catch (err) {
//         console.log('error while booting the application')
//         throw err;
//     }

//  }

//  module.exports = { startApp };