import { createConnection } from 'mysql';
import config from './config';

const query = sql => new Promise((resolve, reject) => {
  try {
    const con = createConnection(config)

    con.connect(function (err, connection) {
      if (err) {
        reject(err)
        return
      }

      con.query(sql, function (err, rows) {
        if (!err) {
          resolve(rows)
        }
      })
    })
  } catch (error) {
    reject(error)
  }
})

export default query