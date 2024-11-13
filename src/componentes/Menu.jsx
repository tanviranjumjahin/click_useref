import React from 'react'

const Menu = ({menuName,className}) => {
  return (
    <ul>
        <li className={` font-dm text-sm text-menuText hover:font-bold hover:text-menuHover ${className}`}>{menuName}</li>
    </ul>
  )
}

export default Menu
