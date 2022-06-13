import { FC } from 'react'
import Plus from '../../assets/plus.svg'
import './room-style.styles.scss'

interface RoomStyleProps {
  roomTitle: string
  styleName: string
}

const RoomStyle: FC<RoomStyleProps> = ({ roomTitle, styleName }) => (
  <div className="room-style">
    <div className="text-container">
      <span className="room-style-title">{roomTitle}:</span>
      <span className="room-style-style">{styleName}</span>
    </div>
    <div className="remove-container clickable">
      <img className="remove" src={Plus} alt="Remove" />
    </div>
  </div>
)

export default RoomStyle
