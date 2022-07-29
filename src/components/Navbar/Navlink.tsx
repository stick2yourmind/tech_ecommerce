import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
interface NavlinkProps {
  to: string
  title: string
}

const Navlink:React.FC<NavlinkProps> = ({ to, title }) => {
  const location = useLocation()
  console.log('location: ', to)
  console.log(location.pathname === to)
  return (
    <>
    <Link to={to} className='navbarlist__link'>{title}</Link>
    {(location.pathname === to) &&
        <motion.div layoutId="navlink__underline" className='navlink__underline'></motion.div>
    }
    </>
  )
}

export default Navlink
