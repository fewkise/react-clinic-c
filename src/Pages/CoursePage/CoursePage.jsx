import React from 'react'
import './CoursePage.css'
import Header from '../../Components/Header/Header'
import ModalWindowTwo from '../../Components/ModalWindowTwo/ModalWindowTwo'
import MozaicCourse from '../../Components/MozaicCourse/MozaicCourse'
import MainCourse from '../../Components/MainCourse/MainCourse'
const CoursePage = () => {
  return (
    <div className='course-page-all'>
      <div className='courseSection'>
          <Header/>
          <div className="course-page">
          <ModalWindowTwo/>
          <MozaicCourse/>
        </div>
      </div>
      <div>
            <MainCourse/>
      </div>
    </div>

  )
}

export default CoursePage
