import Trips from '@/components/pages/booking/trips'
import { formatDateToYYYYMMDD } from '@/lib/utils'
import { getTripByFromToDate } from '@/service/trips'
import React from 'react'

// type TType = 'departure' | 'destination'

const Page = async ({
   searchParams,
}: {
   searchParams: {
      from: string
      to: string
      fromTime: string
      ticketCount: string
      timeInDay: string
      floorNo: string
      vehicleType: string
      type: string
   }
}) => {
   const { from, to, fromTime, ticketCount, vehicleType, timeInDay, floorNo } =
      searchParams

   const data = await getTripByFromToDate(
      from,
      to,
      formatDateToYYYYMMDD(fromTime),
      ticketCount,
      vehicleType,
      timeInDay,
      floorNo
   )

   return data ? (
      <Trips data={data} />
   ) : (
      <h3>Không tìm thấy chuyến xe phù hợp.</h3>
   )
}

export default Page
