
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from  "./page/home"
import Login from './page/login'

function App() {


  return (
    <>
<Routes>
  <Route path='/' element={<Home />}  />
  <Route path='/login'  element={<Login />} />
</Routes>
    </>
  )
}

export default App
