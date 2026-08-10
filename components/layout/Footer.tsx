import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t text-muted '>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-start">
        <div>
          <p className='text-center sm:text-left'>
            Converter.io made by
            <a href="https://github.com/it-chhean" target='_blank' rel='noopener noreferrer' className='ml-1 text-primary underline'>@it-chhean</a>
          </p>
        </div>
        <div className='flex gap-4 flex-wrap items-center justify-center sm:justify-start'>
          <Link href="/documents#about-link" className='hover:underline'>Docs</Link>
          <Link href="/#faq-link" className='hover:underline'>FAQs</Link>
          {/* <Link href="/documents#conversation-link" className='hover:underline'>Supported Formats</Link> */}
          <Link href="/documents#privacy-link" className='hover:underline'>Privacy</Link>
          <span>©2026 Converter</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer