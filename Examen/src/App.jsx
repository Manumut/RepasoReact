import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Plantilla from './layout/Plantilla'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Detalles from './pages/DetalleProducto'
import Contacto from './pages/Contacto'
import DetalleProducto from './pages/DetalleProducto'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Plantilla />}>
            <Route index element ={<Home />}/>
            <Route path='/productos' element={<Productos />}/>
            <Route path='productos/:id' element={<DetalleProducto />}/>
            <Route path='contacto' element={<Contacto />}/>
            <Route path='*' element={<Error />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
