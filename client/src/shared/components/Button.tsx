import React from "react"

interface ButtonProps {
  text: string
  onClick: () => void
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
}) => {
  const buttonClasses = `bg-blue-500 text-white p-2 rounded ${className || ""}`

  return (
    <div>
      <button className={buttonClasses} onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default Button
