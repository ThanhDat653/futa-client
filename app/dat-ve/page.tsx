/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import QuickBooking from '@/components/booking/quick-booking'
import Trips from '@/components/pages/booking/trips'
import { convertToString, formatDateToYYYYMMDD } from '@/lib/utils'
import { getRegions } from '@/service/region'
import { getTripByFromToDate } from '@/service/trips'
import { useRouter } from 'next/router'
import React from 'react'

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

   console.log(trips)

   return (
      <div className="mt-[120px] w-full">
         <QuickBooking data={region} />
         <Trips />
      </div>
   )
}
