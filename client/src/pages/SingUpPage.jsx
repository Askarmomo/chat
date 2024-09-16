import { useState } from "react";

import { Link } from "react-router-dom";
import { useSingUp } from "../hooks/useSingUp.js";



const SingUpPage = () => {


    const [inputs, setInput] = useState({
        username: "",
        email: "",
        password: "",
        gender: ""
    })


    // loging function here
    const { singup } = useSingUp()
    const handleSingUp = async (e) => {

        e.preventDefault()
        await singup(inputs)
    }

    // gender check function for login here
    const male = (e) => {
        if (e.target.checked) {
            setInput({ ...inputs, gender: "male" })
        } else {
            setInput({ ...inputs, gender: "female" })
        }

    }
    const female = (e) => {
        if (e.target.checked) {
            setInput({ ...inputs, gender: "female" })
        } else {
            setInput({ ...inputs, gender: "male" })
        }
    }


    return (
        <div className="sm:pt-[150px]">
            <form onSubmit={handleSingUp} className=" max-w-xl mx-auto border border-slate-500 rounded-xl p-4 space-y-4 ">
                <h1 className=" text-center text-2xl font-semibold">SingUp</h1>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" value={inputs.username} onChange={(e) => setInput({ ...inputs, username: e.target.value })} className="grow" placeholder="Username" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" value={inputs.email} onChange={(e) => setInput({ ...inputs, email: e.target.value })} placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="password" value={inputs.password} onChange={(e) => setInput({ ...inputs, password: e.target.value })} className="grow" placeholder="password" />
                </label>

                <div className=" flex space-x-2 text-sm">
                    <div className=" flex items-center space-x-2">
                        <label htmlFor="male" className=" font-semibold ">Male</label>
                        <input onChange={male} className=" w-5 h-5" checked={inputs.gender == "male" ? true : false} type="checkbox" name="male" id="male" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="female" className=" font-semibold">Female</label>
                        <input onChange={female} checked={inputs.gender == "female" ? true : false} className="  w-5 h-5" type="checkbox" name="female" id="female" />
                    </div>
                </div >

                <button className=" btn btn-sm btn-accent w-full">SingUp</button>
                <div>
                    <small className=" flex text-center items-center space-x-2"> <p>if already have an account ?</p> <Link to={"/login"} className=" text-cyan-500 hover:underline cursor-pointer">Login</Link></small>
                </div>
            </form >
        </div >
    )
}

export default SingUpPage