import React, { ReactNode } from "react"

interface CardProps {
  title: string
  children: ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  const cardClasses = `card ${className || ""}`

  return (
    <div className="flex items-start justify-center h-screen">
      <div className={`w-full max-w-sm p-4 ${cardClasses}`}>
        <div className="card-header bg-gray-500 text-white p-2">
          <h2>{title}</h2>
        </div>
        <div className="card-body p-2">
          <div className="flex items-start justify-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
