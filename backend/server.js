import path from 'path'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import bookRoutes from './routes/bookRoutes.js'
import { errorHandler } from './middleware/errorMiddleware.js'
const app = express()

app.use(express.json())
dotenv.config()
connectDB()
app.use(cors())

app.use('/api/users', userRoutes)
app.use('/api/book', bookRoutes)

app.get('/api/config/bookKey', (req, res) => {
  res.send(process.env.REACT_APP_GBOOK_API_KEY)
})

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  //set frontend/build as static folder
  app.use(express.static(path.join(__dirname, '/frontend/build')))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API running....')
  })
}

//error handler route
app.use(errorHandler)
const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} env on  port ${PORT}`)
)
