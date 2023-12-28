'use client';

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Image from "next/image"

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex flex-1 text-neutral-300 w-full flex-col items-start gap-5 md:gap-4 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        
        return (
          <li
            key={link.route}
            className={`${
              isActive && 'bg-indigo-500'
            } w-full rounded-2xl flex-start px-4 p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route} className='flex flex-1 items-center gap-4 md:gap-0'>
              <Image 
            src={link.src} width={38} height={38}
            alt="Evently logo" 
              /> {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems