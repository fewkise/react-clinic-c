import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import CoursePage from './Pages/CoursePage/CoursePage'
import MainPage from './Pages/MainPage/MainPage'
import DocumentsPage from './Pages/DocumentsPage/DocumentsPage'
import InformationPage from './Pages/InformationPage/InformationPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}> </Route>
        <Route path='/Course' element={<CoursePage/>}> </Route>
        <Route path='/Documents' element={<DocumentsPage/>}> </Route>
        <Route path='/Info' element={<InformationPage/>}> </Route>
      </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
