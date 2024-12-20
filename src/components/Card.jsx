import React from 'react'
import "./Card.css"

export const Card = ({
    imgSrc,
    imgAlt,
    title,
}) => {

  return (
    <div className = "card-container">
        {imgSrc && imgAlt && <img src = {imgSrc} alt = {imgAlt} loading = "lazy" className='card-image'/>}
        {title && <h1 className='card-title'>{title}</h1>}
    </div>
  )
}
