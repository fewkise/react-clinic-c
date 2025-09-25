import React from 'react'
import './Section3.css'
import arrow from '../../../../public/Rectangle 29.png'
import slide1Img from '../../../../public/Group 155.png'
import slide2Img from '../../../../public/Group 162.png'
import slide3Img from '../../../../public/Group 163.png'
const Section3 = () => {
  return (
    <div>
      <section className="news-all">
        <div className="news slider-container">
            <div className="top-slider-nav">
                <h6>новости</h6>
                <div className="slider-nav">

                </div>
            </div>
            <div className="slides-container">
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
                <div className="slide">
                    <img src={slide2Img} alt="" />
                    <p>Что такое кризис трех лет, и как преодолеть</p>
                    <ul>
                        <li><p>14.10.2021 </p> </li>
                        <li><p>Читать</p><img src={arrow} alt="" /></li>
                    </ul>
                </div>
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
            </div>
        </div>
      </section>
    </div>
  )
}

export default Section3
