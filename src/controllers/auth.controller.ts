import { Request, Response } from 'express'
import { createUser, getUserByEmail } from '../models/users.model'
import argon from 'argon2'
import jwt from 'jsonwebtoken'

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const result = await getUserByEmail(email)
  // console.log(result[0])
  if (result.length > 0) {
    const user = result[0]
    try {
      const compare = await argon.verify(user.password, password)
      return res.json({
        success: true,
        message: 'Login success',
        token: jwt.sign({ id: user.id }, process.env.APP_KEY || ''),
      })
    } catch (e) {
      return res.json({
        success: false,
        message: 'Wrong email or password',
      })
    }
  }
  return res.json({
    success: false,
    message: 'Email not found',
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
