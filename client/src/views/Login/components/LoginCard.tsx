import { useNavigate } from "react-router-dom"
import Card from "../../../shared/components/Card"
import LoginForm from "./LoginForm"

const LoginCard: React.FC = () => {
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
      <Card title="Login Form">
        <LoginForm 
          onLoginSuccess={handleLoginSuccess}
          onLoginFailure={handleLoginFailure}
        />
      </Card>
    </div>
  )
}

export default LoginCard
