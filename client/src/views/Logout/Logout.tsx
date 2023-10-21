import React, { useContext, useEffect } from "react"
import { UserContext } from "../../shared/context/UserContext"
// import axios from "axios"

const Logout: React.FC = () => {
  const userContext = useContext(UserContext)

  useEffect(() => {
    // Make an API call to log the user out
    const logoutUser = async () => {
      try {
        // Make a request to your backend's logout endpoint
        // await axios.post(
        //   "http://localhost:8000/user/logout/",
        //   {},
        //   {
        //     withCredentials: true, // Include credentials for authentication
        //   }
        // )

        // Clear local storage (if applicable)
        localStorage.removeItem("token")

        // Reset UserContext to the initial state (not logged in)
        userContext.setUser({
          email: "",
          name: "",
          loggedIn: false,
        })
      } catch (error) {
        // Handle any errors that occur during the logout process
        console.error("Logout error:", error)
      }
    }

    logoutUser()
  }, [userContext])

  return (
    <div>
      <h2>You have successfully logged out!</h2>
    </div>
  )
}

export default Logout
