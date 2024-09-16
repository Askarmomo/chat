import User from "../models/authModel.js";


export const getAllUser = async (req, res) => {

    try {

        const loginUser = req.user._id

        const users = await User.find({ _id: { $ne: loginUser } })

        res.status(201).json(users)
    } catch (error) {
        console.log("Error in getAllUser", error.message);
        res.status(500).json({ error: "Internal server error" })

    }

}

export const getOneUser = async (req, res) => {

    try {

        const id = req.params.id

        const user = await User.findOne({ _id: id })
        if (!user) {
            res.status(400).json({ error: "user not found" })
        }
        res.status(200).json(user)

    } catch (error) {
        console.log("Error in getOneUser", error.message);
        res.status(500).json({ error: "Internal server error" })

    }

}