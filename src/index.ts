import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import 'dotenv/config'
import router from './routes'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))

// app.get('/', (req, res) => {
//   const data = {
//     success: true,
//     message: 'halo World',
//   }
//   return res.json(data)
// })

// const routeAuth = require('./routes/auth.router')

// app.use('/auth', routeAuth)

app.use('/', router)

app.listen(8080, () => {
  // tslint:disable-next-line: no-console
  console.log('App listening on port 8080')
})
