import { useState, useEffect } from "react"

const Navbar = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

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
        <div className="relative flex h-20 items-left justify-between">
          <div className="flex flex-1 items-left justify-center">
            {/* Icon/Logo goes here */}
            {/* <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src="#" alt="Your Company" />
            </div> */}

            {!isMobile && (
              <div className="flex justify-between">
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
                  className="hover:-translate-x-1 hover:bg-gray-600 transition ease-in-out text-white rounded-md px-3 py-2 text-[30px] font-medium block text-center font-young-serif"
                >
                  Contact
                </a>
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
