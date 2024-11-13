import React from 'react'

const Image = ({imgsrc, imgalt, className}) => {
  return (
    <img src={imgsrc} alt={imgalt} className={`${className}`} />
  )
}

export default Image
