import http from "http";
import { Server } from "socket.io"
import express from "express"


const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:5173'],
        methods: ["GET", "POST"]
    }
})

export const getReciverSocketId = (reciverId) => {
    return userSocketMap[reciverId]
}

const userSocketMap = {}

io.on("connection", (socket) => {
    console.log("userConnnected", socket.id);

    const { userId } = socket.handshake.query
    if (userId) userSocketMap[userId] = socket.id

    io.emit("getOnlineUser", Object.keys(userSocketMap))

    socket.on("disconnect", () => {
        console.log("user disconnect");
        delete userSocketMap[userId]
        io.emit("getOnlineUser", Object.keys(userSocketMap))
    })

})

export { app, server, io }

