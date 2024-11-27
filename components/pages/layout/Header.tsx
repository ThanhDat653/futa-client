'use client'
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import { MAIN_NAVIGATION } from '@/configs/navigation'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { SessionProvider } from 'next-auth/react'
import AuthControl from '@/components/auth/auth-control'

const Header = () => {
   const pathname = usePathname()

   return (
      <header className="fixed left-0 top-0 z-10 box-border flex h-[70px] w-screen flex-col items-start justify-between gap-4 bg-gradient-to-b from-sky-400 to-sky-600 px-4 pt-4 shadow shadow-[rgba(0,0,0,0.15)] lg:h-fit">
         <div className="container relative mx-auto flex w-full items-center justify-between 2xl:w-[1530px]">
            <div className="flex items-center lg:hidden">
               <Sheet>
                  <SheetTrigger asChild>
                     <Button
                        variant={'ghost'}
                        className="p-0 hover:bg-transparent"
                     >
                        <MenuIcon className="size-7 text-white" />
                     </Button>
                  </SheetTrigger>
                  <SheetContent side={'left'}>
                     <SheetHeader>
                        <SheetTitle className="flex justify-start">
                           <img
                              src="/logo_banner.svg"
                              alt=""
                              className="h-10"
                           />
                        </SheetTitle>
                        <SheetDescription></SheetDescription>
                        <ul className="flex flex-col items-start justify-start text-gray-700">
                           {MAIN_NAVIGATION.map((nav) => (
                              <li
                                 key={nav.href}
                                 className={cn(
                                    nav.href === pathname && 'text-sky-500',
                                    nav.href === '/'
                                       ? 'border-t-0'
                                       : 'border-t border-gray-100',
                                    'w-full text-left'
                                 )}
                              >
                                 <a
                                    className="block w-full py-3"
                                    href={nav.href}
                                 >
                                    {nav.name}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </SheetHeader>
                     <div className="grid gap-4 py-4"></div>
                  </SheetContent>
               </Sheet>
            </div>
            <Link
               className="flex h-full flex-1 items-center justify-center"
               href={'/'}
            >
               <img
                  src="/logo_banner.svg"
                  alt=""
                  className="h-10"
                  tabIndex={0}
               />
            </Link>
            <SessionProvider>
               <AuthControl />
            </SessionProvider>
         </div>
         <div className="container mx-auto hidden w-full items-center justify-center lg:flex">
            {MAIN_NAVIGATION.map((nav) => (
               <div
                  key={nav.href}
                  className={cn(
                     'w-fit border-white text-left text-white lg:hover:border-b-2',
                     {
                        'border-b-2 border-white font-semibold':
                           nav.href === pathname,
                     }
                  )}
               >
                  <a className="block w-full px-5 py-2" href={nav.href}>
                     {nav.name}
                  </a>
               </div>
            ))}
         </div>
      </header>
   )
}

export default Header
