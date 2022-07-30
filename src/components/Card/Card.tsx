import React from 'react'
import CardStyle from './CardStyle'
import { Link } from 'react-router-dom'
import { Variants } from 'framer-motion'

export interface CardProps{
  img: string
  name: string
  price: number
  id: string,
  index?: number
}

const Card:React.FC<CardProps> = ({ img, name, price, id, index }) => {
  const item:Variants = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      transition: {
        delay: index ? index * 0.2 : 0,
        duration: 0.3
      },
      x: 0
    }
  }
  return (
    <CardStyle variants={item}>
      <img className='card__img' src={img} alt={name} />
      <h5 className='card__title'>{name}</h5>
      <h5 className='card_price'>${price}</h5>
      <Link className='card__link' to={`/product/${id}`}>Ver producto</Link>
    </CardStyle>
  )
}

export default Card
