import { FC } from 'react'
import Clock from '../../assets/clock.svg'
import Mark from '../../assets/mark.svg'
import Wallet from '../../assets/wallet.svg'
import Room1Small from '../../assets/room1-small.png'
import Pdf from '../../assets/pdf.svg'

import Drawing1Background from '../../assets/drawing1-background.png'
import Drawing1Main from '../../assets/drawing1-main.png'
import Drawing1Rotated from '../../assets/drawing1-rotated.png'

import Button from '../../components/button/button.component'
import './homepage.styles.scss'

const Homepage: FC = () => (
  <div className="homepage">
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
      <div className="steps-container">
        <ul className=" steps">
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
    <section className="section out-services">
      <h1 className="section-title h1">Наши услуги</h1>
      <div className="layout-container">
        <div className="text-container">
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
          <img
            src={Drawing1Main}
            alt="Drawing1-Main"
            className="drawing-main"
          />
          <img
            src={Drawing1Rotated}
            alt="Drawing1-Second-Page"
            className="drawing-rotated"
          />
        </div>
      </div>
    </section>
  </div>
)

export default Homepage