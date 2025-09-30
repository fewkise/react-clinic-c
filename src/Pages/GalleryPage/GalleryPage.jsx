import React from 'react'
import './GalleryPage.css'
import Header from '../../Components/Header/Header'
import MainGallery from '../../Components/MainGallery/MainGallery'
import Footer from '../../Components/Footer/Footer'
const GalleryPage = () => {
  return (
    <div className='gallery-all-sec'>
      <div className="gallery-all">
        <Header/>
        <MainGallery/>
      </div>
      <Footer/>
    </div>
  )
}

export default GalleryPage
