import Link from "next/link"
import ArrowLink from "../ui/ArrowLink"

const Navbar = () => {
  return (
    <header className="border-b ">
      <nav className='mx-auto flex h-14 max-w-5xl items-center justify-between px-6 '>
        <div>
        <ArrowLink href="/" name="Configly."/>
        </div>
        <div className='flex items-center sm:flex gap-6 cursor-pointer'>
            <Link href="/documents" className='no-underline text-sm hover:underline'>Docs</Link>
            <Link href="/tools" className='px-3 py-2 bg-primary text-white items-center hover:underline text-sm'>Get Started</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar