import { FC } from 'react'

import CheckList from '../../assets/checklist.png'
import Button from '../../components/button/button.component'
import RoomsPreview from '../../components/rooms-preview/rooms-preview.component'
import Question from '../../components/question/question.component'

import Clock from '../../assets/clock.svg'
import Mark from '../../assets/mark.svg'
import Wallet from '../../assets/wallet.svg'
import Room1Small from '../../assets/room1-small.png'
import Pdf from '../../assets/pdf.svg'

import Drawing1Background from '../../assets/drawing1-background.png'
import Drawing1 from '../../assets/drawing-1.png'

import Drawing2Background from '../../assets/drawing2-background.png'
import Drawing2 from '../../assets/drawing-2.png'

import './homepage.styles.scss'

const Homepage: FC = () => (
  <div className="homepage page">
    <section className="section home">
      <div className="hero">
        <div className="content">
          <h1 className="h1">
            Дизайн-проект для вашей квартиры за 2 недели и 199 000 ₸
          </h1>
          <Button>Консультация</Button>
        </div>
        <div className="advantages">
          <div className="group">
            <div className="image-container">
              <img src={Clock} alt="Time" />
            </div>
            <div className="text-container">
              <span className="title h3">2 недели</span>
              <span className="description">Срок выполнения заказа</span>
            </div>
          </div>
          <div className="group">
            <div className="image-container">
              <img src={Mark} alt="Mark" />
            </div>
            <div className="text-container">
              <span className="title h3">Не важно</span>
              <span className="description">
                Сколько квадратов, цена - одна!
              </span>
            </div>
          </div>
          <div className="group">
            <div className="image-container">
              <img src={Wallet} alt="Wallet" />
            </div>
            <div className="text-container">
              <span className="title h3">Рассрочка</span>
              <span className="description">До 24 месяцев</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section how-it-works">
      <div className="title-container">
        <h1 className="h1 section-title">Как это работает?</h1>
      </div>
      <div className="steps-container section-padding">
        <ul className="steps">
          <li className="step">
            <div className="number-container">01</div>
            <div className="text-container">
              <h3 className="title h3">Выбор состава проекта</h3>
              <span className="description">
                Выберите состав вашего проекта: только планировка или
                дизайн-проект.
              </span>
            </div>
          </li>
          <li className="step">
            <div className="number-container">02</div>
            <div className="text-container">
              <h3 className="title h3">Настройка проекта</h3>
              <span className="description">
                Отметьте в корзине нужен ли вам профессиональный замер, подбор
                строительной бригады или точный просчет сметы.
              </span>
            </div>
          </li>
          <li className="step">
            <div className="number-container">03</div>
            <div className="text-container">
              <h3 className="title h3">Создание чертежей</h3>
              <span className="description">
                Наши дизайнеры спроектируют интерьер, подготовят чертежи.
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className="image-container">
        <img src={Room1Small} className="small-img" alt="Room" />
      </div>
    </section>
    <section className="section our-services">
      <h1 className="section-title h1">Наши услуги</h1>
      <div className="layout-container">
        <div className="text-container section-padding">
          <h2 className="h2 title">Планировка за 99 000 ₸</h2>
          <span className="subtitle h3">
            Срок выполнения: <span className="time">5 дней</span>
          </span>
          <p className="text h3">
            Мы разработаем для вас уникальное планировочное решение квартиры,
            которое будет соответствовать как нормам эргономики, так и вашим
            личным пожеланиям, а также подготовим чертеж для согласования
            планировки.
          </p>
          <div className="points-container">
            <ul className="points h3">
              <li className="point">2 варианта планировки + финальный</li>
              <li className="point">обмерный план</li>
              <li className="point">план демонтажа стен</li>
              <li className="point">план монтажа перегородок</li>
            </ul>
          </div>
          <div className="application-container">
            <Button>Оставить заявку</Button>
            <span className="view-example">
              <div className="icon-container">
                <img src={Pdf} alt="PDF" />
              </div>
              <span className="application-text">Посмотреть пример</span>
            </span>
          </div>
        </div>
        <div className="drawing-container">
          <img
            src={Drawing1Background}
            alt="Background"
            className="backround-img"
          />
          <img src={Drawing1} alt="Drawing 1" className="main-img" />
        </div>
      </div>
      <div className="design-container">
        <div className="text-container section-padding">
          <h2 className="h2 title">Дизайн-проект за 199 000 ₸</h2>
          <span className="subtitle h3">
            Срок выполнения: <span className="time">14 дней</span>
          </span>
          <p className="text h3">
            Разработаем планировочное решение вашей квартиры, далее на его
            основе мы подготовим альбом, состоящий из 12 чертежей, необходимых
            строителям для ремонта.
          </p>
          <div className="points-container">
            <ul className="points h3">
              <li className="point">2 варианта планировки + финальный</li>
              <li className="point">планы демонтажа и монтажа стен</li>
              <li className="point">розетки, выключатели, освещение</li>
              <li className="point">сантехника</li>
              <li className="point">план потолка</li>
              <li className="point">план пола и плинтусов</li>
              <li className="point">план дверей</li>
            </ul>
          </div>
          <div className="application-container">
            <Button>Оставить заявку</Button>
            <span className="view-example">
              <div className="icon-container">
                <img src={Pdf} alt="PDF" />
              </div>
              <span className="application-text">Посмотреть пример</span>
            </span>
          </div>
        </div>
        <div className="drawing-container">
          <img
            src={Drawing2Background}
            alt="Background"
            className="backround-img"
          />
          <img src={Drawing2} alt="Drawing 2" className="main-img" />
        </div>
      </div>
    </section>
    <section className="section planning-repair">
      <div className="image-container">
        <img src={CheckList} alt="checklist" className="checklist" />
      </div>
      <div className="text-container">
        <h2 className="h2 section-title">Планируете ремонт?</h2>
        <p className="text h3">
          Ответьте на несколько вопросов и получите бесплатный чек-лист по
          ремонту
        </p>
        <Button>Получить чек-лист</Button>
      </div>
    </section>
    <section className="section section-padding rooms-design">
      <h1 className="h1 section-title">Дизайн комнат</h1>
      <span className="h3 description">
        Выбирая дизайн комнаты, вы получаете смету со списком всех предметов в
        интерьере, названиями, артикулами, цветом стен и так далее.
      </span>
      <RoomsPreview />
      <Button>К каталогу комнат</Button>
    </section>
    <section className="section what-you-like">
      <div className="what-you-like-container">
        <div className="what-you-like-card">
          <h2 className="h2 section-title">
            Давайте определим, что вам нравится
          </h2>
          <p className="description h3">
            Пройдите короткий тест и мы покажем подходящие вам стилевые решения
          </p>
          <div className="button-container">
            <Button>Пройти тест</Button>
          </div>
        </div>
      </div>
    </section>
    <section className="section section-padding questions">
      <h1 className="h1 section-title">Часто задаваемые вопросы</h1>
      {Array.from(Array(4).keys()).map((key) => (
        <Question
          key={key}
          title="Вопрос"
          text="Lorem nostrud culpa laborum ut minim adipisicing magna amet aliqua quis est. Est cupidatat enim cillum aliqua adipisicing eu. Cillum occaecat qui consectetur cillum aliquip sint exercitation consequat irure. Lorem tempor nulla minim laborum labore officia tempor. Ullamco do ullamco et qui et aliquip nulla et. Pariatur pariatur magna commodo nisi cillum sunt exercitation reprehenderit eu sit aliqua culpa."
        ></Question>
      ))}
    </section>
  </div>
)

export default Homepage
