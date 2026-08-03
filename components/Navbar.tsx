import { headers } from 'next/headers'
import React from 'react'

const Navbar = () => {
  return (
    <header className='border-b border-stone-300'>
      <nav className='max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3'>
        <div>
          <h2 className='text-lg font-base'>Convertor.io</h2>
        </div>
        <div className='flex items-center '>
          <ul className='hidden sm:flex gap-4 mr-4 cursor-pointer'>
            <a href='#' className='no-underline hover:underline'>Document</a>
            <a href='#' className='no-underline hover:underline'>Price</a>
          </ul>
          <button className='px-3 sm:px-4 py-2 bg-black text-white items-center hover:underline text-sm sm:text-base'>
            Sign In
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar