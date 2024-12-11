// src/components/Button.tsx
import React from 'react'
import classNames from 'classnames'

interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const buttonClass = classNames(
    'px-4 py-2 rounded',
    {
      'bg-blue-500 text-white hover:bg-blue-700': variant === 'primary',
      'bg-gray-500 text-white hover:bg-gray-700': variant === 'secondary',
    }
  )

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button