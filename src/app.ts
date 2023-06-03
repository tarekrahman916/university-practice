import express, { Application, Request, Response } from 'express'
const app: Application = express()
import userRoute from './app/modules/users/users.route'
import cors from 'cors'

app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application route
app.use('/api/v1/users', userRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
