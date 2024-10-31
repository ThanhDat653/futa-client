/* eslint-disable @typescript-eslint/no-unused-vars */
import {
   formatDistance,
   formatDuration,
   formatTime,
   formatVND,
} from '@/lib/utils'
import { IRegion } from '@/model/region'
import { IScheduleTrip } from '@/model/schedule'
import { ILocation, ITrip } from '@/model/trips'
import React from 'react'

interface ITripCardProps {
   from: ILocation
   to: ILocation
   duration: number
   distance: number
   vehicle: string
   trip: ITrip
}

const TripCard = ({
   distance,
   duration,
   from,
   to,
   vehicle,
   trip,
}: ITripCardProps) => {
   return (
      <div
         className="flex w-full flex-col items-start justify-start rounded-lg bg-white p-4 shadow-md lg:px-10"
         key={trip.id}
      >
         <div className="flex w-full items-center justify-between gap-20 border-b pb-4">
            <div className="flex w-full flex-col justify-start pb-4">
               <div className="flex items-center justify-between py-2 sm:py-4">
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
            <div className="hidden h-full flex-col items-end justify-between md:flex">
               <span className="text-gray-700">Giá vé</span>
               <h3 className="text-right text-xl font-bold tracking-tight text-orange-600">
                  {formatVND(trip.price)}
               </h3>
            </div>
         </div>
         <div className="flex w-full items-center justify-between py-4">
            <div className="flex flex-1 items-center justify-start gap-5 md:gap-10">
               <span className="block text-teal-700">
                  {trip.seatsAvailable} ghế trống
               </span>
               <span className="text-sky-700 decoration-current">
                  {vehicle}
               </span>
            </div>
            <span className="font-semibold text-orange-500 md:hidden">
               {formatVND(trip.price)}
            </span>
            <div className="hidden flex-col justify-center md:flex">
               <button className="rounded-full bg-orange-100 px-10 py-2 text-sm leading-5 text-orange-700 transition-all duration-200 hover:bg-orange-600 hover:text-white">
                  Mua vé
               </button>
            </div>
         </div>
         <div className="flex w-full items-center justify-center md:hidden">
            <button className="mx-auto w-full rounded bg-orange-100 py-2 text-orange-600">
               Mua vé
            </button>
         </div>
      </div>
   )
}

const Trips = ({ data }: { data: IScheduleTrip }) => {
   return (
      <div className="px-4 sm:px-0 md:col-span-3 lg:col-span-2">
         <div className="w-full">
            <h3 className="text-lg font-medium">
               {data.regionFrom.name} - {data.regionTo.name} (
               {data.trips.length})
            </h3>
         </div>
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
               />
            ))}
         </div>
      </div>
   )
}

export default Trips
