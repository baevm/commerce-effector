import React, { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const ActionIcon = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className='cursor-pointer border-0 active:scale-95'>
      {children}
    </button>
  )
}

export default ActionIcon
