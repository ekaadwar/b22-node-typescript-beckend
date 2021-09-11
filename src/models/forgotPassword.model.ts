import { execPromise } from '../helpers/db'

export const createForgotData = (code: string, id: number) => {
  return execPromise('INSERT INTO forgot_request SET ?', [
    { code, user_id: id },
  ])
}

export const getUserByResetCode = (code: string) => {
  return execPromise(
    'SELECT u.id, u.email, r.code FROM forgot_request r LEFT JOIN users u ON r.user_id=u.id WHERE r.code=?',
    [code]
  )
}
