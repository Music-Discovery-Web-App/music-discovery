import React from "react"
import { useNavigate } from "react-router-dom"
import RegistrationForm from "./components/RegistrationForm"

const Registration: React.FC = () => {
  const navigate = useNavigate()

  const handleRegistrationSuccess = (token: string) => {
    console.log("Registration successful. Token:", token)
    navigate("/")
  }

  const handleRegistrationFailure = (error: string) => {
    console.error("Registration failed:", error)
  }

  return (
    <div>
      <h1>Register</h1>
      <RegistrationForm
        onRegistrationSuccess={handleRegistrationSuccess}
        onRegistrationFailure={handleRegistrationFailure}
      />
    </div>
  )
}

export default Registration
