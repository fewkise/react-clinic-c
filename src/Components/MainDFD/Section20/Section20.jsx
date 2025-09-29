import React from 'react'
import './Section20.css'
import arrowBtn2 from '../../../../public/Rectangle 293.png'
import doc_icon from '../../../../public/Group 325.png'
import doc_1 from '../../../../public/image 66 (2).png'
import doc_2 from '../../../../public/image 67 (1).png'
import doc_3 from '../../../../public/image 68 (1).png'
const Section20 = () => {
  return (
    <div className='twenty-all'>
      <section className="section-twenty">
        <div className="card-dfd">
            <p>Общая информация</p>
            <div className='forimg'><img src={arrowBtn2} alt="" /></div>
        </div>
        <div className="card-dfd">
            <p>Положение о структурном образовательном подразделении</p>
            <div className='forimg'><img src={arrowBtn2} alt="" /></div>
        </div>
        <div className="card-dfd">
            <p>Положение о структурном образовательном подразделении</p>
            <div className='forimg'><img src={arrowBtn2} alt="" /></div>
        </div>
        <div className="card-dfd">
            <p>Положение о приеме на обучение, отчислении и восстановлении обучающихся</p>
            <div className='forimg'><img src={arrowBtn2} alt="" /></div>
        </div>
        <div className="card-dfd">
            <p>Положения о персональных данных</p>
            <div className='forimg'><img src={arrowBtn2} alt="" /></div>
        </div>
        <div className="card-dfd">
            <p>Правила оказания платных  образовательных услуг</p>
            <div className='forimg'><img src={arrowBtn2} alt="" /></div>
        </div>
      </section>
      <div className="for-grid-block">
                        <div className="block-card">
                            <ul>
                                <li><p>Заявление на прохождение обучения</p><div><img src={doc_icon} alt="" /></div></li>
                                <li><p>DOC <br /> <span>200kb</span></p></li>
                            </ul>
                        </div>
                        <div className="block-card blue">
                            <ul>
                                <li><p>Согласие на обработку персональный данных</p><div><img src={doc_icon} alt="" /></div></li>
                                <li><p>DOC <br /> <span>200kb</span></p></li>
                            </ul>
                        </div>
                        <div className="block-card green">
                            <ul>
                                <li><p>Договор оказания платных образовательных услуг</p><div><img src={doc_icon} alt="" /></div></li>
                                <li><p>DOC <br /> <span>200kb</span></p></li>
                            </ul>
                        </div>
        </div>
        <div className="documents">
            <p>ЛИЦЕНЗИЯ</p>
            <p>на осуществление образовательной деятельности</p>
            <div className="documents-three">
                <div><img src={doc_1} alt="" /></div>
                <div><img src={doc_2} alt="" /></div>
                <div><img src={doc_3} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default Section20
