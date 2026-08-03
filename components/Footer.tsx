import React from 'react'

const Footer = () => {
  return (
    <div className='border-t border-stone-300'>
      <div className='max-w-6xl mx-auto flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center px-4 sm:px-6 lg:px-8 py-6 text-subtitle text-muted'>
        <div>
          <p className='text-center sm:text-left'>
            Convertor.io made by
            <a href="https://github.com/it-chhean" className='ml-1 hover:underline'>@it-chhean</a>
          </p>
        </div>
        <div className='flex gap-4'>
          <div>
            <a href="">Docs</a>
          </div>
          <div>
            <a href="">Helps</a>
          </div>
          <div>©2026 Convertor</div>
        </div>
      </div>
    </div>
  )
}

export default Footer