import React from 'react'
import './MozaicCourse.css'
import mozaic1 from '../../../public/Group 1 (35).png'
const MozaicCourse = () => {
  return (
    <div className='mozaic-course-all'>
        <img src={mozaic1} alt="" />
        <div className="numbers-container">
            <div className="num-card">
                <p>Общая характеристика программы</p>
                <p>1</p>
            </div>
            <div className="num-card">
                <p>Учебно-тематический план</p>
                <p>2</p>
            </div>
            <div className="num-card">
                <p>Содержание материала программы</p>
                <p>3</p>
            </div>
            <div className="num-card">
                <p>Оценка качества освоения программы</p>
                <p>4</p>
            </div>
            <div className="num-card">
                <p>Кадровые условия</p>
                <p>5</p>
            </div>
            <div className="num-card">
                <p>Условия реализации программы</p>
                <p>6</p>
            </div>
            <div className="num-card">
                <p>Материально-технические условия</p>
                <p>7</p>
            </div>
            <div className="num-card">
                <p>Учебно-методическое    и информационное обеспечение программы</p>
                <p>8</p>
            </div>
            <div className="num-card">
                <p>Галерея</p>
                <p>9</p>
            </div>

        </div>
    </div>
  )
}

export default MozaicCourse
