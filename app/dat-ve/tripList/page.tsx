/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import DepartureList from './departure/page'
import DestinationList from './destination/page'
import { BookingProvider, useBooking } from '@/context/booking-context'
import { cn, formatDateToYYYYMMDD } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type ParamsType = {
   fromTime: string
   toTime: string
   type: string
   from: string
   to: string
   ticketCount: string
   timeInDay: string
   floorNo: string
   vehicleType: string
}

const TripList = () => {
   const searchParams = useSearchParams()
   const params: ParamsType = {
      from: searchParams.get('from') || '',
      to: searchParams.get('to') || '',
      fromTime: searchParams.get('fromTime') || '',
      toTime: searchParams.get('toTime') || '',
      ticketCount: searchParams.get('ticketCount') || '',
      timeInDay: searchParams.get('timeInDay') || '',
      floorNo: searchParams.get('floorNo') || '',
      vehicleType: searchParams.get('vehicleType') || '',
      type: searchParams.get('type') || '',
   }

   const { currentTripType, handleSelectTripType } = useBooking()

   return (
      <div className="px-4 sm:px-0 md:col-span-3 lg:col-span-2">
         {/* <div className="w-full">
            <h3 className="text-lg font-medium">
               {schedule?.regionFrom.name} - {schedule?.regionTo.name} (
               {schedule?.trips.length})
            </h3>
         </div> */}

         <div className="mt-2 flex w-full rounded uppercase shadow">
            <button
               disabled={currentTripType === 'departure'}
               className={cn(
                  'flex-1 cursor-pointer border-0 bg-white py-2 text-center text-gray-700',
                  currentTripType === 'departure' && 'border-b-2 border-sky-600'
               )}
               onClick={() => handleSelectTripType('departure')}
            >
               Chuyến đi {params.fromTime}
            </button>
            {params.type === 'roundTrip' && (
               <button
                  disabled={currentTripType === 'destination'}
                  className={cn(
                     'flex-1 cursor-pointer border-0 bg-white py-2 text-center text-gray-700',
                     currentTripType === 'destination' &&
                        'border-b-2 border-sky-600'
                  )}
                  onClick={() => handleSelectTripType('destination')}
               >
                  Chuyến về {params.toTime}
               </button>
            )}
         </div>

         {currentTripType === 'departure' ? (
            <DepartureList searchParams={params as Required<typeof params>} />
         ) : (
            <DestinationList searchParams={params as Required<typeof params>} />
         )}
      </div>
   )
}

export default TripList
