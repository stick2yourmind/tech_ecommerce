import StyleNavbar from './StyleNavbar'
import Navlink from './Navlink'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

const Navbar = () => {
  const isAdmin = useSelector((state:RootState) => state.user.data?.role)
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
        {isAdmin === import.meta.env.VITE_ADMIN_ROLE &&
        <li className='navbarlist__item'>
          <Navlink to="/chat" title='Chat'/>
        </li>
        }
      </ul>
    </StyleNavbar>
  )
}

export default Navbar
