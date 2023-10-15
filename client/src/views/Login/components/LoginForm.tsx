import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "react-toastify/dist/ReactToastify.css"

interface LoginFormProps {
  onLoginSuccess: (token: string) => void
  onLoginFailure: (error: string) => void
}

const LoginForm: React.FC<LoginFormProps> = ({
  onLoginSuccess,
  onLoginFailure,
}) => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const navigate = useNavigate()

  const routeChange = () => {
    navigate("/register")
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/user/login/", {
        email,
        password,
      })

      const token = response.data.token

      localStorage.setItem("token", token)

      onLoginSuccess(token)
    } catch (error) {
      onLoginFailure("Login failed. Please check your credentials.")

      toast.error("Login failed. Please check your credentials.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
  }

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={routeChange}>Need to register? Sign up for free.</button>
      <ToastContainer />
    </div>
  )
}

export default LoginForm
