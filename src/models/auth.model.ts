import database from '../helpers/database'
import { Email } from '../types/user.type'

const table = 'user'

export const checkEmail = async (email: Email) => {
  return (await db).execute(`SELECT * from ${table} WHERE email=?`, [email])
}
