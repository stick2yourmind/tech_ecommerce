import StyleNavbar from './StyleNavbar'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <StyleNavbar>
      <ul className='navbarlist'>
        <li className='navbarlist__item'>
          <NavLink to="/category/hardware"
            className={ navData => navData.isActive ? 'navbarlist__link--current' : 'navbarlist__link' }>
              Hardware
          </NavLink>
        </li>
        <li className='navbarlist__item'>
          <NavLink to="category/notebook"
            className={ navData => navData.isActive ? 'navbarlist__link--current' : 'navbarlist__link' }>
              Notebook
          </NavLink>
        </li>
        <li className='navbarlist__item'>
          <NavLink to="category/accessory"
            className={ navData => navData.isActive ? 'navbarlist__link--current' : 'navbarlist__link' }>
              Accesorios
          </NavLink>
        </li>
        <li className='navbarlist__item'>
          <NavLink to="category/printer"
            className={ navData => navData.isActive ? 'navbarlist__link--current' : 'navbarlist__link' }>
              Impresoras
          </NavLink>
        </li>
      </ul>
    </StyleNavbar>
  )
}

export default Navbar
