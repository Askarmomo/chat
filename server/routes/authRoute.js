import express from 'express'
import { singUp } from '../controllers/authControllers.js'

const authRoute = express.Router()

authRoute.get('/', singUp)

export default authRoute