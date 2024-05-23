import React from 'react'
import Image from 'next/image'
import constructorLogo from "/icons/constructor-logo.png"

function Header() {
  return (
    <div className='h-36 bg-red-400 flex' >
        <div>
            <Image 
                className='w-24 h-24 p-2'
                src={constructorLogo} 
                alt='icon' 
            />
        </div>
        <div className='justify-self-center w-full'>
            <p className='justify-self-center'>
                Your Company Name
            </p>
        </div>
    </div>
  )
}

export default Header