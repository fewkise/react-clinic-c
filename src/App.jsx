import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import CoursePage from './Pages/CoursePage/CoursePage'
import MainPage from './Pages/MainPage/MainPage'
import DocumentsPage from './Pages/DocumentsPage/DocumentsPage'
import InformationPage from './Pages/InformationPage/InformationPage'
import ReviewsPage from './Pages/ReviewsPage/ReviewsPage'
import DocumentsForDoctors from './Pages/DocumentsForDoctors/DocumentsForDoctors'
import CoursesAllPage from './Pages/CoursesAllPage/CoursesAllPage'
import GalleryPage from './Pages/GalleryPage/GalleryPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}> </Route>
        <Route path='/Course' element={<CoursePage/>}> </Route>
        <Route path='/Documents' element={<DocumentsPage/>}> </Route>
        <Route path='/Info' element={<InformationPage/>}> </Route>
        <Route path='/Feedback' element={<ReviewsPage/>}> </Route>
        <Route path='/Clinic' element={<DocumentsForDoctors/>}> </Route>
        <Route path='/Courses' element={<CoursesAllPage/>}> </Route>
        <Route path='/Gallery' element={<GalleryPage/>}> </Route>
      </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
