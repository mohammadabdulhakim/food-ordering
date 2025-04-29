import Link from '@/components/link'
import { buttonVariants } from '@/components/ui/button'
import { Routes } from '@/constants/enums'
import { ArrowRightCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='section-gap'>
        <div className='container grid grid-cols-1 md:grid-cols-2'>
            <div className='md:py-12'>
              <h1 className='text-4xl font-semibold'>
                Dive into sauce
              </h1>
              <p className='text-accent my-4'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ad ullam. Numquam dolorum exercitationem ratione.
              </p>
              <div className='flex items-center gap-4'>
              <Link href={Routes.MENU} 
                className={`${buttonVariants({size: "lg"})} !px-4 !rounded-full uppercase`}
              >
                Order Now
                <ArrowRightCircle className={`!w-5 !h-5`} />
              </Link>

              <Link href={Routes.ABOUT} 
                className={`flex text-black hover:text-primary items-center gap-2`}
              >
                Learn More
                <ArrowRightCircle className={`!w-5 !h-5`} />
              </Link>
              </div>
            </div>
            <div className='relative hidden md:block'>
                <Image src={'/images/hero.png'} fill alt='logo' loading='eager' priority className='object-contain' />
            </div>
        </div>
    </section>
  )
}

export default Hero