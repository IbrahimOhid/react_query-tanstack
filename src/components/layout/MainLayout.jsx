import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <div className='text-center'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout