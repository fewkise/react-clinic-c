import React from 'react'
import './Section2.css'
import authorFace from '../../../../public/image 64.png'
const Section2 = () => {
  return (
    <div>
      <section className="author-all">
        <div className="author-container">
          <div className="autor-left">
            <ul>
              <li><p>Автор курса</p></li>
              <li><h5>ПЕТРЕНКО СЕРГЕЙ ИВАНОВИЧ</h5></li>
            </ul>
            <ul>
              <li><p>Стаж работы <span>27 лет</span></p></li>
              <li><p>Учредитель и руководитель ООО «Центр кольпоскопии и цервикальной патологии», врач акушер-гинеколог, преподаватель дополнительного профессиональонго образования.</p></li>
              <li><p>Автор российского атласа по кольпоскопии («Кольпоскопия. Атлас» Т.Н.Бебнева, С.И.Петренко Под редакцией В.Е.Радзинского).</p></li>
            </ul>
          </div>
          <img src={authorFace} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Section2
