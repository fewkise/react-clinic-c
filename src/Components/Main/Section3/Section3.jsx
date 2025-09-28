import React, { useRef } from 'react'
import './Section3.css'
import arrow from '../../../../public/Rectangle 29.png'
import slide1Img from '../../../../public/Group 155.png'
import slide2Img from '../../../../public/Group 162.png'
import slide3Img from '../../../../public/Group 163.png'
import arrowBtn from '../../../../public/Rectangle 294.png'
import arrowBtn2 from '../../../../public/Rectangle 293.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'



const Section3 = () => {
  // рефы для кастомной навигации
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);

  return (
    <section className="news-all">
      <div className="news slider-container">
        <div className="top-slider-nav">
          <h6>новости</h6>
          <div className="slider-nav">
            <button ref={prevRef} className="swiper-button-prev"><div><img src={arrowBtn} alt="" /></div></button>
            <button ref={nextRef} className="swiper-button-next"><div><img src={arrowBtn2} alt="" /></div></button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5} // меняй под нужное количество видимых слайдов
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          loop="true"
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          <SwiperSlide>
            <div className="slide">
              <div className="for-img">
                <img src={slide1Img} alt="" />
              </div>
              <p id='art-name'>Что такое кризис трех лет, и как преодолеть</p>
              <p>Обучение проводится в специализированном классе учебного центра с использованием мультимедийного оборудования и </p>
              <ul>
                <li><p>14.10.2021 </p> </li>
                <li><p>Читать</p><img src={arrow} alt="" /></li>
              </ul>
            </div>
          </SwiperSlide>

          
          <SwiperSlide>
            <div className="slide">
              <img src={slide2Img} alt="" />
              <p>Что такое кризис трех лет, и как преодолеть</p>
              <ul>
                <li><p>14.10.2021 </p> </li>
                <li><p>Читать</p><img src={arrow} alt="" /></li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <div className="for-img">
                <img src={slide3Img} alt="" />
              </div>
              <p>Что такое кризис трех лет, и как преодолеть</p>
              <p>Обучение проводится в специализированном классе учебного центра с использованием мультимедийного оборудования и </p>
              <ul>
                <li><p>14.10.2021 </p> </li>
                <li><p>Читать</p><img src={arrow} alt="" /></li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <div className="for-img">
                <img src={slide1Img} alt="" />
              </div>
              <p id='art-name'>Что такое кризис трех лет, и как преодолеть</p>
              <p>Обучение проводится в специализированном классе учебного центра с использованием мультимедийного оборудования и </p>
              <ul>
                <li><p>14.10.2021 </p> </li>
                <li><p>Читать</p><img src={arrow} alt="" /></li>
              </ul>
            </div>
          </SwiperSlide>

          
          <SwiperSlide>
            <div className="slide">
              <img src={slide2Img} alt="" />
              <p>Что такое кризис трех лет, и как преодолеть</p>
              <ul>
                <li><p>14.10.2021 </p> </li>
                <li><p>Читать</p><img src={arrow} alt="" /></li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <div className="for-img">
                <img src={slide3Img} alt="" />
              </div>
              <p>Что такое кризис трех лет, и как преодолеть</p>
              <p>Обучение проводится в специализированном классе учебного центра с использованием мультимедийного оборудования и </p>
              <ul>
                <li><p>14.10.2021 </p> </li>
                <li><p>Читать</p><img src={arrow} alt="" /></li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Section3