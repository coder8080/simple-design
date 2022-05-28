import { FC } from 'react'
import Phone from '../../assets/phone.svg'
import './header.styles.scss'

const Header: FC = () => (
  <div className="header">
    <nav className="nav">
      <div className="logo-container">
        <a href="/" className="logo">
          <div className="row">
            <span className="logo1">Spimple</span>
            <span className="logo2">Design</span>
          </div>
          <span className="description">дизайн интерьера</span>
        </a>
      </div>
      <div className="menu">
        <ul className="nav-list">
          <li className="nav-item active">Главная</li>
          <li className="nav-item">Тест</li>
          <li className="nav-item">Каталог</li>
          <li className="nav-item">О нас</li>
          <li className="nav-item">Цены</li>
        </ul>
        <div className="phone-container">
          <div className="image-container">
            <img src={Phone} alt="phone" />
          </div>
          <div className="text-container">
            <span className="phone">+7 700 505 3000</span>
            <span className="description">с 9:00 до 18:00</span>
          </div>
        </div>
      </div>
    </nav>
  </div>
)

export default Header
