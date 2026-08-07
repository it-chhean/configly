import Link from "next/link"
import ArrowLink from "../ui/ArrowLink"

const Navbar = () => {
  return (
    <header className="border-b ">
      <nav className='mx-auto flex h-14 max-w-5xl items-center justify-between px-6 '>
        <ArrowLink href="/" name="Converter.io"/>
        <div className='flex items-center sm:flex gap-4 text-sm cursor-pointer'>
            <Link href="/document" className='no-underline hover:underline'>Documents</Link>
            {/* <a href='#' className='no-underline hover:underline'>Price</a> */}
          <button className='px-3 py-2 hidden sm:flex bg-black text-white items-center hover:underline text-sm '>
            Try it now
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar