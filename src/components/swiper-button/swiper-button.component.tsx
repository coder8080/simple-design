import { FC, useCallback } from 'react'
import { useSwiper } from 'swiper/react'
import './swiper-button.styles.scss'

interface SwiperButtonProps {
  type: 'next' | 'prev'
}

const SwiperButton: FC<SwiperButtonProps> = ({ type }) => {
  const swiper = useSwiper()
  const action = useCallback(
    () => (type === 'next' ? swiper.slideNext() : swiper.slidePrev()),
    [type, swiper]
  )
  return <div className={`swiper-button ${type}`} onClick={action}></div>
}

export default SwiperButton
