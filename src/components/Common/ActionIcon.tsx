import React, { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: React.ComponentProps<'button'>['className']
}

const ActionIcon = ({ children,className, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`cursor-pointer border-0 active:scale-95 ${className}`}>
      {children}
    </button>
  )
}

export default ActionIcon
