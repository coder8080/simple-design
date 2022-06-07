import { FC, useState } from 'react'
import Logo from '../logo/logo.component'
import Contact from '../contact/contact.component'
import Menu from '../../assets/menu.svg'
import Cross from '../../assets/cross.svg'
import './header.styles.scss'

const Header: FC = () => {
  const [isOpened, setIsOpened] = useState(false)
  const toggleMenu = () => setIsOpened((prev) => !prev)
  return (
    <div className="header">
      <nav className="nav">
        <div className="logo-container">
          <Logo />
        </div>
        <div className={`menu ${isOpened ? 'opened' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item active">Главная</li>
            <li className="nav-item">Тест</li>
            <li className="nav-item">Каталог</li>
            <li className="nav-item">О нас</li>
            <li className="nav-item">Цены</li>
          </ul>
          <Contact />
          <img
            src={Cross}
            alt="Close menu"
            className="close-menu"
            onClick={toggleMenu}
          />
        </div>
        <div className="open-menu" onClick={toggleMenu}>
          <img src={Menu} alt="Open menu" />
        </div>
      </nav>
    </div>
  )
}

export default Header
