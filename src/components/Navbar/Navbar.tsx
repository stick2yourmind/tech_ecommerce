import StyleNavbar from './StyleNavbar'
import Navlink from './Navlink'

const Navbar = () => {
  return (
    <StyleNavbar>
      <ul className='navbarlist'>
        <li className='navbarlist__item'>
          <Navlink to="/category/hardware" title='Hardware'/>
        </li>
        <li className='navbarlist__item'>
          <Navlink to="/category/notebook" title='Notebook'/>
        </li>
        <li className='navbarlist__item'>
          <Navlink to="/category/power-supply" title='Fuentes'/>
        </li>
        <li className='navbarlist__item'>
          <Navlink to="/category/printer" title='Impresoras'/>
        </li>
      </ul>
    </StyleNavbar>
  )
}

export default Navbar
