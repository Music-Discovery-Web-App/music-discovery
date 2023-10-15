import { useNavigate } from "react-router-dom"
import Card from "../../../shared/components/Card"
import RegistrationForm from "./RegistrationForm"

const RegistrationCard: React.FC = () => {
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
      <Card title="Registration Form">
        <RegistrationForm
          onRegistrationSuccess={handleRegistrationSuccess}
          onRegistrationFailure={handleRegistrationFailure}
        />
      </Card>
    </div>
  )
}

export default RegistrationCard
