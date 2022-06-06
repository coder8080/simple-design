import { FC } from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSwiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

import RoomCard from '../room-card/room-card.component'
import GroupTitle from '../group-title/group-title.component'
import SwiperButton from '../swiper-button/swiper-button.component'
import './rooms-container.styles.scss'

export interface Room {
  title: string
  imageUrl: string
}

interface RoomsContainerProps {
  title: string
  rooms: Room[]
}

const RoomsContainer: FC<RoomsContainerProps> = ({ title, rooms }) => {
  return (
    <div className="rooms-container">
      <GroupTitle>{title}</GroupTitle>
      <Swiper
        slidesPerView={'auto'}
        breakpoints={{
          1000: {
            slidesPerView: 3,
            loop: false,
            allowTouchMove: false,
            grabCursor: false,
          },
        }}
        spaceBetween={40}
        grabCursor={true}
        loop={true}
      >
        {rooms.map((room, i) => (
          <SwiperSlide key={i}>
            <RoomCard {...room} />
          </SwiperSlide>
        ))}
        <SwiperButton type="next" />
        <SwiperButton type="prev" />
      </Swiper>
    </div>
  )
}

export default RoomsContainer
