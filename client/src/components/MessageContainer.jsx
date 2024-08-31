import { motion } from "framer-motion"

const MessageContainer = () => {
    return (
        <div className=" sm:ml-64 ">
            <div className=" relative border-gray-200 h-screen pt-20">

                <div>
                    {/* message */}
                    <div className=' px-4'>

                            <div className=" flex justify-end bg-transparent pr-8">
                                <div className=" w-fit flex space-x-8 rounded-lg bg-slate-700 p-3">
                                    <svg className=" cursor-pointer fill-cyan-400 hover:fill-cyan-500" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11z"></path></svg>
                                    <svg className=" cursor-pointer fill-cyan-400 hover:fill-cyan-500" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path d="m17.38 10.79l-2.2-2.2c-.28-.28-.36-.67-.25-1.02c.37-1.12.57-2.32.57-3.57c0-.55.45-1 1-1H20c.55 0 1 .45 1 1c0 9.39-7.61 17-17 17c-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1c1.24 0 2.45-.2 3.57-.57c.35-.12.75-.03 1.02.24l2.2 2.2c2.83-1.45 5.15-3.76 6.59-6.59"></path></svg>
                                </div>
                            </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >

                            <div >
                                {/* recived message */}
                                <div className="chat chat-start">
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS chat bubble component"
                                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                    <div className="chat-bubble">Hey how is going ? </div>
                                </div>

                                {/* sender message */}
                                <div className="chat chat-end">
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS chat bubble component"
                                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                    <div className="chat-bubble chat-bubble-info">Fine </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className=' absolute bottom-0 pl-8 pr-5 bg-gray-800 pb-2 w-full'>
                        <form className=' flex items-center space-x-3 pt-2 object-bottom w-full bottom-2 '>
                            <input type="text" placeholder='Send Message' className=' font-semibold outline-none p-2.5 w-full rounded-lg ' />
                            <button><svg className=' cursor-pointer fill-cyan-400 hover:fill-cyan-500' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path d="M4.4 19.425q-.5.2-.95-.088T3 18.5V14l8-2l-8-2V5.5q0-.55.45-.837t.95-.088l15.4 6.5q.625.275.625.925t-.625.925z"></path></svg></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageContainer