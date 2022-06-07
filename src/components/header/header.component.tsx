import { FC } from 'react'
import Logo from '../logo/logo.component'
import Contact from '../contact/contact.component'
import './header.styles.scss'

const Header: FC = () => (
  <div className="header">
    <nav className="nav">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="menu">
        <ul className="nav-list">
          <li className="nav-item active">Главная</li>
          <li className="nav-item">Тест</li>
          <li className="nav-item">Каталог</li>
          <li className="nav-item">О нас</li>
          <li className="nav-item">Цены</li>
        </ul>
        <Contact />
      </div>
    </nav>
  </div>
)

export default Header
