import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import logoSaite from '../../../public/image 1(1).png'
import logo1 from '../../../public/Group 79.png'
import logo2 from '../../../public/Group 1(2).png'
import logo3 from '../../../public/Group 1(3).png'
import locationLogo from '../../../public/Group 240.png'
const Header = () => {
  return (
      <div className="header-all">
        <ul>
            <li><img src={logoSaite} alt="" /></li>
            <li><p>Учебный Центр кольпоскопии доктора Петренко</p></li>
        </ul>
        <ul>
            <Link to='/'> <li>Главная</li> </Link>
            <Link to='/Course'> <li>Курсы</li> </Link>
            <Link to='/Courses'> <li>Специалисты</li> </Link>
            <Link to='/Equipment'> <li>Оборудование</li> </Link>
            <Link to='/Schedule'> <li>Расписание</li> </Link>
            <Link to='/Feedback'> <li>Отзывы</li> </Link>
            <Link to='/Gallery'> <li>Галерея</li> </Link>
            <Link to='/Documents'> <li>Документы</li> </Link>
            <Link to='/Clinic'> <li>Клиника</li> </Link>
            <Link to='/Forum'> <li>Форум</li> </Link>
            <Link to='/Info'> <li>Информация</li> </Link>
        </ul>
        <ul>
            <li ><p className='numberOne'>+7 861 201-22-03</p></li>
            <li><button>Заказать звонок</button></li>
            <li><a href=""><img src={logo1} alt="" /></a><a href=""><img src={logo2} alt="" /></a><a href=""><img src={logo3} alt="" /></a></li>
            <li><img src={locationLogo} alt="" /><p>г. Краснодар, <br />пр-т Чекистов, д. 42</p></li>
            
        </ul>
      </div>
  )
}

export default Header
