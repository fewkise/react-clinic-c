import React from 'react'
import './DocumentsHeaderSec.css'
import mozaic1 from '../../../public/image 64 (3).png'
const DocumentsHeaderSec = () => {
  return (
    <div className='mozaic-course-all'>
            <img src={mozaic1} alt="" />
            <div className="numbers-container">
                <div className="num-card">
                    <p>Общая характеристика программы</p>
                </div>
                <div className="num-card">
                    <p>Положение о структурном образовательном подразделении</p>
                </div>
                <div className="num-card">
                    <p>Правила внутреннего распорядка обучающихся</p>
                </div>
                <div className="num-card">
                    <p>Положение о приеме на обучение, отчислении и восстановлении обучающихся</p>
                </div>
                <div className="num-card">
                    <p>Положения о персональных данных</p>
                </div>
                <div className="num-card">
                    <p>Правила оказания платных  образовательных услуг</p>
                </div>
            </div>
  
        </div>
  )
}

export default DocumentsHeaderSec
