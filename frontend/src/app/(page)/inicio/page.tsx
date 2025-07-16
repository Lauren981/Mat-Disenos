import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './inicio.scss';


export default function page() {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <p>En Mat Diseños expresa tu personalidad a travéz de la moda.</p>
                    <h1>!Diseña tu estilo único con nuestras prendas personalizadas!</h1>
                    <div className="botones">
                        <Link className='button' href=''>Ofertas</Link>
                        <Link className='button' href=''>Informacion</Link>
                    </div>
                </div>
                <div className="col">
                    <Image 
                    src='/ImagenInicio.png'
                    alt='Imagen de inicio'
                    width={3143}
                    height={2793}
                    className="imagen-inicio"
                    >
                    </Image>
                </div>
            </div>
        </div>
    </div>
  )
}
