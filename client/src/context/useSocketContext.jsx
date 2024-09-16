import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import Store from "../zustand/useConversation";
import io from 'socket.io-client'



const socketContext = createContext()

export const useSocketContext = () => {
    return useContext(socketContext)
}

export const SocketContextProvider = ({ children }) => {

    const [loginUser] = useState(JSON.parse(localStorage.getItem("user")))
    // console.log(userData);

    const [socket, setSocket] = useState()
    // const [onlineUsers, setOnlineUsers] = useState()
    const { messages, setMessages,setOnlineUsers } = Store()


    useEffect(() => {
        if (loginUser) {
            const socket = io("http://localhost:3000", {
                query: {
                    userId: loginUser._id
                }
            })
            setSocket(socket)
            socket.on("getOnlineUser", (user) => {
                setOnlineUsers(user)
            })

            socket.on("newMessage", (newMessage) => {
                console.log("newMessage", newMessage);
                console.log("oldMessags", [...messages]);
                setMessages([...messages, newMessage])

            })

            return () => socket.close()
        } else {
            if (socket) {
                socket.close()
                setSocket(null)
            }
        }

    }, [loginUser])

    return (< socketContext.Provider value={{ socket, messages, setMessages }}>
        {children}
    </socketContext.Provider >)

}