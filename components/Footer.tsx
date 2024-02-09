import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='border-t bg-custom-color '>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
          <Image 
          src="/assets/images/logo.webp"
          alt='logo'
          width={70}
          height={38}
          />
        </Link>

        <p className='text-white'>
          2010 Sameer Trucking. All Rights reserved.
        </p>
        
      </div>
    </footer>
  )
}

export default Footer