import React from 'react'
import Navbar from '../componentes/navbar/navbar'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}
