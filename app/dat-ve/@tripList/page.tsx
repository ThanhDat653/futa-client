import { formatDateToYYYYMMDD } from '@/lib/utils'
import { getTripByFromToDate } from '@/service/trips'
import React from 'react'

const page = async ({
   searchParams,
}: {
   searchParams: {
      from: string
      to: string
      toTime: string
      fromTime: string
      ticketCount: string
      timeInDay: string
      floorNo: string
      vehicleType: string
      type: string
   }
}) => {
   const { from, to, fromTime, ticketCount, timeInDay, floorNo, vehicleType } =
      searchParams

   console.log(fromTime)
   const data = await getTripByFromToDate(
      from,
      to,
      formatDateToYYYYMMDD(fromTime),
      ticketCount,
      vehicleType,
      timeInDay,
      floorNo
   )

   return (
      <div className="w-full">
         <h3 className="text-lg font-medium">
            {data?.regionFrom.name} - {data?.regionTo.name} (
            {data?.trips.length})
         </h3>
      </div>
   )
}

export default page
