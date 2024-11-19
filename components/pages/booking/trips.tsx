'use client'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useBooking } from '@/context/booking-context'
import {
   cn,
   formatDistance,
   formatDuration,
   formatTime,
   formatVND,
} from '@/lib/utils'
import { IScheduleTrip } from '@/model/schedule'
import { ILocation, ITrip } from '@/model/trips'
import React, { useState } from 'react'
import SeatMap from './seat-map'
import { TTripType } from '@/components/booking/quick-booking'
import { useRouter } from 'next/navigation'

export type TType = 'departure' | 'destination'

interface ITripCardProps {
   from: ILocation
   to: ILocation
   duration: number
   distance: number
   vehicle: string
   trip: ITrip
   onSelect: (
      id: string,
      seats: { id: number; name: string }[] | [],
      from: string,
      to: string,
      duration: number,
      distance: number,
      date: string,
      startTime: string,
      endTime: string
   ) => void
   current?: string
   tripType: TTripType
   type: TType
}

const TripCard = ({
   distance,
   duration,
   from,
   to,
   vehicle,
   trip,
   onSelect,
   current,
   tripType,
   type,
}: ITripCardProps) => {
   const {
      handleSelectTripType,
      departureTicket,
      destinationTicket,
      handleSetStep,
      step,
   } = useBooking()
   const [openSeatMap, setOpenSeatMap] = useState<boolean>(false)
   const router = useRouter()
   const toggleSeatMap = () => {
      setOpenSeatMap(!openSeatMap)
   }

   const handleSelectTrip = () => {
      if (tripType === 'oneWay') handleSetStep(2)
      if (tripType === 'roundTrip') {
         if (!departureTicket?.ticketId) handleSelectTripType('departure')
         if (!destinationTicket?.ticketId) handleSelectTripType('destination')
         else handleSetStep(2)
      }
   }

   const currentTicket =
      type === 'destination' ? destinationTicket : departureTicket

   return (
      <div
         onClick={() =>
            onSelect(
               trip.id,
               currentTicket?.ticketId === trip.id ? currentTicket?.seats : [],
               from.name,
               to.name,
               duration,
               distance,
               trip.startTime,
               trip.startTime,
               trip.endTime
            )
         }
         className={cn(
            'flex w-full cursor-pointer flex-col items-start justify-start rounded-lg border bg-white p-4 shadow-md md:px-10 lg:px-8',
            trip.id === current && 'border-2 border-sky-600 ring ring-sky-100'
         )}
         key={trip.id}
      >
         <div className="flex w-full items-center justify-between gap-12 border-b">
            <div className="flex w-full flex-1 flex-col justify-start pb-4">
               <div className="flex items-center justify-between py-2">
                  <h1 className="text-xl font-medium text-gray-700 md:text-2xl">
                     {formatTime(trip.startTime)}
                  </h1>
                  <div className="flex flex-1 items-center justify-between gap-1 px-3 md:px-8">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-5 stroke-teal-600 sm:size-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                     >
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"></path>
                     </svg>

                     <span className="flex-1 border-t-2 border-dotted"></span>
                     <div className="flex flex-col items-center justify-center gap-1 px-2 sm:px-4">
                        <p className="text-sm font-medium text-slate-500 sm:text-base">
                           {formatDuration(duration)}
                        </p>
                        <p className="text-sm text-slate-500">
                           ({formatDistance(distance)})
                        </p>
                     </div>
                     <span className="flex-1 border-t-2 border-dotted"></span>

                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-5 stroke-orange-500 sm:size-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                     >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                     </svg>
                  </div>
                  <h1 className="text-xl font-medium text-gray-700 md:text-2xl">
                     {formatTime(trip.endTime)}
                  </h1>
               </div>
               <div className="-mt-2 flex items-center justify-between text-sm text-gray-800 sm:-mt-4 sm:text-base">
                  <h3>{from.name}</h3>
                  <h3>{to.name}</h3>
               </div>
            </div>
            <div className="hidden h-full w-fit flex-col items-end justify-between gap-4 md:flex">
               <div className="flex w-full items-center justify-end gap-5">
                  <span className="text-slate-500 decoration-current">
                     {vehicle}
                  </span>
                  <span className="block w-fit text-teal-700">
                     {trip.seatsAvailable} ghế trống
                  </span>
               </div>
               <h3 className="text-right text-xl font-bold tracking-tight text-orange-600">
                  {formatVND(trip.price)}
               </h3>
            </div>
         </div>
         <div className="flex w-full items-center justify-between pt-4">
            <div className="flex flex-1 items-center justify-start gap-5 md:gap-10">
               <button
                  onClick={(event) => {
                     event.stopPropagation()
                     toggleSeatMap()
                  }}
                  className={cn(
                     'text-sm font-medium text-slate-500 transition-all duration-200 hover:text-teal-500',
                     {
                        'text-teal-600': openSeatMap,
                     }
                  )}
               >
                  Chọn ghế
               </button>
            </div>
            <span className="font-semibold text-orange-500 md:hidden">
               {formatVND(trip.price)}
            </span>
            <div className="hidden flex-col justify-center md:flex">
               <button
                  onClick={handleSelectTrip}
                  className={cn(
                     'cursor-pointer rounded-full bg-orange-100 px-10 py-2 text-sm leading-5 text-orange-700 transition-all duration-200 hover:bg-orange-600 hover:text-white'
                  )}
               >
                  Chọn chuyến
               </button>
            </div>
         </div>
         <div className="flex w-full items-center justify-center md:hidden">
            <button
               disabled={trip.id === current}
               className={cn(
                  'mx-auto mt-1 w-full rounded bg-orange-100 py-2 text-orange-600',
                  trip.id === current && 'bg-sky-100 text-sky-700'
               )}
            >
               Chọn chuyến
            </button>
         </div>
         {trip.id === current && openSeatMap && (
            <SeatMap
               step={step}
               id={trip.id}
               key={trip.id}
               handleSelectTrip={handleSelectTrip}
            />
         )}
      </div>
   )
}

const Trips = ({
   data,
   tripType,
   type,
}: {
   data: IScheduleTrip
   tripType: TTripType
   type: TType
}) => {
   const {
      departureTicket,
      destinationTicket,
      handleSelectDeparture,
      handleSelectDestination,
      handleSelectTripType,
   } = useBooking()

   return (
      <div className="flex flex-col items-center justify-start gap-2 py-5">
         {data.trips.map((trip) => (
            <TripCard
               vehicle={data.vehicleTypeName}
               distance={data.distance}
               duration={data.duration}
               trip={trip}
               from={data.from}
               to={data.to}
               key={trip.id}
               onSelect={
                  type === 'departure'
                     ? handleSelectDeparture
                     : handleSelectDestination
               }
               current={
                  type === 'departure'
                     ? departureTicket?.ticketId
                     : destinationTicket?.ticketId
               }
               tripType={tripType}
               type={type}
            />
         ))}
      </div>
   )
}

export default Trips
