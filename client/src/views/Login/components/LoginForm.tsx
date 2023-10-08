import React, { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
// { AxiosError }

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

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/user/login/", {
        email,
        password,
      })

      const token = response.data.token

      // Store the token securely (e.g., in localStorage or a state management solution)
      localStorage.setItem("token", token)

      // Call the success callback with the token
      onLoginSuccess(token)
    } catch (error) {
      // Handle login error (e.g., show an error message to the user)
      onLoginFailure("Login failed. Please check your credentials.")

      toast.error("Login failed. Please check your credentials.", {
        position: "top-right",
        autoClose: 5000, // Close after 5 seconds
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
      <button>Need to register? Sign up for free.</button>
      <ToastContainer />
    </div>
  )
}

export default LoginForm
