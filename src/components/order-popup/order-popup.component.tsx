import { FC } from 'react'
import RoomStyle from '../room-style/room-style.component'
import Button from '../button/button.component'
import CheckMark from '../../assets/checkmark.svg'
import Plus from '../../assets/plus.svg'
import './order-popup.styles.scss'

interface OrderPopupProps {
  isOpened: boolean
  close: () => void
}

const OrderPopup: FC<OrderPopupProps> = ({ isOpened, close }) => (
  <div className={`order-popup-container${isOpened ? ' opened' : ''}`}>
    <div className={`order-popup`}>
      <div className="order-description">
        <section className="order-section order-items">
          <h2 className="h2 section-title">Ваш заказ:</h2>
          <ul className="items-list">
            <li className="item">
              <div className="heading">
                <div className="checkbox">
                  <img src={CheckMark} alt="checkmark" />
                </div>
                <span className="h3 item-title">Планировка</span>
                <span className="h3 price">99 000 тг</span>
              </div>
              <ul className="description-items">
                <li className="description-item">
                  2 варианта планировки + финальный
                </li>
                <li className="description-item">план демонтажа стен</li>
                <li className="description-item">план монтажа перегородок</li>
              </ul>
            </li>
            <li className="item">
              <div className="heading">
                <div className="checkbox">
                  <img src={CheckMark} alt="checkmark" />
                </div>
                <span className="h3 item-title">Дизайн-проект</span>
                <span className="h3 price">199 000 тг</span>
              </div>
              <ul className="description-items">
                <li className="description-item">
                  2 варианта планировки + финальный
                </li>
                <li className="description-item">
                  планы демонтажа и монтажа стен
                </li>
                <li className="description-item">
                  розетки, выключатели, освещение
                </li>
                <li className="description-item">сантехника</li>
                <li className="description-item">план потолка</li>
                <li className="description-item">план пола и плинтусов</li>
                <li className="description-item">план дверей</li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="order-section other-services">
          <h2 className="h2 section-title">Дополнительные услуги</h2>
          <ul className="items-list">
            <li className="item">
              <div className="heading">
                <div className="checkbox">
                  <img src={CheckMark} alt="checkmark" />
                </div>
                <span className="h3 item-title">
                  Тендер строительных бригад
                </span>
              </div>
              <p className="description">+ 49 000 тг</p>
            </li>
            <li className="item">
              <div className="heading">
                <div className="checkbox">
                  <img src={CheckMark} alt="checkmark" />
                </div>
                <span className="h3 item-title">Составление сметы</span>
              </div>
              <p className="description">+ 49 000 тг</p>
            </li>
            <li className="item">
              <div className="heading">
                <div className="checkbox">
                  <img src={CheckMark} alt="checkmark" />
                </div>
                <span className="h3 item-title">Печать альбома</span>
              </div>
              <p className="description">+ 19 000 тг</p>
            </li>
          </ul>
        </section>
        <section className="ordered-styles order-section">
          <h2 className="h2 section-title">Стили</h2>
          <div className="styles-container">
            <RoomStyle roomTitle="Гостиная" styleName="Акварель" />
            <RoomStyle roomTitle="Спальня" styleName="Нурл Су" />
            <RoomStyle roomTitle="Санузел" styleName="Акварель" />
          </div>
        </section>
      </div>
      <div className="order-checkout">
        <div className="order-card">
          <h3 className="h3 card-title">Ваш заказ:</h3>
          <ul className="order-items">
            <li className="item">
              <div className="checkbox">
                <img src={CheckMark} alt="Checkbox" />
              </div>
              <div className="text-container">
                <span className="title">Замеры*</span>
                <span className="price">19 000 тг</span>
              </div>
            </li>
            <li className="item text-container">
              <span className="title">Планировка</span>
              <span className="price">199 000 тг</span>
            </li>
            <li className="item text-container">
              <span className="title">Выбранные комнаты</span>
              <span className="price">100 000 тг</span>
            </li>
            <li className="item text-container">
              <span className="title">Тендер строительных бригад</span>
              <span className="price">49 000 тг</span>
            </li>
          </ul>
          <div className="total">
            <span className="title">Итого:</span>
            <span className="price">367 000 тг</span>
          </div>
          <div className="buttons">
            <Button>Оставить заявку</Button>
            <Button isLight={true}>Оплатить 367 000 тг</Button>
          </div>
          <div className="offer-note">
            Нажимая на кнопку “Оплатить” вы подтверждаете свое согласие с
            <span className="offer"> офертой</span>
          </div>
        </div>
        <div className="order-note">
          <p>*Наш специалист выезжает на обьект для проведения замера.</p>
          <p>
            Если вы хотите замерить квартиру самостоятельно, откажитесь от этой
            услуги, а мы предоставим вам необходимые инструкции.
          </p>
        </div>
      </div>
    </div>
    <div className="close-container" onClick={close}>
      <span className="close-text h3">Закрыть</span>
      <img src={Plus} alt="Close" className="close-icon" />
    </div>
  </div>
)

export default OrderPopup
