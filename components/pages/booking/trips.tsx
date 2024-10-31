/* eslint-disable @typescript-eslint/no-unused-vars */
import { IRegion } from '@/model/region'
import { IScheduleTrip } from '@/model/schedule'
import { ILocation } from '@/model/trips'
import React from 'react'

interface ITripCardProps {
   regionFrom: IRegion
   regionTo: IRegion
   from: ILocation
   to: ILocation
   duration: number
   distance: number
   id: string
   startTime: string
   endTime: string
   seatsAvailable: number
   price: number
}

const TripCard = () => {
   return (
      <div className="flex w-full flex-col items-start justify-start rounded-md bg-white p-4 shadow-lg">
         <div className="flex w-full justify-start"></div>
      </div>
   )
}

const Trips = ({ data }: { data: IScheduleTrip }) => {
   return (
      <div className="md:col-span-3">
         <div className="w-full">
            <h3 className="text-lg">
               {data.regionFrom.name} - {data.regionTo.name} (
               {data.trips.length})
            </h3>
         </div>
         <div className="flex flex-col items-center justify-start gap-5 py-10 lg:gap-10">
            <TripCard />
            <TripCard />
         </div>
      </div>
   )
}

export default Trips
