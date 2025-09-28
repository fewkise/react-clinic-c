import React from 'react'
import './DocumentsPage.css'
import Header from '../../Components/Header/Header'
import imgSec from '../../../public/Group 1 (37).png'
import DocumentsHeaderSec from '../../Components/DocumentsHeaderSec/DocumentsHeaderSec'
import MainDocuments from '../../Components/MainDocuments/MainDocuments'
import Section15 from '../../Components/MainDocuments/Section15/Section15'
const DocumentsPage = () => {
  return (
    <div className='documents-page-all'>
        <div className="documentSectionTop">
            <Header/>
            <div className="documentSection">
                <div className="docs">
                <div><img src={imgSec} alt="" /></div>
                <DocumentsHeaderSec/>
                </div>
                <Section15/>
            </div>
        </div>
        <MainDocuments/>
    </div>
  )
}

export default DocumentsPage
