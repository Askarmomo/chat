import toast from "react-hot-toast";


const useLogout = async () => {

    try {
        const res = await fetch('/api/user/logout', {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        })
        const data = await res.json()

        if (data.error) {
            throw new Error(data.error)
        }
        localStorage.clear()
        toast.success("LogOut successfully")

        setTimeout(() => {
            window.location.reload()
        }, 500);
    } catch (error) {
        toast.error(error.message)
    }

}

export default useLogout