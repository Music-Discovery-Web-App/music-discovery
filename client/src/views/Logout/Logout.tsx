import React, { useContext, useEffect } from "react"
import { UserContext } from "../../shared/context/UserContext"
import axios from "axios"

const Logout: React.FC = () => {
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    const logoutUser = async () => {
      try {
        const token = localStorage.getItem("token")

        if (token) {
          await axios.post(
            "http://localhost:8000/user/logout/",
            {},
            {
              headers: {
                Authorization: `Token ${token}`,
              },
            }
          )
        }

        localStorage.removeItem("token")

        if (user && user.loggedIn) {
          // Update the user context
          setUser({
            email: "",
            name: "",
            loggedIn: false,
          })
        }
      } catch (error) {
        console.error("Logout error:", error)
      }
    }

    logoutUser()
  }, [user, setUser])

  return (
    <div>
      <h2>You have successfully logged out!</h2>
    </div>
  )
}

export default Logout
