import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import CoursePage from './Pages/CoursePage/CoursePage'
import MainPage from './Pages/MainPage/MainPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}> </Route>
        <Route path='/Course' element={<CoursePage/>}> </Route>
      </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
