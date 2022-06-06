import { FC } from 'react'
import Bag from '../../assets/bag.svg'
import './room-card.styles.scss'

interface RoomCardProps {
  imageUrl: string
  title: string
}

const RoomCard: FC<RoomCardProps> = ({ imageUrl, title }) => (
  <div className="room-card">
    <div className="image-container">
      <img src={imageUrl} alt="room" />
    </div>
    <div className="description-container">
      <span className="room-title">{title}</span>
      <div className="select-container">
        <img src={Bag} alt="Select" />
        Выбрать
      </div>
    </div>
  </div>
)

export default RoomCard
