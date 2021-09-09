import { Request, Response } from 'express'
import { createUser, getUserByEmail } from '../models/users.model'

export const login = async (req: Request, res: Response) => {
  const { email } = req.body
  const result = await getUserByEmail(email)
  // console.log(result)

  return res.json({
    success: true,
    message: 'Login success',
  })
}

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const result = await createUser({ email, password })

  return res.json({
    success: true,
    message: 'Register successfully',
  })
}
