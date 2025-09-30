import React, { useState } from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import logoSaite from '../../../public/image 1(1).png'
import logo1 from '../../../public/Group 79.png'
import logo2 from '../../../public/Group 1(2).png'
import logo3 from '../../../public/Group 1(3).png'
import locationLogo from '../../../public/Group 240.png'

const Header = () => {
  const location = useLocation()
  const [menu, setMenu] = useState(location.pathname) // выделять пункт по текущему пути при загрузке

  // Функция для клика по пункту меню, чтобы обновить выбранный пункт
  const handleClick = (path) => {
    setMenu(path)
  }

  return (
    <div className="header-all">
      <ul>
          <Link to='/'><li><img src={logoSaite} alt="" /></li></Link>
          <li><p>Учебный Центр кольпоскопии доктора Петренко</p></li>
      </ul>
      <ul>
          <li onClick={() => handleClick('/')}>
            <Link to='/' style={{ textDecoration: 'none' }}>Главная</Link>
            {menu === '/' ? <hr className="animated-hr" /> : null}
          </li>
          <li onClick={() => handleClick('/Course')}>
            <Link to='/Course' style={{ textDecoration: 'none' }}>Курсы</Link>
            {menu === '/Course' ? <hr className="animated-hr" /> : null}
          </li>
          <li onClick={() => handleClick('/Courses')}>
            <Link to='/Courses' style={{ textDecoration: 'none' }}>Специалисты</Link>
            {menu === '/Courses' ? <hr className="animated-hr" /> : null}
          </li>
          <li onClick={() => handleClick('/Equipment')}>
            <Link to='/Equipment' style={{ textDecoration: 'none' }}>Оборудование</Link>
            {menu === '/Equipment' ? <hr className="animated-hr"/> : null}
          </li>
          <li onClick={() => handleClick('/Schedule')}>
            <Link to='/Schedule' style={{ textDecoration: 'none' }}>Расписание</Link>
            {menu === '/Schedule' ? <hr className="animated-hr" /> : null}
          </li>
          <li onClick={() => handleClick('/Feedback')}>
            <Link to='/Feedback' style={{ textDecoration: 'none' }}>Отзывы</Link>
            {menu === '/Feedback' ? <hr className="animated-hr" /> : null}
          </li>
          <li onClick={() => handleClick('/Gallery')}>
            <Link to='/Gallery' style={{ textDecoration: 'none' }}>Галерея</Link>
            {menu === '/Gallery' ? <hr className="animated-hr" /> : null}
          </li>
          <li onClick={() => handleClick('/Documents')}>
            <Link to='/Documents' style={{ textDecoration: 'none' }}>Документы</Link>
            {menu === '/Documents' ? <hr className="animated-hr" /> : null}
          </li>
          <li onClick={() => handleClick('/Clinic')}>
            <Link to='/Clinic' style={{ textDecoration: 'none' }}>Клиника</Link>
            {menu === '/Clinic' ? <hr className="animated-hr" /> : null}
          </li>
          <li onClick={() => handleClick('/Forum')}>
            <Link to='/Forum' style={{ textDecoration: 'none' }}>Форум</Link>
            {menu === '/Forum' ? <hr className="animated-hr" /> : null}
          </li>
          <li onClick={() => handleClick('/Info')}>
            <Link to='/Info' style={{ textDecoration: 'none' }}>Информация</Link>
            {menu === '/Info' ? <hr className="animated-hr" /> : null}
          </li>
      </ul>
      <ul>
          <li><p className='numberOne'>+7 861 201-22-03</p></li>
          <li><button>Заказать звонок</button></li>
          <li><a href=""><img src={logo1} alt="" /></a><a href=""><img src={logo2} alt="" /></a><a href=""><img src={logo3} alt="" /></a></li>
          <li><img src={locationLogo} alt="" /><p>г. Краснодар, <br />пр-т Чекистов, д. 42</p></li>
      </ul>
    </div>
  )
}

export default Header