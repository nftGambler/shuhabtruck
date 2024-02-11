"use client"

import React from 'react'
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavItems = () => {
    const pathname = usePathname();
  
    return (
      <ul className='md:flex-between flex w-full flex-col items-start gap-8 md:flex-row'>
        {headerLinks.map((links) => {
          const isActive = pathname === links.route;
  
          return (
            <li
              key={links.route}
              className={`${
                isActive && 'underline' 
              } flex-center  whitespace-nowrap text-lg ${
                ' text-black' 
              }`}
            >
              <Link href={links.route}>{links.label}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
  
  export default NavItems;