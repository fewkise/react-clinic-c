import React from 'react'
import './Section16.css'
import doc_icon from '../../../../public/Group 325.png'
const Section16 = () => {
  return (
    <div>
            <div className="block-all-two">
                <p></p>
              <div className="for-grid-block">
                  <div className="block-card">
                      <ul>
                          <li><p>Европейские стандарты лечения CIN</p><div><img src={doc_icon} alt="" /></div></li>
                          <li><p>DOC <br /> <span>200kb</span></p></li>
                      </ul>
                  </div>
                  <div className="block-card blue">
                      <ul>
                          <li><p>Протокол кольпоскопии</p><div><img src={doc_icon} alt="" /></div></li>
                          <li><p>DOC <br /> <span>200kb</span></p></li>
                      </ul>
                  </div>
                  <div className="block-card green">
                      <ul>
                          <li><p>Протокол электрохирургического лечения</p><div><img src={doc_icon} alt="" /></div></li>
                          <li><p>DOC <br /> <span>200kb</span></p></li>
                      </ul>
                  </div>
                  <div className="block-card green">
                      <ul>
                          <li><p>Протокол электрохирургического лечения</p><div><img src={doc_icon} alt="" /></div></li>
                          <li><p>DOC <br /> <span>200kb</span></p></li>
                      </ul>
                  </div>
              </div>
            </div>
    </div>
  )
}

export default Section16
