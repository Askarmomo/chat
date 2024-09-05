import mongoose from "mongoose"

export const connectDB = async () => {

    try {
        await mongoose.connect(process.env. MONGO_DB_URI)
        console.log('Mongodb connected');

    } catch (error) {
        console.log("Error in connectDB", error);
    }

}