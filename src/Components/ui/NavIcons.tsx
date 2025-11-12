
import React from 'react'

interface NavIconsProps {
  children: React.ReactNode;
  className?: string
}

const NavIcons = ({children , className}: NavIconsProps) => {

  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default NavIcons

