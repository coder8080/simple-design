import { useState, useEffect, useCallback } from 'react'
import { useSpring } from 'react-spring'

const springConfig = { tension: 300, friction: 10 }

const useBoop: (params: { rotation: number; duration: number }) => any = ({
  rotation,
  duration,
}) => {
  const [isBooped, setIsBooped] = useState(false)
  useEffect(() => {
    if (!isBooped) return
    const id = setTimeout(() => setIsBooped(false), duration)
    return () => window.clearTimeout(id)
  }, [isBooped, duration])
  const style = useSpring({
    transform: isBooped ? `rotate(${rotation}deg)` : 'rotate(0deg)',
    backfaceVisiblity: false,
    config: springConfig,
  })

  const trigger = useCallback(() => setIsBooped(true), [])
  return [style, trigger]
}

export default useBoop
