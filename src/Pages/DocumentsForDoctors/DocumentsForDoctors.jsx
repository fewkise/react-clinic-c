import React from 'react'
import './DocumentsForDoctors.css'
import Header from '../../Components/Header/Header'
import MozaicDFD from '../../Components/MozaicDFD/MozaicDFD'
import Section20 from '../../Components/MainDFD/Section20/Section20'
import Footer from '../../Components/Footer/Footer'
const DocumentsForDoctors = () => {
  return (
    <div className='sectionDFD'>
      <div className="dfd-page">
        <Header/>
        <div className="mozaic-dfd">
        <MozaicDFD/>
        <Section20/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default DocumentsForDoctors
