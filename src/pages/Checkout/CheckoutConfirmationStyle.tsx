import styled from 'styled-components'
import { motion } from 'framer-motion'

const CheckoutConfirmationStyle = styled(motion.div)`
  width: 80vw;
  min-height: calc(100vh - 9rem); 
  display: flex; 
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: auto;
  padding: 2rem 0;
  .empty-cart{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
  .empty-cart__link,.cart__checkout-btn{
    padding: 1rem;
    color: whitesmoke;
    font-size: 2rem;
    font-family: 'Work Sans',sans-serif;
    background-color: var(--bg-dark);
    color: var(--cl-text);
    width: 100%;
    height: 100%;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default CheckoutConfirmationStyle
