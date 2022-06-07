import { FC } from 'react'
import './group-title.styles.scss'

interface GroupTitleProps {
  children: string
}

const GroupTitle: FC<GroupTitleProps> = ({ children }) => (
  <div className="group-title">
    <span className="text">{children}</span>
    <div className="line"></div>
  </div>
)

export default GroupTitle
