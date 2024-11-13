/* eslint-disable @typescript-eslint/no-unused-vars */
import Trips from '@/components/pages/booking/trips'
import { END_POINTS } from '@/constants/endpoints'
import { formatDateToYYYYMMDD } from '@/lib/utils'
import { getTripByFromToDate } from '@/service/trips'
import React from 'react'
import useSWR from 'swr'

const DepartureList = ({
   searchParams,
}: {
   searchParams: {
      from: string
      to: string
      fromTime: string
      toTime: string
      ticketCount: string
      timeInDay: string
      floorNo: string
      vehicleType: string
      type: string
   }
}) => {
   const { from, to, fromTime, ticketCount, vehicleType, timeInDay, floorNo } =
      searchParams
   const { data, error, isLoading } = useSWR(
      [
         from,
         to,
         fromTime,
         ticketCount,
         vehicleType,
         timeInDay,
         floorNo,
         `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.REGION.ALL}`,
      ],
      ([from, to, fromTime, ticketCount, vehicleType, timeInDay, floorNo]) =>
         getTripByFromToDate(
            from,
            to,
            formatDateToYYYYMMDD(fromTime),
            ticketCount,
            vehicleType,
            timeInDay,
            floorNo
         ),
      { revalidateOnFocus: false }
   )

   return data ? (
      <Trips data={data} type="departure" />
   ) : (
      <h3>Không tìm thấy chuyến xe phù hợp.</h3>
   )
}

export default DepartureList
