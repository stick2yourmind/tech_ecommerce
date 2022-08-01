import styled from 'styled-components'
import { motion } from 'framer-motion'

const ProductStyle = styled(motion.div)`
  width: 90vw;
  max-width: 100rem;
  margin: auto;
  .product-detail{
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: flex-start;
    padding: 4rem 0;
  }
  .product-detail__info{
    width: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }
  .product-detail__img{
    width: 80%;
  }
  .product-detail__description{
    white-space: pre-wrap;       
    white-space: -moz-pre-wrap;  
    white-space: -pre-wrap;      
    white-space: -o-pre-wrap;  
    word-wrap: break-word;   
    padding: 2rem 4rem;   
    font-weight: 500; 
    font-family: 'Work Sans',sans-serif;
  }
  .product-detail__title{
    font-size: 2rem;
    font-weight: 700; 
    font-family: 'Work Sans',sans-serif;
  }
  .product-detail__price{
    padding: 1.5rem 0;
    color: teal;
    font-size: 2rem;
    font-family: 'Work Sans',sans-serif;
  }
  .product-detail__buy{
    width: 30%;
  }
`
export default ProductStyle
