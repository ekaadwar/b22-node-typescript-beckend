import { Request, Response } from 'express'
import response from '../helpers/response'

export const login = (req: Request, res: Response) => {
  return response(res, 'Login Success')
}
