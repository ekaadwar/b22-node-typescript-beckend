import mysql from 'mysql2'

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'typescript',
})

export const execPromise = (sql: string, data: any[]) => {
  return new Promise((resolve, reject) => {
    const execute = db.query(sql, data, (err, results) => {
      if (err) {
        reject(err)
      }
      resolve(results)
    })
    console.log(execute.sql)
  })
}

export default db
