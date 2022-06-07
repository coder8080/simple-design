import { FC } from 'react'
import { useState, useRef, MutableRefObject } from 'react'
import './question.styles.scss'

interface QuestionProps {
  title: string
  text: string
}

const Question: FC<QuestionProps> = ({ title, text }) => {
  const [isOpened, setIsOpened] = useState(false)
  const toggleIsOpened = () => setIsOpened((prev) => !prev)
  const contentRef = useRef() as MutableRefObject<HTMLInputElement>
  return (
    <div className={`question ${isOpened ? 'opened' : ''}`}>
      <div className="heading" onClick={toggleIsOpened}>
        <div className="button-container">
          <svg
            width="56"
            height="55"
            viewBox="0 0 56 55"
            xmlns="http://www.w3.org/2000/svg"
            className="plus"
          >
            <path d="M38.0625 25.7812H29.75V17.6172C29.75 17.3809 29.5531 17.1875 29.3125 17.1875H26.6875C26.4469 17.1875 26.25 17.3809 26.25 17.6172V25.7812H17.9375C17.6969 25.7812 17.5 25.9746 17.5 26.2109V28.7891C17.5 29.0254 17.6969 29.2188 17.9375 29.2188H26.25V37.3828C26.25 37.6191 26.4469 37.8125 26.6875 37.8125H29.3125C29.5531 37.8125 29.75 37.6191 29.75 37.3828V29.2188H38.0625C38.3031 29.2188 38.5 29.0254 38.5 28.7891V26.2109C38.5 25.9746 38.3031 25.7812 38.0625 25.7812Z" />
            <path d="M28 3.4375C14.4703 3.4375 3.5 14.2119 3.5 27.5C3.5 40.7881 14.4703 51.5625 28 51.5625C41.5297 51.5625 52.5 40.7881 52.5 27.5C52.5 14.2119 41.5297 3.4375 28 3.4375ZM28 47.4805C16.7672 47.4805 7.65625 38.5322 7.65625 27.5C7.65625 16.4678 16.7672 7.51953 28 7.51953C39.2328 7.51953 48.3438 16.4678 48.3438 27.5C48.3438 38.5322 39.2328 47.4805 28 47.4805Z" />
          </svg>
        </div>
        <div className="title-container">
          <h3 className="h3">{title}</h3>
        </div>
      </div>
      <div
        className="content"
        ref={contentRef}
        style={{ height: isOpened ? contentRef.current.scrollHeight : 0 }}
      >
        <p className="text h3">{text}</p>
      </div>
    </div>
  )
}

export default Question
