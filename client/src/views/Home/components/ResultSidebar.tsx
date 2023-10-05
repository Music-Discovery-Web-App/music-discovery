import { ReactElement, useEffect, useState } from "react"
// Commented out for now for the sake of Frontend CI
// import { SearchResults } from "src/shared/search.types"

// interface ResultSidebarProps {
//   data: SearchResults
// }

const ResultSidebar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
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

  console.log(isOpen)
  return (
    <div className={`z-2 flex ${isMobile && isOpen && " "}`}>
      {!isOpen && (
        <button
          className="fixed top-0 right-0 p-4 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          Open sidebar placeholder
        </button>
      )}
      <div
        className="fixed top-0 right-0 h-full w-64 bg-gray-600 z-50 transform transition-transform duration-200 ease-in-out"
        style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        <div className="flex flex-col w-full z-5">
          <div className="flex items-center p-4">
            <button
              className="p-4 text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "X" : ""}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultSidebar
