import { FC } from 'react'
import './button.styles.scss'

interface ButtonProps {
  children: string
}
const Button: FC<ButtonProps> = ({ children }) => (
  <button className="btn">{children}</button>
)

export default Button
