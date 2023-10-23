import React, { useState, useContext } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../../shared/context/UserContext"
import axios from "axios"
import SubmitButton from "../../../shared/components/Button"
import "react-toastify/dist/ReactToastify.css"

interface LoginFormProps {
  onLoginSuccess: (token: string) => void
  onLoginFailure: (error: string) => void
}

const LoginForm: React.FC<LoginFormProps> = ({
  onLoginSuccess,
  onLoginFailure,
}) => {
  const userContext = useContext(UserContext)
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
      const userName = response.data.name

      localStorage.setItem("token", token)

      userContext.setUser({
        email: email,
        name: userName,
        loggedIn: true,
      })

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
      <SubmitButton text="Login" onClick={handleLogin} />
      <button onClick={routeChange}>Need to register? Sign up for free.</button>
      <ToastContainer />
    </div>
  )
}

export default LoginForm
