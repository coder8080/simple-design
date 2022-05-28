import { FC } from 'react'
import Clock from '../../assets/clock.svg'
import Mark from '../../assets/mark.svg'
import Wallet from '../../assets/wallet.svg'
import Room1 from '../../assets/room1.png'
import Room1Small from '../../assets/room1-small.png'
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
  </div>
)

export default Homepage
