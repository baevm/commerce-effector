import React, { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className: React.ComponentProps<'button'>['className']
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`rounded-full bg-black py-4 px-8 text-white shadow-xl active:scale-[98%] ${className}`}>
      {children}
    </button>
  )
}

export default Button
