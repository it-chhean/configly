import React from 'react'

const Footer = () => {
  return (
    <div className='border-t border-stone-300 text-muted'>
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
        <div>
          <p className='text-center sm:text-left'>
            Convertor.io made by
            <a href="https://github.com/it-chhean" className='ml-1 hover:underline'>@it-chhean</a>
          </p>
        </div>
        <div className='flex gap-4'>
          <div>
            <a href="" className='hover:underline'>Docs</a>
          </div>
          <div>
            <a href="" className='hover:underline'>Helps</a>
          </div>
          <div>©2026 Convertor</div>
        </div>
      </div>
    </div>
  )
}

export default Footer