import styled from 'styled-components'
import { motion } from 'framer-motion'

const CategoryStyle = styled(motion.div)`
  width: 90vw;
  min-height: 50rem;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
  margin: auto;
  .category__items{
    width: 100%;
    margin: auto auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;  
}
`
export default CategoryStyle
