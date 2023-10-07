import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleClick = (path: string) => {
    navigate(path)
  }

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      setIsMobile(screenWidth < 640)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-3 ">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center">
            {/* Icon/Logo goes here */}
            {/* <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src="#" alt="Your Company" />
            </div> */}

            {!isMobile && (
              <div className="flex justify-between">
                <button
                  onClick= {() => handleClick("/")}
                  className="hover:-translate-y-1 hover:bg-gray-600 transition ease-in-out text-white rounded-md px-3 py-2 text-[30px] font-medium block text-center font-young-serif"
                >
                  Home
                </button>
                <button
                  onClick= {() => handleClick("/login")}
                  className="hover:-translate-y-1 hover:bg-gray-600 transition ease-in-out text-white rounded-md px-3 py-2 text-[30px] font-medium block text-center font-young-serif"
                >
                  Login
                </button>
                <button
                  onClick= {() => handleClick("/register")}
                  className="hover:-translate-y-1 hover:bg-gray-600 transition ease-in-out text-white rounded-md px-3 py-2 text-[30px] font-medium block text-center font-young-serif"
                >
                  Register
                </button>
                <button
                  onClick= {() => handleClick("/contact")}
                  className="hover:-translate-x-1 hover:bg-gray-600 transition ease-in-out text-white rounded-md px-3 py-2 text-[30px] font-medium block text-center font-young-serif"
                >
                  Contact
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {isMobile && (
          <div className="space-y-1 px-2 pb-2 pt-1">
            <a
              href="#"
              className="hover:-translate-y-1 hover:bg-gray-600 transition ease-in-out text-white rounded-md px-3 py-2 text-[30px] font-medium block text-center font-young-serif"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:-translate-y-1 hover:bg-gray-600 transition ease-in-out text-white rounded-md px-3 py-2 text-[30px] font-medium block text-center font-young-serif"
            >
              Login
            </a>
            <a
              href="#"
              className="hover:-translate-y-1 hover:bg-gray-600 transition ease-in-out text-white rounded-md px-3 py-2 text-[30px] font-medium block text-center font-young-serif"
            >
              Register
            </a>
            <a
              href="#"
              className="hover:-translate-y-1 hover:bg-gray-600 transition ease-in-out text-white rounded-md px-3 py-2 text-[30px] font-medium block text-center font-young-serif"
            >
              Contact
            </a>
          </div>
      )}
    </div>
  )
}

export default Navbar
