import Link from "next/link"
import ArrowLink from "../ui/ArrowLink"

const Navbar = () => {
  return (
    <header className="border-b ">
      <nav className='mx-auto flex h-14 max-w-5xl items-center justify-between px-6 '>
        <ArrowLink href="/" name="Converter.io"/>
        <div className='flex items-center sm:flex gap-4 cursor-pointer'>
            <Link href="/document" className='no-underline text-sm hover:underline'>Documents</Link>
            <Link href="/tools" className='px-3 py-2 bg-primary text-white items-center hover:underline text-sm'>Try it now</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
