import { execPromise } from '../helpers/db'

export const createForgotData = (code: string, id: number) => {
  return execPromise('INSERT INTO forgot_request SET ?', [
    { code, user_id: id },
  ])
}
