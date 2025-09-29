import React from 'react'
import './ReviewsPage.css'
import Header from '../../Components/Header/Header'
import ReviewsMozaic from '../../Components/ReviewsMozaic/ReviewsMozaic'
import MainReviews from '../../Components/MainReviews/MainReviews'
import Section18 from '../../Components/MainReviews/Section18/Section18'
const ReviewsPage = () => {
  return (
    <div className='ReviewsSection'>
        <div className="rev-page">
            <Header/>
            <div className="mozaic-rev">
                <ReviewsMozaic/>
                <Section18/>
            </div>
            
        </div>
        <MainReviews/>
        
    </div>
  )
}

export default ReviewsPage
