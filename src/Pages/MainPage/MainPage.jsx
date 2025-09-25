import React from 'react'
import './MainPage.css'
import Header from '../../Components/Header/Header'
import ModalWindow from '../../Components/ModalWindow/ModalWindow'
import Mozaic from '../../Components/Mozaic/Mozaic'
import Main from '../../Components/Main/Main'
const MainPage = () => {
  return (
    <div className='MainSection'>
        <div className='main-page'>
        <Header/>
        <ModalWindow/>
        <Mozaic/>
        </div>
        <div >
            <Main/>
        </div>
    </div>

  )
}

export default MainPage
