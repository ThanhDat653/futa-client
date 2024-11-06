/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { BookingProvider } from '@/context/booking-context'
import { cn } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const Layout = ({
   children,
   departure,
   destination,
}: {
   children: React.ReactNode
   departure: React.ReactNode
   destination: React.ReactNode
}) => {
   const searchParams = useSearchParams()
   const { fromTime, type, toTime } = Object.fromEntries(searchParams)
   const [isDeparture, setIsDeparture] = useState<boolean>(true)

   const handleOnClick = (opt: boolean) => {
      setIsDeparture(opt)
   }

   return (
      <div className="px-4 sm:px-0 md:col-span-3 lg:col-span-2">
         {children}

         <div className="mt-2 flex w-full rounded shadow">
            <button
               disabled={isDeparture}
               className={cn(
                  'flex-1 cursor-pointer border-0 bg-white py-2 text-center text-gray-700',
                  isDeparture && 'border-b-2 border-sky-600'
               )}
               onClick={() => handleOnClick(true)}
            >
               Chuyến đi {fromTime}
            </button>
            {type === 'roundTrip' && (
               <button
                  disabled={!isDeparture}
                  className={cn(
                     'flex-1 cursor-pointer border-0 bg-white py-2 text-center text-gray-700',
                     !isDeparture && 'border-b-2 border-sky-600'
                  )}
                  onClick={() => handleOnClick(false)}
               >
                  Chuyến về {toTime}
               </button>
            )}
         </div>

         <BookingProvider>
            {isDeparture ? departure : destination}
         </BookingProvider>
      </div>
   )
}

export default Layout
