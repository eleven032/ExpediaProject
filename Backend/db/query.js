const mysql = require('mysql');
const config = require('./config');

const query = sql => new Promise((resolve, reject) => {
  try {
    const con = mysql.createConnection(config);

    con.connect(function (err, connection) {
      if (err) {
        reject(err);
        return
      }

      con.query(sql, function (err, rows) {
        if (!err) {
          resolve(rows);
        }
      })
    })
  } catch (error) {
    reject(error);
  }
})

module.exports = query;