import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Buscador from '../components/Buscador';
import Cards from '../components/Cards';
import Detalles from '../components/Detalles';

const DetallesProducto = () => {
    const { categoria } = useParams();
    const [productos, setProductos] = useState([]);
    const [palabra, setPalabra] = useState();
    const [details, setDetails] = useState([])

    let cambiar = (palabra)=>{
        // console.log(palabra);
        setPalabra(palabra.toLowerCase());
    }

    let mostrar = (details)=>{
        console.log(details)
        setDetails(details)
    }
  
  useEffect(() =>{
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(respuesta => respuesta.json())
    .then(datos => setProductos(datos));
}, []);
  
  return (
    <>
        <div className='text-center'>
            <Buscador cambiar={(word) => cambiar(word)} />
            <div className='flex'>
                <div className='grid grid-cols-4 gap-4 w-[900px] mx-auto'>
                    <Cards productos={productos} palabra={palabra} mostrar={(details) => mostrar(details)} categoria={categoria}/>
                </div>
                <div className='mx-auto'>
                    {
                        details != null ? <Detalles detalles={details}/> : null
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default DetallesProducto