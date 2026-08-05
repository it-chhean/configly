import { headers } from 'next/headers'
import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav className='mx-auto flex h-22 max-w-5xl items-center justify-between px-6'>
        <div>
          <p className='text-lg font-normal'>Converter.io</p>
        </div>
        <div className='flex items-center '>
          <ul className='hidden sm:flex gap-4 mr-4 text-sm cursor-pointer'>
            <a href='#' className='no-underline hover:underline'>Document</a>
            <a href='#' className='no-underline hover:underline'>Price</a>
          </ul>
          <button className='px-3 py-2 bg-black text-white items-center hover:underline text-sm '>
            Sign In
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar