import express from "express";
import { getAllUser } from "../controllers/allUserController.js";
import { protuctRoute } from "../middleware/protuctRoute.js";

const allUsersRoute = express.Router()

allUsersRoute.get('/',protuctRoute,getAllUser)

export default allUsersRoute