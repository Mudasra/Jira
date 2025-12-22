import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='flex h-full bg-gray-100 text-gray-900'>
        <SideBar/>
        <div className='flex flex-col flex-1'>
            <Header/>
            <main className='flex-1 overflow-auto p-4'>
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default AppLayout
