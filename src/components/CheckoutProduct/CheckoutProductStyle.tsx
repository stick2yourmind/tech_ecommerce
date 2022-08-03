import styled from 'styled-components'
import { motion } from 'framer-motion'

const CheckoutProductStyle = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-bottom: 0.8rem;
  .cart-product__info{
    width: 40rem;
    padding:0 0.8rem;
    font-family: Roboto;
  }
  .cart-product__product-photo{
    width: 20rem;
    mix-blend-mode: multiply;
  }
  .cart-product__name{
    font-weight: 700;
  }
  .cart-product__subtotal{
    color: var(--color-text);
    font-weight: 600;
  }
  .cart-product__delete-btn{
    background-color: transparent;
  }
  .cart-product__delete-img{
    width: 2rem;
  }
  .cart-product__delete-img:hover{
    filter: invert(47%) sepia(35%) saturate(4299%) hue-rotate(338deg) brightness(99%) contrast(105%);
    transition: all 0.5s;
  }
  .cart-product__delete-img:active{
    transform: scale(0.95);
    transition: all 0.3s;
  }
`

export default CheckoutProductStyle
