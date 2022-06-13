import { FC } from 'react'
import './button.styles.scss'

interface ButtonProps {
  children: string
  isLight?: boolean
}
const Button: FC<ButtonProps> = ({ children, isLight = false }) => (
  <button className={`btn clickable${isLight ? ' light' : ''}`}>
    {children}
  </button>
)

export default Button
