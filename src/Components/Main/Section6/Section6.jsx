import React from 'react'
import './Section6.css'
import galleryPhoto_1 from  '../../../../public/image-10-10-21-12-09-2.png' 
import galleryPhoto_2 from  '../../../../public/image-10-10-21-12-09-3.png' 
import galleryPhoto_3 from  '../../../../public/image-10-10-21-12-09-13.png' 
import galleryPhoto_4 from  '../../../../public/image-10-10-21-12-09-6.png' 
import galleryPhoto_5 from  '../../../../public/image-10-10-21-12-09-6 (1).png' 
import galleryPhoto_6 from  '../../../../public/image-10-10-21-12-09-13 (1).png' 
import galleryPhoto_7 from  '../../../../public/image-10-10-21-12-09-3 (1).png' 
import galleryPhoto_8 from  '../../../../public/image-10-10-21-12-09-2 (1).png' 
const Section6 = () => {
  return (
    <div>
      <section className="section-six-all">
        <div className="gallery">
            <div className="slider-nav">
                <p>Галерея</p>
            </div>
            <div className="photos-top">
                <img src={galleryPhoto_1} alt="" />
                <img src={galleryPhoto_2} alt="" />
                <img src={galleryPhoto_3} alt="" />
                <img src={galleryPhoto_4} alt="" />
            </div>
            <div className="photos-bottom">
                <img src={galleryPhoto_5} alt="" />
                <img src={galleryPhoto_6} alt="" />
                <img src={galleryPhoto_7} alt="" />
                <img src={galleryPhoto_8} alt="" />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Section6
