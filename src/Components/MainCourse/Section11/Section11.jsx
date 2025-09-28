import React from 'react'
import './Section11.css'
import job_photo1 from '../../../../public/image 64(1).png'
import job_photo2 from '../../../../public/Group 289.png'
import job_photo3 from '../../../../public/Group 291.png'
const Section11 = () => {
  return (
    <div>
      <section className="section-eleven">
        <div className="eleven-all">
            <div className="third-sec">
                <div className="third-top">
                    <p>3</p>
                    <p>Оценка качества освоения программы</p>
                </div>
                <div className="third-bottom">
                    <ul>
                        <li><p>формы аттестации, оценочные и методические материалы</p></li>
                        <li><p>Оценка качества освоения программ осуществляется аттестационной комиссией в виде тестирования, собеседования в устной форме по основным разделам программы.</p></li>
                    </ul>
                    <ul>
                        <li><p>По результатам аттестации выдается удостоверение о повышении квалификации.</p></li>
                        <li><p>Слушатель считается аттестованным, если ответил на восемьдесят процентов вопросов по всем разделам программы, выносимым на тестирование, собеседования.</p></li>
                    </ul>
                </div>
            </div>
            <div className="four-sec">
                <div className="third-top">
                    <p>4</p>
                    <p>Кадровые условия</p>
                </div>
                <div className="four-bottom">
                    <div className="four-bottom-left">
                        <div className="four-inside">
                        <div className="nazvs">
                            <p>Составитель программы:</p>
                        </div>
                            <div><img src={job_photo1}alt="" /></div>
                            <div className="four-inside-bottom">
                                <div><img src={job_photo2} alt="" /></div>
                                <ul>
                                    <li>ПЕТРЕНКО СЕРГЕЙ ИВАНОВИЧ </li>
                                    <li><p>Учредитель и руководитель ООО «Центр кольпоскопии и цервикальной патологии», врач акушер-гинеколог, преподаватель дополнительного профессиональонго образования.</p><p>Автор российского атласа по кольпоскопии («Кольпоскопия. Атлас» Т.Н.Бебнева, С.И.Петренко Под редакцией В.Е.Радзинского).</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="four-bottom-right">
                        <div className="nazvs">
                            <p>Преподаватели:</p>
                        </div>
                        <ul>
                            <li><p>ПЕТРЕНКО СЕРГЕЙ <br /> ИВАНОВИЧ </p><div><img src={job_photo3} alt="" /></div></li>
                            <li><p>врач акушер-гинеколог, руководитель учебного центра</p></li>
                        </ul>
                        <ul>
                            <li><p>Прынь Дмитрий  <br /> Валерьевич </p><div><img src={job_photo3} alt="" /></div></li>
                            <li><p>врач акушер-гинеколог, руководитель учебного центра</p></li>
                        </ul>
                        <ul>
                            <li><p>Злобина Анна  <br /> Владимировна  </p><div><img src={job_photo3} alt="" /></div></li>
                            <li><p>врач акушер-гинеколог, руководитель учебного центра</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Section11
