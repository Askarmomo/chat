import toast from "react-hot-toast";


export const useSingUp = () => {


    const singup = async ({ username, email, password, gender }) => {

        try {

            const res = await fetch('/api/user/singup', {
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password, gender })
            })

            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }
            console.log(data);

            window.location.reload()
            localStorage.setItem("user", JSON.stringify(data))
        } catch (error) {
            toast.error(error.message)

        }
    }

    return { singup }

}

