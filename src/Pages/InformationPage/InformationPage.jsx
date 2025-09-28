import React from 'react'
import './InformationPage.css'
import Header from '../../Components/Header/Header'
import photo1 from '../../../public/Group 1 (38).png'
import photo2 from '../../../public/image 6411.png'
import BlockForInfo from '../../Components/BlockForInfo/BlockForInfo'
import MainInformation from '../../Components/MainInformation/MainInformation'
const InformationPage = () => {
  return (
    <div className='information-page-all'>
        <div className="info-sec-top">
            <Header/>
            <div className="for-photos-and-block">
                <div className="for-photos">
                    <img src={photo1} alt="" />
                    <div><img src={photo2} alt="" /></div>
                </div>
                <BlockForInfo/>
            </div>

        </div>
        <MainInformation/>
    </div>
  )
}

export default InformationPage
