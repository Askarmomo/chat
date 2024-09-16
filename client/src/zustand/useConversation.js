import { create } from "zustand"


const Store = create((set) => ({
    onlineUsers: [],
    setOnlineUsers: (onlineUsers) => set({ onlineUsers }),
    messages: [],
    setMessages: (messages) => set({ messages })
}))

export default Store