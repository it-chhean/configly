import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t text-muted'>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-start">
        <div>
          <p className='text-center sm:text-left'>
            Converter.io made by
            <a href="https://github.com/it-chhean" target='_blank' className='ml-1 hover:underline'>@it-chhean</a>
          </p>
        </div>
        <div className='flex gap-4'>
          <div>
            <a href="" className='hover:underline'>Docs</a>
          </div>
          <div>
            <a href="" className='hover:underline'>Helps</a>
          </div>
          <div>©2026 Converter</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer