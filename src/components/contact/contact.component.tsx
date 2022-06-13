import { FC } from 'react'
import { animated } from 'react-spring'
import useBoop from '../../hooks/useBoop'
import Phone from '../../assets/phone.svg'
import './contact.styles.scss'

const Contact: FC = () => {
  const [style, trigger] = useBoop({ rotation: 20, duration: 200 })
  return (
    <div className="contact-container" onMouseEnter={trigger}>
      <div className="image-container">
        <animated.img style={style} src={Phone} alt="phone" />
      </div>
      <div className="text-container">
        <span className="phone">+7 700 505 3000</span>
        <span className="description">с 9:00 до 18:00</span>
      </div>
    </div>
  )
}

export default Contact
