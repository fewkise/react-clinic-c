import React from 'react'
import './Section12.css'
import right_1 from '../../../../public/image-10-10-21-12-09-3 (2).png'
const Section12 = () => {
  return (
    <div>
      <section className="section-twelve">
        <div className="twelve-all">
            <div className="twelve-left">
                <div className="five-top">
                    <p>5</p>
                    <p>Условия реализации программы <br /> <span>(организационно-педагогические)</span></p>
                </div>
                <div className="five-bottom">
                    <p id='nazv'>Материально-технические условия</p>
                    <ul>
                        <li><p>1</p><p>Наименование аудитории <br /> <span>Учебный класс</span></p></li>
                        <li><p>2</p><p>Вид занятий <br /> <span>Лекции практические занятия</span></p></li>
                        <li><p>3</p><p>Наименование оборудования, программного обеспечения <br /> <span>Компьютер с плазменной панелью. Кольпоскоп.</span></p></li>
                    </ul>
                </div>
            </div>
            <div className="twelve-right">
                <img src={right_1} alt="" />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Section12
