import React from 'react'
import './Section4.css'
import main_photo from '../../../../public/image 624.png'
import also_photo1 from '../../../../public/image 66.png'
import also_photo2 from '../../../../public/image 67.png'
import also_photo3 from '../../../../public/image 68.png'
import also_photo4 from '../../../../public/image 69.png'
import also_photo5 from '../../../../public/image 70.png'
import arrowBtn from '../../../../public/Rectangle 394.png'
import arrowBtn2 from '../../../../public/Rectangle 396.png'
const Section4 = () => {
  return (
    <div>
      <section className="section-four">
        <div className="four-all">
            <div className="four-right">
                <p id='Nazv'>Оборудование центра</p>
                <p id='nazv-two'>Кольпоскоп leisegang <br /> 3mvc led usb</p>
                <div className="inside-four">
                    <ul>
                        <li><p>Страна <br /> <span>Германия</span></p></li>
                        <li><p>Освещенность ЛК <br /> <span>4000/6000</span></p></li>
                        <li><p>Фокусное расстояние мм <br /> <span>400</span></p></li>
                        <li><p>Диаметр рабочго поля мм <br /> <span>7,5 / 15 / 30</span></p></li>
                        <li><p>межзрачковое расстояние <br /> <span>58</span></p></li>
                    </ul>
                    <ul>
                        <li><p>Источник света <br /> <span>Светодиодная лампа</span></p></li>
                        <li><p>Вид кольпоскопа<br /> <span>Оптический</span></p></li>
                        <li><p>Увеличение мин макс <br /> <span>7,5 / 15 / 30</span></p></li>
                        <li><p>Увеличение мин макс <br /> <span>7,5 / 15 / 30</span></p></li>
                        <li><p>Тип штатива <br /> <span>прямой с региулируемой высоттой</span></p></li>
                    </ul>
                </div>
            </div>
            <div className="photo-container">
                <div className="main-photo">
                    <img src={main_photo} alt="" />
                </div>
                <div className="also-photos">
                    <img src={also_photo1} alt="" />
                    <img src={also_photo2} alt="" />
                    <img src={also_photo3} alt="" />
                    <img src={also_photo4} alt="" />
                    <img src={also_photo5} alt="" />
                    <div className="forBtns-four">
                        <button><img src={arrowBtn} alt="" /></button>
                        <button><img src={arrowBtn2} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Section4
