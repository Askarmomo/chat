import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { useEffect, useState } from "react"
import LoginPage from "./pages/LoginPage"
import SingUpPage from "./pages/SingUpPage"
import { Toaster } from "react-hot-toast"



function App() {

  const data = JSON.parse(localStorage.getItem("user"))

  const [logInUser, setInputLogInUser] = useState(data)

  useEffect(() => {
    if (data) {

      if (data.message === "Success") {
        setInputLogInUser(true)
      }

    }
    if (data === "null") {
      setInputLogInUser(false)
    }
  }, [data])


  return (
    <div>
      <Routes>
        <Route path="/" element={logInUser ? <HomePage /> : <Navigate to={'/login'} />} />
        <Route path="/:id" element={logInUser ? <HomePage /> : <Navigate to={'/login'} />} />
        <Route path="/login" element={logInUser ? <Navigate to={'/'} /> : <LoginPage />} />
        <Route path="/singup" element={logInUser ? <Navigate to={'/'} /> : <SingUpPage />} />
      </Routes>
      <Toaster />
    </div>
  )

}

export default App
