import express from 'express'
import authRoute from './routes/authRoute.js';
import { connectDB } from './db.js';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import messageRoute from './routes/messageRoute.js';
import allUsersRoute from './routes/allUsersRoute.js';

dotenv.config()
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/user', authRoute)
app.use('/api/message', messageRoute)
app.use('/api/users', allUsersRoute)

app.listen(3000, () => {
    connectDB()
    console.log('server running on port 3000');

})

