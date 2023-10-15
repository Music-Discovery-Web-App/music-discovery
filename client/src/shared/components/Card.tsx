import React, { ReactNode } from "react"

interface CardProps {
  title: string
  children: ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  const cardClasses = `card ${className || ""}`

  return (
    <div className={`p-4 border rounded ${cardClasses}`}>
      <div className="card-header bg-blue-500 text-white p-2">
        <h2>{title}</h2>
      </div>
      <div className="card-body p-2">{children}</div>
    </div>
  )
}

export default Card
