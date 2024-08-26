import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Product from './pages/product/Product'
import Contact from './pages/contact/Contact'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
  )
}

export default App
