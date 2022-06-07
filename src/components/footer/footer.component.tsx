import { FC } from 'react'
import Logo from '../logo/logo.component'
import Contact from '../contact/contact.component'
import './footer.styles.scss'

const Footer: FC = () => (
  <footer className="footer">
    <div className="info">
      <div className="group group-logo">
        <Logo />
      </div>
      <div className="group group-pages">
        <div className="group-container">
          <ul className="links">
            <li className="link">Главная</li>
            <li className="link">Тест</li>
            <li className="link">О нас</li>
            <li className="link">Цены</li>
          </ul>
        </div>
      </div>
      <div className="group group-info">
        <div className="group-container">
          <ul className="links">
            <li className="link">Политика конфиденциальности</li>
            <li className="link">Условия пользования</li>
          </ul>
        </div>
      </div>
      <div className="group group-contact">
        <div className="group-container">
          <Contact />
        </div>
      </div>
    </div>
    <div className="copyright">
      <p className="copyright-tex">Ⓒ 2022. Все права защищены.</p>
    </div>
  </footer>
)

export default Footer
