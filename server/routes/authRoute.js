import express from 'express'
import { logIn, logOut, singUp, updateProfile } from '../controllers/authControllers.js'
import { protuctRoute } from '../middleware/protuctRoute.js'

const authRoute = express.Router()

authRoute.post('/singup', singUp)
authRoute.post('/login', logIn)
authRoute.post('/logout', logOut)
authRoute.put('/updateprofile/:id', protuctRoute, updateProfile)

export default authRoute 