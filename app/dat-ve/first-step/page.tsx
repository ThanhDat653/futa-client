/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Filter from '@/components/booking/filter'
import useSWR from 'swr'
import QuickBooking from '@/components/booking/quick-booking'
import TripSummary from '@/components/pages/booking/trip-summary'
import { getVehicleType } from '@/service/vehicle'
import TripList from '../tripList/page'
import { END_POINTS } from '@/constants/endpoints'
import { BookingProvider } from '@/context/booking-context'
import { RegionProvider } from '@/context/region-context'
import { ScheduleProvider } from '@/context/schedule-context'
import { useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'

export default function FirstStep() {
   const searchParams = useSearchParams()
   const {
      data: vehicle,
      error: vehicleError,
      isLoading: vehicleLoading,
   } = useSWR(
      `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.VEHICLE.TYPE}`,
      getVehicleType,
      { revalidateOnFocus: false }
   )
   const tripListRef = useRef<HTMLDivElement | null>(null)

   const scrollToTripList = () => {
      if (tripListRef.current) {
         const elementPosition = tripListRef.current.getBoundingClientRect().top // Vị trí của phần tử so với viewport
         const offsetPosition = window.scrollY + elementPosition - 100 // Trừ đi 300px

         window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
         })
      }
   }

   useEffect(() => {
      scrollToTripList()
   }, [searchParams])

   return (
      <div className="mt-[120px] w-full">
         <QuickBooking />
         <div ref={tripListRef} className="w-full bg-slate-50 py-10">
            <div className="container mx-auto w-full bg-slate-50 lg:grid lg:grid-cols-3 lg:gap-5">
               <div className="flex w-full flex-col gap-2">
                  <TripSummary />
                  <Filter data={vehicle!} />
               </div>
               <ScheduleProvider>
                  <TripList />
               </ScheduleProvider>
            </div>
         </div>
      </div>
   )
}
