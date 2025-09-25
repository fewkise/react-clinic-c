import React from 'react'
import './ModalWindow.css'
import imgLogo1 from '../../../public/Group 147.png'
import imgLogo2 from '../../../public/Rectangle 253.png'
import imgLogo3 from '../../../public/Group 225.png'
import imgLogo4 from '../../../public/Rectangle 254.png'
import imgLogo5 from '../../../public/Rectangle 255.png'
import imgMozaic from '../../../public/Rectangle 232.png'
const ModalWindow = () => {
  return (
    <>
    <div className="all-modal">
        <img src={imgMozaic} alt="" />
    <div className="modal-window-all">

        <h2>Запишитесь на курс</h2>
        <p>получите индивидуальные условия обучения</p>
        <ul>
            <li><form action=""><input type="text" placeholder='Представьтесь' /><div><img src={imgLogo1} alt="" /></div></form></li>
            <li><form action=""><input type="text" placeholder='Ваш Email' /><div><img src={imgLogo2} alt="" /></div></form></li>
            <li><form action=""><input type="text" placeholder='Ваш Телефон' /><div><img src={imgLogo3} alt="" /></div></form></li>
            <li><form action=""><input type="text" placeholder='Выберите курс' /><div><img src={imgLogo4} alt="" /></div></form></li>
            <li><form action=""><input type="text" placeholder='Дата начала' /><div><img src={imgLogo5} alt="" /></div></form></li>
        </ul>
        <button>Записаться</button>
    </div>
    </div>
    
    
    </>
  )
}

export default ModalWindow
