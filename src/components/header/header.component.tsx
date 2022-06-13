import { FC, useState } from 'react'
import { animated } from 'react-spring'
import useBoop from '../../hooks/useBoop'
import Logo from '../logo/logo.component'
import Contact from '../contact/contact.component'
import Menu from '../../assets/menu.svg'
import Cross from '../../assets/cross.svg'
import './header.styles.scss'

const Header: FC = () => {
  const [isOpened, setIsOpened] = useState(false)
  const toggleMenu = () => setIsOpened((prev) => !prev)
  const [crossStyle, trigger] = useBoop({ rotation: 20, duration: 200 })
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
          <div className="phone-wrapper">
            <Contact />
          </div>
          <animated.img
            style={crossStyle}
            src={Cross}
            alt="Close menu"
            className="close-menu"
            onClick={toggleMenu}
            onMouseEnter={trigger}
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
