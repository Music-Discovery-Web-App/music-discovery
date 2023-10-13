import React, { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"

interface RegistrationFormProps {
  onRegistrationSuccess: (token: string) => void
  onRegistrationFailure: (error: string) => void
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onRegistrationSuccess,
  onRegistrationFailure,
}) => {
  const [first_name, setFirstName] = useState<string>("")
  const [last_name, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const navigate = useNavigate()

  const routeChange = () => {
    navigate("/login")
  }

  const handleRegistration = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/registration/",
        {
          first_name,
          last_name,
          email,
          password,
        }
      )

      const token = response.data.token

      localStorage.setItem("token", token)

      onRegistrationSuccess(token)
    } catch (error) {
      onRegistrationFailure(
        "Registration failed. Please check your credentials."
      )

      toast.error("Registration failed. Please check your credentials.", {
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
        type="first_name"
        placeholder="First Name"
        value={first_name}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="last_name"
        placeholder="Last Name"
        value={last_name}
        onChange={(e) => setLastName(e.target.value)}
      />
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
      <button onClick={handleRegistration}>Register</button>
      <button onClick={routeChange}>
        Already have an account? Log in here.
      </button>
      <ToastContainer />
    </div>
  )
}

export default RegistrationForm
