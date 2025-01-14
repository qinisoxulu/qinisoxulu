'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gray-800">
          <Image src='/qiniso.jpg' alt='logo' width={60} height={60} className='rounded-full'/>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-800 transition duration-300">Home</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-800 transition duration-300">Blog</Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-800 transition duration-300">Projects</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800 transition duration-300">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition duration-300">Contact</Link>
          </nav>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600 hover:text-gray-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-100">
          <nav className="flex flex-col items-center py-4">
            <Link href="/" className="py-2 text-gray-600 hover:text-gray-800 transition duration-300">Home</Link>
            <Link href="/blog" className="py-2 text-gray-600 hover:text-gray-800 transition duration-300">Blog</Link>
            <Link href="/projects" className="py-2 text-gray-600 hover:text-gray-800 transition duration-300">Projects</Link>
            <Link href="/about" className="py-2 text-gray-600 hover:text-gray-800 transition duration-300">About</Link>
            <Link href="/contact" className="py-2 text-gray-600 hover:text-gray-800 transition duration-300">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

