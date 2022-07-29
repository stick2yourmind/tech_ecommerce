import React from 'react'
import CardStyle from './CardStyle'

export interface CardProps{
  img: string
  name: string
  price: number
}

const Card:React.FC<CardProps> = ({ img, name, price }) => {
  return (
    <CardStyle>
      <img className='card__img' src={img} alt={name} />
      <h5 className='card__title'>{name}</h5>
      <h5 className='card_price'>${price}</h5>
      <button className='card__btn'>Ver producto</button>
    </CardStyle>
  )
}

export default Card
