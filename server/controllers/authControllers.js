import User from "../models/authModel.js"
import bcrypt from "bcrypt"
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js"



export const singUp = async (req, res) => {

    try {
        const { username, email, password, gender } = req.body
        let { profilePic } = req.body



        if (!username || !email || !password || !gender) {
            return res.status(400).json({ error: "please fill all the required fields" })
        }

        if (!gender.includes("male" || "female")) {

            return res.status(400).json({ error: "Invalid Gender Type" })
        }



        const existingUser = await User.findOne({ email: email })

        if (existingUser) {
            return res.status(400).json({ error: "user already exist" })
        }

        const hashPassword = await bcrypt.hash(password, 10)


        profilePic = `https://avatar.iran.liara.run/username?username=${username}`


        const createUser = new User({
            username,
            email,
            password: hashPassword,
            profilePic: profilePic,
            gender: gender
        })
        await createUser.save()

        generateTokenAndSetCookie(createUser._id, res)

        if (createUser) {
            return res.status(200).json(createUser)
        }
    } catch (error) {
        console.log('Error in singup', error.message);
        return res.status(500).json({ error: "Internal server error" })

    }
}

export const logIn = async (req, res) => {

    try {
        const { email, password } = req.body

        if (!email && !password) {
            return res.status(400).json({ error: "please fill all the required field" })
        }

        const user = await User.findOne({ email: email })

        const isPassword = await bcrypt.compare(password, user?.password || "")

        if (!user || !isPassword) {
            return res.status(400).json({ error: "invalid email or password" })
        }

        generateTokenAndSetCookie(user._id, res)
        res.status(200).json({ message: "Success", user })

    } catch (error) {
        console.log("Error in logIn", error);
        res.status(500).json({ error: "Internal server error" })
    }

}

export const logOut = async (req, res) => {

    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: "LogOut Succrssfully" })
    } catch (error) {
        console.log("Error in logOut");
        res.status(500).json({ error: "Internal server error" })
    }

}
