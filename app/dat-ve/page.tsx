/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Filter from '@/components/booking/filter'
import useSWR from 'swr'
import QuickBooking from '@/components/booking/quick-booking'
import TripSummary from '@/components/pages/booking/trip-summary'
import { getRegions } from '@/service/region'
import { getVehicleType } from '@/service/vehicle'
import { Suspense } from 'react'
import TripList from './tripList/page'
import { IRegion } from '@/model/region'
import { END_POINTS } from '@/constants/endpoints'
import { BookingProvider } from '@/context/booking-context'

export default function Page() {
   const {
      data: regions,
      error: regionError,
      isLoading: regionLoading,
   } = useSWR(
      `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.REGION.ALL}`,
      getRegions,
      { revalidateOnFocus: false }
   )

   const {
      data: vehicle,
      error: vehicleError,
      isLoading: vehicleLoading,
   } = useSWR(
      `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.VEHICLE.TYPE}`,
      getVehicleType,
      { revalidateOnFocus: false }
   )

   return (
      <BookingProvider>
         <div className="mt-[120px] w-full">
            <QuickBooking data={regions as IRegion[]} />
            <div className="w-full bg-slate-50 py-10">
               <div className="container mx-auto w-full bg-slate-50 lg:grid lg:grid-cols-3 lg:gap-5">
                  <div className="flex w-full flex-col gap-2">
                     <TripSummary />
                     <Filter data={vehicle!} />
                  </div>

                  <TripList />
               </div>
            </div>
         </div>
      </BookingProvider>
   )
}
