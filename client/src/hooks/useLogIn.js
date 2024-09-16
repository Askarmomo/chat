import toast from "react-hot-toast"
import Store from "../zustand/useConversation"



const useLogIn = () => {

    const { setLogInUser } = Store()
    const login = async ({ email, password }) => {

        try {

            const res = await fetch('/api/user/login', {
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            })

            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }
            // setLogInUser(data)
            console.log(data);
            localStorage.setItem("user", JSON.stringify(data))
            window.location.reload()
        } catch (error) {
            toast.error(error.message)

        }
    }

    return { login }

}

export default useLogIn