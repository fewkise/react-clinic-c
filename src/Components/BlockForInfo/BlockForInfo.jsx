import React from 'react'
import './BlockForInfo.css'
import doc_icon from '../../../public/Group 325.png'
const BlockForInfo = () => {
  return (
    <div>
      <div className="block-all">
        <p id='nazv'>Бланки, протоколы, рекомендации</p>
        <div className="for-grid-block">
            <div className="block-card">
                <ul>
                    <li><p>Кольпоскопическая классификация и терминология 2011 год (англ.)</p><div><img src={doc_icon} alt="" /></div></li>
                    <li><p>DOC <br /> <span>200kb</span></p></li>
                </ul>
            </div>
            <div className="block-card blue">
                <ul>
                    <li><p>Кольпоскопическая классификация и терминология 2011 год (англ.)</p><div><img src={doc_icon} alt="" /></div></li>
                    <li><p>DOC <br /> <span>200kb</span></p></li>
                </ul>
            </div>
            <div className="block-card green">
                <ul>
                    <li><p>Кольпоскопическая классификация и терминология 2011 год (англ.)</p><div><img src={doc_icon} alt="" /></div></li>
                    <li><p>DOC <br /> <span>200kb</span></p></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlockForInfo
