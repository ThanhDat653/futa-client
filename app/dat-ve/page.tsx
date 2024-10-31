/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import QuickBooking from '@/components/booking/quick-booking'
import Trips from '@/components/pages/booking/trips'
import { convertToString, formatDateToYYYYMMDD } from '@/lib/utils'
import { getRegions } from '@/service/region'
import { getTripByFromToDate } from '@/service/trips'
import React, { Suspense } from 'react'

export default async function page({
   searchParams,
}: {
   searchParams: Promise<{
      from: string
      to: string
      fromTime: string
      ticketCount: number
   }>
}) {
   const fromRegion = (await searchParams).from
   const date = (await searchParams).fromTime
   const ticket = (await searchParams).ticketCount
   const toRegion = (await searchParams).to

   const region = await getRegions()
   const trips = await getTripByFromToDate(
      convertToString(fromRegion),
      convertToString(toRegion),
      formatDateToYYYYMMDD(convertToString(date)),
      ticket
   )

   return (
      <div className="mt-[120px] w-full">

         <Suspense>
            <QuickBooking data={region} />
         </Suspense>
         <div className="w-full bg-slate-50 py-10">
            <div className="container mx-auto w-full md:grid-cols-4 lg:grid-cols-3 bg-slate-50 md:grid md:gap-5">
               <div className="col-span-1 h-full bg-white shadow-xl"></div>
               {trips && <Trips data={trips} />}
            </div>
         </div>
      </div>
   )
}
