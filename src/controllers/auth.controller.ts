import { Request, Response } from 'express'
import { checkEmail } from '../models/auth.model'
import response from '../helpers/response'

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const results: any = await checkEmail(email)
}
