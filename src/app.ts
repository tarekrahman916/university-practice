import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import userRoute from './app/modules/user/user.route'
const app: Application = express()

app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application route
app.use('/api/v1/users', userRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('working')
})
// Testing
// app.get('/test', (req: Request, res: Response) => {
//   throw new Error('Error Hoise')
// })

// Global Error Handler
app.use(globalErrorHandler)

export default app
