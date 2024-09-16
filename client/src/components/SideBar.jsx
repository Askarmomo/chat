import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { NavLink } from 'react-router-dom'
// import { useSocketContext } from '../context/useSocketContext'
import Store from '../zustand/useConversation'

function SideBar() {
    const [logInUser] = useState(JSON.parse(localStorage.getItem("user")))
    const [sideBarUsers, setSideBarUsers] = useState([])
    const { onlineUsers } = Store()


    useEffect(() => {

        const getAllUserForSideBar = async () => {

            try {
                const res = await fetch('/api/users')
                const data = await res.json()
                if (data.error) {
                    throw new Error(data.error)
                }
                setSideBarUsers(data)
                // console.log(data);

            } catch (error) {
                toast.error(error.message)
            }

        }
        getAllUserForSideBar()

    }, [logInUser])



    return (

        <aside className="w-64 h-screen fixed top-[67px] right-0 left-0 z-50 bottom-0 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <div className=' px-2 pb-2'><input className=' w-full rounded-lg p-2 outline-none' type="text" placeholder=' Find User' /></div>
                    {
                        sideBarUsers.map((user) => (

                            <NavLink key={user._id} to={`/${user._id}`}>
                                <li className={`cursor-pointer hover:bg-slate-700 active:bg-slate-950 flex items-center justify-between border-b border-t pt-2 border-slate-700 px-3 pb-2`}>
                                    <div className=' flex space-x-4 items-center'>
                                        <div className={`avatar ${onlineUsers.includes(user._id) ? "online" : "offline"}`}>
                                            <div className=" w-12 rounded-full">
                                                <img src={user.profilePic} />
                                            </div>
                                        </div>
                                        <span>{user.username}</span>
                                    </div>
                                    <small>12:30pm</small>
                                </li>
                            </NavLink>
                        ))
                    }
                </ul>
            </div>
        </aside>

    )
}

export default SideBar