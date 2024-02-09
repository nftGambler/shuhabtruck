import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
        <header className='w-full border-b bg-custom-color'>
            <div className='wrapper flex items-center justify-between'>
                <Link href='/'>

                <Image 
                src="/assets/images/logo.webp"
                width={128}
                height={38}
                alt="Truck logo"

                />

                <h2 className='h3-bold text-white'>SAMEER TRUCKING INC</h2>

                </Link>


                <nav className='md:flex-between hidden w-full max-w-xs'>
                    <NavItems />
                </nav>

                <div className='flex w-32 justify-end gap-3'>
                    <MobileNav />

                </div>

            </div>
        </header>
  )
}

export default Header