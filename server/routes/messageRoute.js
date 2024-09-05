import express from "express"
import { reciveMessage, sendMessage } from "../controllers/messageController.js"
import { protuctRoute } from "../middleware/protuctRoute.js"

const messageRoute = express.Router()

messageRoute.post('/send/:id', protuctRoute, sendMessage)
messageRoute.get('/:id',protuctRoute,reciveMessage)

export default messageRoute