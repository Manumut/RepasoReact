import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Plantilla from './layout/Plantilla'
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
            <Route index element ={<Productos />}/>
            <Route path='/:categoria'></Route>
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
