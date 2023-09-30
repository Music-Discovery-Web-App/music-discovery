import { ReactElement, useEffect, useState } from "react"
import { SearchResults } from "src/shared/search.types"

interface ResultSidebarProps {
  data: SearchResults
}

const ResultSidebar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [isMobile, setIsMobile] = useState<boolean>(false)

//   const { results } = data

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      setIsMobile(screenWidth < 640)
    }
    handleResize()
    window.addEventListener("reside", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className={`z-40 flex ${isMobile && isOpen && " "}`}>
        Sidebar is here
    </div>
  )
}

export default ResultSidebar
