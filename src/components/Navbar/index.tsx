import StyleNavbar from './StyleNavbar'

const Navbar = () => {
  return (
    <StyleNavbar>
      <ul className='navbarlist'>
        <li className='navbarlist__item'>
          <a href="" className='navbarlist__link'>Hardware PC</a>
        </li>
        <li className='navbarlist__item'>
          <a href="" className='navbarlist__link'>Notebook</a>
        </li>
        <li className='navbarlist__item'>
          <a href="" className='navbarlist__link'>Accesorios</a>
        </li>
        <li className='navbarlist__item'>
          <a href="" className='navbarlist__link'>Impresoras</a>
        </li>
      </ul>
    </StyleNavbar>
  )
}

export default Navbar
