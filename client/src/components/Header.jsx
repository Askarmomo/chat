import img from '/images/WhatsApp Image 2024-06-25 at 11.34.26_535e065b.jpg'

const Header = () => {
    return (
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>
                        <a href="https://flowbite.com" className="flex items-center space-x-3 ms-2 md:me-24 font-semibold text-2xl">
                            <svg className=' animate-ping stroke-cyan-400' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" strokeLinecap="round" strokeWidth="1.5" d="M12 16V8m-4 6v-4m8 4v-4m1-6.662A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></path></svg>
                            <span>Chat</span>
                        </a>
                    </div>

                    <div className="dropdown dropdown-left">
                        <img tabIndex={0} role='button' className=' active:bg-teal-400 active:border h-10 w-10 object-cover rounded-full' src={img} />
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow">
                            <li>
                                <div className=' flex space-x-2'>
                                    <p>LogOut</p>
                                    <svg className=' stroke-slate-400' xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80l-80-80m-192 80h256"></path></svg>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Header