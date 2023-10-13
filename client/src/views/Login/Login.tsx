import React from "react"
import { useNavigate } from "react-router-dom"
import LoginForm from "./components/LoginForm"

const Login: React.FC = () => {
  const navigate = useNavigate()

  const handleLoginSuccess = (token: string) => {
    console.log("Login successful. Token:", token)
    navigate("/")
  }

  const handleLoginFailure = (error: string) => {
    console.error("Login failed:", error)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm
        onLoginSuccess={handleLoginSuccess}
        onLoginFailure={handleLoginFailure}
      />
    </div>
  )
}

export default Login
