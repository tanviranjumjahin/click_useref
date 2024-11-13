import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";

const PrevArrow = (props) => {
const { className,onClick } = props;
  return (
        <div
        className={` inline-block p-4 text-[40px] text-arrowColor absolute right-5 top-1/2 -translate-y-1/2 z-10 ${className}`}
        onClick={onClick}
      ><FaArrowAltCircleRight /></div>
  )
}

export default PrevArrow