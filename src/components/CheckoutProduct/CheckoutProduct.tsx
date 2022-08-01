import React from 'react'
import { useDispatch } from 'react-redux'
import { CartProduct, deleteProduct } from '../../app/features/cartSlice'
import CheckoutProductStyle from './CheckoutProductStyle'
import deleteImg from './delete.svg'
import { Variants } from 'framer-motion'

export interface CheckoutProps extends CartProduct {
  index?: number
}

const CheckoutProduct:React.FC<CheckoutProps> = ({ quantity, name, photo, price, _id, index = 0 }) => {
  const dispatch = useDispatch()
  const product:Variants = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      transition: {
        delay: index ? index * 0.2 : 0,
        duration: 0.3
      },
      y: 0
    }
  }
  return (
    <CheckoutProductStyle variants={product}>
      <img src={photo} alt={name} className='cart-product__product-photo'/>
      <div className='cart-product__info'>
        <p className="cart-product__name">{name}</p>
        <p className="cart-product__price">Precio: ${price}</p>
        <p className="cart-product__quantity">Cantidad: {quantity}</p>
        <p className="cart-product__subtotal">Subtotal: ${quantity * price}</p>
      </div>
      <div className="cart-product__delete">
        <button className="cart-product__delete-btn" onClick={() => dispatch(deleteProduct({ _id }))}>
          <img className='cart-product__delete-img' src={deleteImg} alt="delete image"/>
        </button>
      </div>
    </CheckoutProductStyle>
  )
}

export default CheckoutProduct
