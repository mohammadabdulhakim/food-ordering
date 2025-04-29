"use client";

import React, { useEffect, useState } from 'react'
import Link from './../../components/link/index';
import { Pages, Routes } from '@/constants/enums';
import { buttonVariants } from '@/components/ui/button';
import { Button } from '@/components/ui/button';
import { Menu, XIcon } from 'lucide-react';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const navLinks = [
        {
            id: crypto.randomUUID(),
            title: "Menu",
            href: Routes.MENU
        },
        {
            id: crypto.randomUUID(),
            title: "About",
            href: Routes.ABOUT
        },
        {
            id: crypto.randomUUID(),
            title: "Contact",
            href: Routes.CONTACT
        },
        {
            id: crypto.randomUUID(),
            title: "Login",
            href: `${Routes.AUTH}/${Pages.LOGIN}`
        },
    ]

    useEffect(() => {
        console.log(`Now the nav is ${showNav}`)
        
    }, [showNav]);
  return (
    <nav className='flex justify-end flex-1 z-50'>
        <Button 
            variant='secondary'
            className='hover:cursor-pointer lg:hidden z-10'
            onClick={()=> setShowNav(!showNav)}
            size={'sm'}
        >
            {
                showNav
                ? <XIcon />
                : <Menu />
            }
        </Button>
        {
            <ul className={`${showNav? "right-0":"-right-full"} flex items-center lg:w-full lg:h-full justify-around lg:static lg:flex-row flex-col fixed h-screen w-screen md:w-1/2 backdrop-blur-xs top-0`}>
                {
                    navLinks.map(link=>(
                        <li key={link.id} className=''>
                            <Link href={`/${link.href}`} className={`${
                            link.title == "Login"? 
                                `${buttonVariants({size: 'lg'})} !px-8 !rounded-full`
                                : "hover:mb-0.5"
                            } 
                            font-mono hover:font-semibold`}>
                                {link.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        }
    </nav>
  )
}

export default Navbar