import express from 'express'
import authRoute from './routes/authRoute.js';
import { connectDB } from './db.js';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import messageRoute from './routes/messageRoute.js';
import allUsersRoute from './routes/allUsersRoute.js';
import { server, app } from './socket/socket.js'
import { v2 as cloudinary } from 'cloudinary';
import bodyParser from 'body-parser';
import cors from "cors"



dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET

})



app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(cookieParser())
app.use(cors())

app.use('/api/user', authRoute)
app.use('/api/message', messageRoute)
app.use('/api/users', allUsersRoute)

server.listen(3000, () => {
    connectDB()
    console.log('server running on port 3000');

})

