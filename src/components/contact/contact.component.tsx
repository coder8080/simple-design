import { FC } from 'react'
import Phone from '../../assets/phone.svg'
import './contact.styles.scss'

const Contact: FC = () => (
  <div className="contact-container">
    <div className="image-container">
      <img src={Phone} alt="phone" />
    </div>
    <div className="text-container">
      <span className="phone">+7 700 505 3000</span>
      <span className="description">с 9:00 до 18:00</span>
    </div>
  </div>
)

export default Contact
