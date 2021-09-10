import { Request, Response } from 'express'
import { createUser, getUserByEmail } from '../models/users.model'
import argon from 'argon2'

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
  const user = await getUserByEmail(email)

  if (user.length < 1) {
    const encPassword = await argon.hash(password)
    const result = await createUser({ email, password: encPassword })
    return res.json({
      success: true,
      message: 'Register successfully',
    })
  } else {
    return res.json({
      success: false,
      message: 'Register Failed : Email is exists',
    })
  }
}
