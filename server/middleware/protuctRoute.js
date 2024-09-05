import jwt from "jsonwebtoken"
import User from "../models/authModel.js"

export const protuctRoute = async (req, res, next) => {

    try {

        const token = req.cookies.jwt
        if (!token) {

            res.status(400).json({ error: "unoutheried - token not found" })
        }

        const decodedToken = jwt.verify(token, process.env.JWT_KEY)

        if (!decodedToken) {

            res.status(400).json({ error: "unoutheried invalid token" })
        }

        const user = await User.findById(decodedToken.userId)
        req.user = user

        next()

    } catch (error) {
        console.log("Error in protuctRoute", error.message);
        res.status(500).json({ error: "Internal server error" })
    }

}