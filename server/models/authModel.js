import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        unique: true,
        min: 6,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        unique: true,
        required: true,
        min: 8
    },
    profilePic: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    }
}, { timestamps: true })

const User = mongoose.model('user', userSchema)

export default User