import express from "express";
import { getAllUser, getOneUser } from "../controllers/allUserController.js";
import { protuctRoute } from "../middleware/protuctRoute.js";

const allUsersRoute = express.Router()

allUsersRoute.get('/', protuctRoute, getAllUser)
allUsersRoute.get('/:id', protuctRoute, getOneUser)

export default allUsersRoute