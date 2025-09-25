import React from 'react'
import './Mozaic.css'
import mozaic1 from '../../../public/Rectangle 233.png'
import mozaic2 from '../../../public/Rectangle 201.png'
import mozaic3 from '../../../public/Rectangle 234.png'
const Mozaic = () => {
  return (
    <div className='mozaic-all'>
      <img src={mozaic1} alt="" />
      <div className="rowmozaic">
        <img src={mozaic2} alt="" />
        <div className="mozaic-three-column">
            <img src={mozaic3} alt="" />
            <div className="statistics">
                <p><span>>500</span> <br /> курсов проведено</p>
                <p> <span>1257</span> <br /> Дипломов выдано</p>

            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Mozaic
