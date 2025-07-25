import React from 'react'
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex item-center justify-between">
        
        <nav className='flex items-center gap-8 text-gray-500 font-semibold'>
        <Link className='text-bright-red font-semibold text-2xl' href="/">
          ST PIZZA
        </Link>
          <Link href={'/'}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
        </nav>

        <nav className='flex items-center gap-8 text-gray-500 font-semibold'>
          <Link href={'/login'}>
          Login
          </Link>

          <Link 
          href={'/register'}
          className='bg-red-500 rounded-full text-white px-8 py-2 '
          >
            Register
          </Link>
        </nav>

      </header>
  )
}
