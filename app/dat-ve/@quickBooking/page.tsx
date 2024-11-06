/* eslint-disable @typescript-eslint/no-unused-vars */
import QuickBooking, { TTripType } from '@/components/booking/quick-booking'
import { getRegions } from '@/service/region'
import { notFound } from 'next/navigation'
import React, { Suspense } from 'react'

const Page = async ({
   searchParams,
}: {
   searchParams: {
      from: string
      fromTime: string
      to: string
      toTime: string
      ticketCount: string
      type: TTripType
   }
}) => {
   const region = await getRegions()

   return <QuickBooking data={region} {...searchParams} />
}

export default Page
