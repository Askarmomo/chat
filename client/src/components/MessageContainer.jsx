import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
import Store from "../zustand/useConversation"
import { useSocketContext } from "../context/useSocketContext"


const MessageContainer = () => {
    const [logInUser] = useState(JSON.parse(localStorage.getItem("user")))
    const { id } = useParams()
    const [message, setMessage] = useState('')
    const { socket } = useSocketContext()
    const { messages, setMessages } = Store()
    const [reciverPic, setReciverPic] = useState()

    const { onlineUsers } = Store()
    // console.log(onlineUsers.includes(id));

    useEffect(() => {
        if (onlineUsers.includes(id)) {
            socket?.on('newMessage', (newMessage) => {
                setMessages([...messages, newMessage])
            })
            return () => socket?.off('newMessage')


        }
    }, [socket, messages, setMessages])

    // get message api call  here
    useEffect(() => {
        if (id) {
            const getMessages = async () => {

                try {

                    const res = await fetch('/api/message/' + id)
                    const data = await res.json()

                    if (data.error) {
                        throw new Error(data.error)
                    }

                    setMessages(data)
                } catch (error) {
                    toast.error(error.message)
                } finally {
                }

            }
            getMessages()
        }
        // console.log(getMessages);

    }, [id])

    // send message api call here
    const sendMessage = async (e) => {
        e.preventDefault()
        if (id) {
            try {

                const res = await fetch(`/api/message/send/${id}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message })
                })
                const data = await res.json()
                if (data.error) {
                    throw new Error(data.error)
                }
                // console.log("messageContainer", [...messages]);

                setMessages([...messages, data])

            } catch (error) {
                toast.error(error.message)
            } finally {
                setMessage('')
            }
        }

    }

    // get reciver user api call
    useEffect(() => {
        const getuser = async () => {
            try {
                const res = await fetch('/api/users/' + id)
                const data = await res.json()
                if (data.error) {
                    throw new Error(data.error)
                }
                // console.log(data);
                setReciverPic(data.profilePic)
            } catch (error) {
                console.log(error.message);

            }
        }
        getuser()
    }, [id])




    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, [messages])

    return (
        <div className=" w-full pt-2 pb-16 " >
            {id ? <div >

                <div>
                    {/* message */}
                    <div >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >

                            <div  >
                                {
                                    messages.map((msg) => (
                                        <div key={msg._id} className={msg.senderId == logInUser._id ? "chat chat-end pr-4" : "chat chat-start pl-4"}>
                                            <div className="chat-image avatar">
                                                <div className="w-10 rounded-full">
                                                    <img
                                                        alt="Tailwind CSS chat bubble component"
                                                        src={msg.senderId == logInUser._id ? logInUser.profilePic : reciverPic} />
                                                </div>
                                            </div>
                                            <div className={msg.senderId == logInUser._id ? " chat-bubble chat-bubble-info" : "chat-bubble"}>{msg.message} </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </motion.div>
                        <div className='mt-2 fixed sm:ml-[240px] bottom-0 left-0 right-0 top-[535px] pl-8 pr-5 bg-gray-800 pb-2'>
                            <form onSubmit={sendMessage} className=' flex items-center space-x-3 pt-2 object-bottom w-full bottom-2 '>
                                <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder='Send Message' className=' font-semibold outline-none p-2.5 w-full rounded-lg ' />
                                <button><svg className=' cursor-pointer fill-cyan-400 hover:fill-cyan-500' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path d="M4.4 19.425q-.5.2-.95-.088T3 18.5V14l8-2l-8-2V5.5q0-.55.45-.837t.95-.088l15.4 6.5q.625.275.625.925t-.625.925z"></path></svg></button>
                            </form>
                        </div>
                    </div>

                </div>
            </div >

                :

                <div className=" flex items-center justify-center mt-80 font-semibold text-lg">select user to chat</div>
            }
        </div >
    )
}

export default MessageContainer