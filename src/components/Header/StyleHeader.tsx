import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyleHeader = styled(motion.header)`
  min-width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4.5rem;
  background-color: var(--bg-dark);
  position: relative;
  #navbar-logo{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  #navbar-logo__img{
    height: 90%;
  }
  #navbar-logo__title{
    font-family: 'Syncopate', sans-serif;
    padding:0 1rem;
  }
  #navbar-sign-checkout, #navbar-sign-checkout__sign{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #navbar-sign-checkout{
    gap: 1rem;
  }
  .navbar-sign-checkout__img{
    height: 70%;
    filter: invert(100%) sepia(0%) saturate(7427%) hue-rotate(23deg) brightness(118%) contrast(118%);
  }
  #navbar-sign-checkout__counter{
    align-self: baseline;
    background: whitesmoke;
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    color: black;
    margin-top: 0.3rem;
    font-family: 'Roboto',sans-serif;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #navbar-sign-checkout__signtext,#navbar-sign-checkout__signtext--name{
    color: var(--cl-text);
    font-size: 1.4rem;
    font-family: Roboto;
    font-weight: 300;
  }
  #navbar-sign-checkout__signtext--name{
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 10rem;
  }
  #navbar-sign-checkout__btn{
    height: 100%;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #rgb-light{
    position: absolute;
    left:0;
    bottom: -0.3rem;
    background: linear-gradient( 45deg,rgba(255,0,0,1) 0%,rgba(255,0,255,1) 18%,
    rgba(0,0,255,1) 30%,rgba(0,240,255,1) 45%,rgba(0,255,0,1) 63%,
    rgba(255,255,0,1) 80%,rgba(255,120,0,1) 90%,rgba(255,0,0,1) 100% );
  background-size: auto;
  background-size: 400% 400%;
  animation: rgbLight 20s linear infinite;
  height: 0.3rem;
  min-width: 100%;
  }
  @keyframes rgbLight {
    0% {
      background-position:400% 0%
    }
    100% {
      background-position:0% 400%
    }
}
`
export default StyleHeader
