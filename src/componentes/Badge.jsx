import React from 'react'

const Badge = ({className,badgeName}) => {
  return (
    <div className={`font-dm font-bold text-sm py-3 px-[30px] bg-black text-white w-[90px] ${className}`}>{badgeName} </div>
  )
}

export default Badge
