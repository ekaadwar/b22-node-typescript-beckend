import db, { execPromise } from '../helpers/db'

export const getUserByEmail = (email: string) => {
  return execPromise('SELECT * FROM users WHERE email=?', [email])
}

export const createUser = (data: object) => {
  return execPromise('INSERT INTO users SET ?', [data])
}
