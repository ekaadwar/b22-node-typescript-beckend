import { Email } from '../types/user.type'

export const checkEmail = async (email: Email) => {
  return (await db).execute(
    `
            SELECT * from ${table} WHERE email=?`,
    [email]
  )
}
