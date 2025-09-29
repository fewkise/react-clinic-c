import React from 'react'
import './CoursesAllPage.css'
import Header from '../../Components/Header/Header'
import MainCoursesAll from '../../Components/MainCoursesAll/MainCoursesAll'
import Footer from '../../Components/Footer/Footer'
const CoursesAllPage = () => {
  return (
    <div className='courses-all-sec'>
      <div className="courses-all">
        <Header/>
        <MainCoursesAll/>
      </div>
            <Footer/>
    </div>
  )
}

export default CoursesAllPage
