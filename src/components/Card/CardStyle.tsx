import styled from 'styled-components'
import { motion } from 'framer-motion'

const CardStyle = styled(motion.div)`
  min-width: 25rem;
  justify-content: center;
  background-color: #fff;
  display: grid;
  grid-template-areas: "card__img"
                       "card__title"
                       "card_price"
                       "card__link";
  grid-template-columns: 20rem;
  grid-template-rows: 20rem 6rem 4rem 5rem;
  gap: 0;
  justify-items: center;
  align-items: center;
  border: 1px solid #e2e2e2;
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  padding-bottom: 1rem;
  .card__img{
    grid-area: card__img;
    width: 100%;
    max-height: 100%;
    object-fit: contain;
    user-select: none;
    pointer-events: none;
  }
  .card__title{
    grid-area: card__title;
    width: 100%;
    font-size: 1.6rem;
    font-family: 'Work Sans',sans-serif;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2; 
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .card_price{
    grid-area: card_price;
    font-size: 2.8rem;
    font-family: 'Work Sans',sans-serif;
  }
  .card__link{
    grid-area: card__link;
    font-size: 2.8rem;
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
export default CardStyle
