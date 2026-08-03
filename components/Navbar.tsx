import { headers } from 'next/headers'
import React from 'react'

const Navbar = () => {
  return (
      <header className='border-b-[1px] border-stone-300 py-2'>
            <nav className='flex justify-around items-center'>
              <div>
                  <h2 className='text-xl font-base'>Convertor.io</h2>
              </div>
              <div className='flex items-center'>
                  <ul className='flex gap-4 mr-4 cursor-pointer'>
                    <li className='no-underline hover:underline'>Document</li>
                    <li className='no-underline hover:underline'>Price</li>
                  </ul>
                  <button className='px-4 py-2 bg-black text-white items-center hover:underline'> 
                    SignIn
                  </button>
              </div>
            </nav>
      </header>
  )
}

export default Navbar