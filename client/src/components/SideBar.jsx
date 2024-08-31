
import img from '/images/WhatsApp Image 2024-06-25 at 11.34.26_535e065b.jpg'

function SideBar() {
    return (

        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <div className=' px-2 pb-2'><input className=' w-full rounded-lg p-2 outline-none' type="text" placeholder=' Find User' /></div>
                    <li className=' cursor-pointer hover:bg-slate-700 active:bg-slate-950 active flex items-center justify-between border-b border-t pt-2 border-slate-700 px-3 pb-2'>
                        <div className=' flex space-x-4 items-center'>
                            <img src={img} className=' w-10 h-10 rounded-full object-cover' />
                            <span>Askar</span>
                        </div>
                        <small>12:30pm</small>
                    </li>
                </ul>
            </div>
        </aside>

    )
}

export default SideBar