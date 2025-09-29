import React from 'react'
import './ReviewsMozaic.css'
import mozaic_1 from '../../../public/Group 2 (13).png'
import mozaic_2 from '../../../public/image 6114.png'
const ReviewsMozaic = () => {
  return (
    <div className='mozaic-all-rev'>
        <div><img src={mozaic_1} alt="" /></div>
        <div className='for-mzc'><img src={mozaic_2} alt="" /> <button>Оставить отзыв</button></div> 
    </div>
  )
}

export default ReviewsMozaic
