import React from 'react'
import './Section17.css'
import globus_icon from '../../../../public/Group 347.png'
const Section17 = () => {
  return (
    <div>
      <section className="section-seventeen">
        <div className="seventeen-all">
            <p id='nazv'>Полезные ссылки</p>
            <div className="seventeen-grid">
                <div className="sev-card">
                    <p>International Federation of Cervical Pathology and Colposcopy (IFCPC)</p>
                    <div><img src={globus_icon} alt="" /></div>
                </div>
                <div className="sev-card">
                    <p>American Society for Colposcopy and Cervical Pathology</p>
                    <div><img src={globus_icon} alt="" /></div>
                </div>
                <div className="sev-card">
                    <p>British Society of Colposcopy and Cervical Pathology</p>
                    <div><img src={globus_icon} alt="" /></div>
                </div>
                                <div className="sev-card">
                    <p>German Society of Cervical Pathology and Colposcopy</p>
                    <div><img src={globus_icon} alt="" /></div>
                </div>
                <div className="sev-card">
                    <p>La Société Française de Colposcopie et de Pathologie Cervico-Vaginale (SFCPCV)</p>
                    <div><img src={globus_icon} alt="" /></div>
                </div>
                <div className="sev-card">
                    <p>European Federation For Colposcopy</p>
                    <div><img src={globus_icon} alt="" /></div>
                </div>
                <div className="sev-card">
                    <p>Программа «cervix uteri»</p>
                    <div><img src={globus_icon} alt="" /></div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Section17
