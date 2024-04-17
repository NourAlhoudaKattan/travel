import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Component/pages/HomePage'
import About from './Component/About/About'
import TravelWithUs from './Component/pages/TravelWithUs'
import Footer from './Component/Footer/Footer'




function App() {
  return (
    <>
     <Routes>
         <Route path='/'        element={<HomePage/>}></Route>
         <Route path='/About'   element={<About/>}></Route>
         <Route path='/Service' element={<TravelWithUs/>}></Route>
     </Routes>
       <Footer/> 
    </>
  )
}

export default App
