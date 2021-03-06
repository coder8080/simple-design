import { FC } from 'react'
import RoomsContainer from '../rooms-container/rooms-container.components'
import ROOMS_DATA from './rooms-data'
import './rooms-preview.styles.scss'

const RoomsPreview: FC = () => (
  <div className="rooms-preview">
    {Object.entries(ROOMS_DATA).map(([key, group]) => (
      <RoomsContainer key={key} {...group} />
    ))}
  </div>
)

export default RoomsPreview
