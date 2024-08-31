import { Route, Routes, useNavigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Auth from "./pages/Auth"
import { useState } from "react"

function App() {

  const navigate = useNavigate()
  const [logInUser] = useState(true)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={logInUser ? <HomePage /> : navigate('/')} />
      </Routes>
    </div>
  )
}

export default App
