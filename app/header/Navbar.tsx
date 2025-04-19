import React from 'react'
import Link from './../../components/link/index';
import { Pages, Routes } from '@/constants/enums';
import { buttonVariants } from '@/components/ui/button';

const Navbar = () => {
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
  return (
    <nav className='flex justify-end flex-1'>
        <ul className='flex items-center w-full justify-around'>
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
    </nav>
  )
}

export default Navbar