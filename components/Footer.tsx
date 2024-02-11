import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='border-t bg-footer-custom'>
      <div className='flex-center wrapper  flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
          {/* <Image 
          src="/assets/images/logo.webp"
          alt='logo'
          width={70}
          height={38}
          /> */}
        </Link>

        <p className='text-black'>
          SAMEER TRUCKING INC. 2024. All Rights reserved.
        </p>
        
      </div>
    </footer>
  )
}

export default Footer