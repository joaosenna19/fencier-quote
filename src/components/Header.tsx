"use client"

import React from 'react'
import Image from 'next/image'
import constructorLogo from "/icons/rio-fence.jpeg"
import Link from 'next/link'

function Header() {
  return (
<header className="flex items-center justify-between px-6 py-4 shadow">
        <Link className="flex items-center gap-2" href="/">
        <Image 
                className='w-24 h-24 p-2'
                src={constructorLogo} 
                alt='icon' 
            />
          <span className="text-lg font-semibold">Rio Fence Company</span>
        </Link>
        <nav>
          <ul className="flex items-center gap-4">
          </ul>
        </nav>
      </header>
  )
}

export default Header