import { Router } from 'express'
import {
  forgotPassword,
  login,
  register,
  resetPassword,
} from '../controllers/auth.controller'

const auth = Router()

auth.post('/login', login)
auth.post('/register', register)
auth.post('/forgot_password', forgotPassword)
auth.post('/reset_password', resetPassword)

export default auth
