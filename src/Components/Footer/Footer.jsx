import React from 'react'
import './Footer.css'
import input_one from '../../../public/Group 213.png'
import input_two from '../../../public/Rectangle 331.png'
import social_icon1 from '../../../public/Group 143 (1).png'
import social_icon2 from '../../../public/Group 171.png'
import social_icon3 from '../../../public/Group 172.png'
import call_img from '../../../public/Group 174.png'
import message_img from '../../../public/Ellipse 73.png'
import logo_img from '../../../public/image 1(1).png'
import location_logo from '../../../public/Group 238.png'
import partner1 from '../../../public/image 13 (1).png'
import partner2 from '../../../public/image 62.png'
const Footer = () => {
  return (
    <div>
      <section className="footer-all">
        <footer>
          <div className="footer-top">
            <div className="forText">
              <p id='nazv-footer'>Задать вопрос</p>
              <p>получите индивидуальные условия обучения</p>
            </div>
            <div className="for-inputs">
              <form action=""><input type="text" placeholder='Представьтесь' /><div><img src={input_one} alt="" /></div></form>
              <form action=""><input type="text" placeholder='Ваш Email' /><div><img src={input_two} alt="" /></div></form>
              <form action=""><input type="checkbox" /> <p>Отправляя заявку, вы принимаете условия политики конфиденциальности</p></form>
            </div>
            <div className="for-input">
              <form action=""><input type="text" placeholder='Напишите ваш вопрос' /></form>
              <button>Отправить вопрос</button>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="logo-info">
              <ul>
                <li><img src={logo_img} alt="" /></li>
                <li><p>Учебный Центр кольпоскопии доктора Петренко</p></li>
                <li>ООО «Центр кольпоскопии и цервикальной патологии»</li>
                <li>Условия конфиденциальности предоставления и защиты информации</li>
              </ul>
            </div>
            <div className="rows-footer-container">
              <div className="blacksini">
                <ul>
                  <li><p>+7 861 201-22-03</p></li>
                  <li><div><img src={location_logo} alt="" /></div><p>г. Краснодар, пр-т Чекистов, д. 42</p></li>
                  <li><a href=""><img src={social_icon1} alt="" /></a><a href=""><img src={social_icon2} alt="" /></a><a href=""><img src={social_icon3} alt="" /></a></li>
                </ul>
                <ul>
                  <li><p>Главная</p><p>Курсы</p><p>Специалисты </p></li>
                  <li><p>Оборудование</p><p>Отзывы</p><p>Галерея  </p></li>
                  <li><p>Гладокументы</p><p>Клиника</p><p>Информация </p></li>
                  <li><div><div><img src={call_img} alt="" /><p>Заказать звонок</p></div></div><div><div><img src={message_img} alt="" /></div><p>форум </p></div></li>
                </ul>
              </div>
              <div className="blue">
                <div className="blue-inside">
                  <p>Наши партнеры</p>
                  <img src={partner1} alt="" />
                  <img src={partner2} alt="" />
                </div>

              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  )
}

export default Footer
