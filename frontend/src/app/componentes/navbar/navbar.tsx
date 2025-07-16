import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaUserCircle, FaCartPlus } from 'react-icons/fa'
import './navbar.scss'


export default function Navbar() {
  return (
    <nav>
      <div className="">
        <Image
          src="/logo1.png"
          alt="Logo"
          width={2250}
          height={712}
          className="logo"
          >
        </Image>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link className='link' href="/">Inicio</Link>
          </li>
          <span className='Divisor'> | </span>
          <li>
            <Link className='link' href="/about">Categorias</Link>
          </li>
          <span className='Divisor'> | </span>
          <li>
            <Link className='link' href="/services">Productos</Link>
          </li>
          <span className='Divisor'> | </span>
          <li>
            <Link className='link' href="/contact">Contacto</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <ul>
          <li>
              <Link className='icon' href="/cart">
                  <FaCartPlus />
              </Link>
          </li>
          <li>
          <Link className='icon' href="/user">
              <FaUserCircle/>
          </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}


