import React from 'react'
import './Section1.css'
import schedulelogo from '../../../../public/Group 242.png'
import schedulelogo1 from '../../../../public/Group 175.png'
import schedulelogo2 from '../../../../public/Group 228.png'
const Section1 = () => {
  return (
        <div className='section-one'>
            <div className="sectio-one-All">
        <div className="grid-all">
            <div className="for-grid-sec">
            <div className="grid-card">
                <ul>
                    <li><p>Базовый курс кольпоскопии</p><p>подробнее</p></li>
                    <li><p>1</p></li>
                    <li><p>36 часов <br /> (6 дней)</p><p>40 000 ₽</p></li>
                </ul>
            </div>
            <div className="grid-card second">
                <ul>
                    <li><p>Современные аспекты клинической кольпоскопии</p><p>подробнее</p></li>
                    <li><p>2</p></li>
                    <li><p>36 часов <br /> (6 дней)</p><p>33 000 ₽</p></li>
                </ul>
            </div>
        </div>
        <div className="for-grid-sec sec">
            <div className="grid-card">
                <ul>
                    <li><p>Электрорадиоволновая хирургия в амбулаторной гинекологии</p><p>подробнее</p></li>
                    <li><p>3</p></li>
                    <li><p>18 часов <br /> (6 дней)</p><p>25 000 ₽</p></li>
                </ul>
            </div>
            <div className="grid-card second">
                <ul>
                    <li><p>Лазерная хирургия в амбулаторной гинекологии</p><p>подробнее</p></li>
                    <li><p>4</p></li>
                    <li><p>18 часов <br /> (6 дней)</p><p>15 000 ₽</p></li>
                </ul>
            </div>

            
        </div>
                            <div className="for-grid-sec">
                <div className="schedule-left">
                    <ul>
                        <li><img src={schedulelogo} alt="" /></li>
                    </ul>
                    <ul>
                        <li><p>Расписание занятий</p></li>
                        <li><button>Смотреть</button></li>
                    </ul>
                </div>
                <div className="schedule-right">
                    <ul>
                        <li><img src={schedulelogo1} alt="" /></li>
                        <li><p>форма обучения</p><p>очная</p></li>
                    </ul>
                    <ul>
                        <li><img src={schedulelogo2} alt="" /></li>
                        <li><p>аттестация</p><p>тестовый контроль</p></li>
                    </ul>
                </div>
            </div>
        </div>

      </div>
        </div>
      
  )
}

export default Section1
