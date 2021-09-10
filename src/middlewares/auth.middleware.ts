import { Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

interface AuthRequest extends Request {
  authUser: string | JwtPayload
}

const authMiddleware = (req: AuthRequest, res: Response, next: Function) => {
  const payload = req.headers.authorization
  if (payload) {
    ;('Bearer token')
    const token = payload.slice(7)
    try {
      const verify = jwt.verify(token, process.env.APP_KEY || '')
      req.authUser = verify
      next()
    } catch (error) {
      return res.json({
        success: false,
        message: 'Auth error',
      })
    }
  }
  return res.json({
    success: false,
    message: 'Anauthorized',
  })
}

export default authMiddleware
