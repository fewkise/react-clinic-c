import React from 'react'
import './Section5.css'
import stars5 from  '../../../../public/Group 1 (34).png' 
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import arrowBtn from '../../../../public/Rectangle 294.png'
import arrowBtn2 from '../../../../public/Rectangle 293.png'
const Section5 = () => {
  const prevRef = React.useRef(null)
  const nextRef = React.useRef(null)

  return (
    <section className="section-five-all">
      <div className="five-all">
        <div className="top-slider-nav">
          <p id='Nazv-five'>Отзывы</p>
          <div className="slider-nav">
            <button ref={prevRef} className="swiper-button-prev">
              <div><img src={arrowBtn} alt="prev" /></div>
            </button>
            <button ref={nextRef} className="swiper-button-next">
              <div><img src={arrowBtn2} alt="next" /></div>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3} // количество видимых отзывов, меняй по необходимости
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          loop={true}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }}
        >
          <SwiperSlide>
            <div className="slide-five first">
              <ul>
                <li><p>Даниил</p><div><img src={stars5} alt="stars" /></div></li>
                <li><p>Найти хорошего гинеколога трудно.</p></li>
                <li><p>Читать весь отзыв</p><p>14.10.2021</p></li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-five">
              <ul>
                <li><p>Дан</p><div><img src={stars5} alt="stars" /></div></li>
                <li><p>Хочу поблагодарить Елену Павловну Петренко за ее профессионализм и доброту.</p></li>
                <li><p>Читать весь отзыв</p><p>14.10.2021</p></li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-five">
              <ul>
                <li><p>Константин Константин</p><div><img src={stars5} alt="stars" /></div></li>
                <li><p>Выражаю особую благодарность Петренко Сергею Ивановичу</p></li>
                <li><p>Читать весь отзыв</p><p>14.10.2021</p></li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-five">
              <ul>
                <li><p>Дан</p><div><img src={stars5} alt="stars" /></div></li>
                <li><p>Хочу поблагодарить Елену Павловну Петренко за ее профессионализм и доброту.</p></li>
                <li><p>Читать весь отзыв</p><p>14.10.2021</p></li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>        <div className="forBtn-five">
          <button>Оставить отзыв</button>
        </div>
      </div>
    </section>
  )
}

export default Section5
