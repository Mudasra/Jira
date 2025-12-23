import React from 'react'
import { NavLink } from 'react-router-dom'

const base = 
"block px-4 py-2 rounded text-sm font-medium hover:bg-gray-200"

const SideBar = () => {
  return (
    <aside className='w-52 border-r bg-white p-2'>
      <nav className='space-y-1'>
        <NavLink to={'/'} className={base} />
        Projects
      </nav>
    </aside>
  )
}

export default SideBar