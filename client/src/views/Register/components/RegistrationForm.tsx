import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import SubmitButton from "../../../shared/components/Button"
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
  const [password2, setPassword2] = useState<string>("")
  const navigate = useNavigate()

  const routeChange = () => {
    navigate("/login")
  }

  const handleRegistration = async () => {
    try {
      if (password !== password2) {
        onRegistrationFailure("Passwords do not match. Please re-enter.")
        toast.error("Passwords do not match. Please re-enter.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      } else {
        const response = await axios.post<any>(
          "http://localhost:8000/user/registration/",
          {
            first_name,
            last_name,
            email,
            password,
          }
        )

        if (response.status === 201) {
          const token = response.data.token
          localStorage.setItem("token", token)
          onRegistrationSuccess(token)
          navigate("/")
        } else {
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
      <div>
        <input
          type="text"
          placeholder="First Name"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </div>
      <SubmitButton text="Register" onClick={handleRegistration} />
      <button onClick={routeChange}>
        Already have an account? Log in here.
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  )
}

export default RegistrationForm
