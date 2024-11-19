/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import {
   BookingProvider,
   IBookingState,
   useBooking,
} from '@/context/booking-context'
import React from 'react'
import { TType } from './trips'
import {
   cn,
   formatDate,
   formatDistance,
   formatTime,
   formatDuration,
} from '@/lib/utils'
import { useSearchParams } from 'next/navigation'
import { TTripType } from '@/components/booking/quick-booking'

interface ISummaryCardProps {
   type: TType
   currentTripType: TType
   ticket: IBookingState
}

const SummaryCard = ({ type, currentTripType, ticket }: ISummaryCardProps) => {
   return (
      ticket?.ticketId && (
         <div
            className={cn(
               'flex h-fit w-full flex-col border-t p-5',
               currentTripType === type && 'border-l-4 border-l-sky-500'
            )}
         >
            <div className="flex items-center justify-start gap-2">
               <div className="flex size-10 items-center justify-center rounded-lg bg-sky-500 text-sm text-white">
                  {type === 'departure' ? 'Đi' : 'Về'}
               </div>
               <div className="flex flex-1 flex-col">
                  <div className="text-sm">
                     {formatDate(ticket?.date || '')}
                  </div>
                  <div className="text-sm">
                     {ticket?.from} - {ticket?.to}
                  </div>
               </div>
            </div>
            <div className="flex w-full flex-col justify-start pb-4">
               <div className="flex items-center justify-between py-2 sm:py-4">
                  <h3 className="text-sm font-medium text-gray-700">
                     {formatTime(ticket.startTime)}
                  </h3>
                  <div className="flex flex-1 items-center justify-between gap-1 px-2">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-5 stroke-teal-600"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                     >
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"></path>
                     </svg>

                     <span className="flex-1 border-t-2 border-dotted"></span>

                     <div className="flex flex-col items-center justify-center gap-1 px-2">
                        <p className="text-sm font-medium text-slate-500">
                           {formatDuration(ticket?.duration)}
                        </p>
                        <p className="text-sm text-slate-500">
                           {formatDistance(ticket?.distance)}
                        </p>
                     </div>

                     <span className="flex-1 border-t-2 border-dotted"></span>

                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-5 stroke-orange-500"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                     >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                     </svg>
                  </div>
                  <h3 className="text-sm font-medium text-gray-700">
                     {formatTime(ticket.endTime)}
                  </h3>
               </div>
               <div className="mt-2 flex items-center justify-between text-sm text-gray-700 sm:mt-2 sm:text-base">
                  <div className="text-gray-600">Ghế:</div>
                  <span>{ticket.seats.map((s) => s.name).join(', ')}</span>
               </div>
            </div>
         </div>
      )
   )
}

const TripSummary = () => {
   const { departureTicket, destinationTicket, currentTripType } = useBooking()
   const searchParams = useSearchParams()
   const params = {
      type: searchParams.get('type') as TTripType,
   }
   return (
      params.type === 'roundTrip' &&
      (departureTicket?.ticketId || destinationTicket?.ticketId) && (
         <aside className="col-span-1 hidden h-fit flex-col items-start justify-start rounded-lg bg-white shadow-md lg:flex">
            <div className="flex w-full items-center justify-between px-5 py-4">
               <h1 className="text-lg font-medium text-gray-800">
                  Chuyến đi của bạn
               </h1>
            </div>

            <SummaryCard
               type="departure"
               ticket={departureTicket!}
               currentTripType={currentTripType}
            />
            <SummaryCard
               type="destination"
               ticket={destinationTicket!}
               currentTripType={currentTripType}
            />
         </aside>
      )
   )
}

export default TripSummary
export { SummaryCard }
