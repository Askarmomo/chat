import express from 'express'
import { logIn, logOut, singUp } from '../controllers/authControllers.js'

const authRoute = express.Router()

authRoute.post('/singup', singUp)
authRoute.post('/login', logIn)
authRoute.post('/logout', logOut)

export default authRoute 