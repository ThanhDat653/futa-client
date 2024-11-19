/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { TTripType } from '@/components/booking/quick-booking'
import Trips from '@/components/pages/booking/trips'
import { END_POINTS } from '@/constants/endpoints'
import { useSchedule } from '@/context/schedule-context'
import { formatDateToYYYYMMDD } from '@/lib/utils'
import { getTripByFromToDate } from '@/service/trips'
import React, { memo } from 'react'
import useSWR from 'swr'

// type TType = 'departure' | 'destination'

const DestinationList = ({
   searchParams,
}: {
   searchParams: {
      fromTime: string
      toTime: string
      type: string
      from: string
      to: string
      ticketCount: string
      timeInDay: string
      floorNo: string
      vehicleType: string
   }
}) => {
   const {
      from,
      to,
      toTime,
      ticketCount,
      vehicleType,
      timeInDay,
      floorNo,
      type,
   } = searchParams
   const { setTotalTrips } = useSchedule()
   const { data, error, isLoading } = useSWR(
      [
         to,
         from,
         toTime,
         ticketCount,
         vehicleType,
         timeInDay,
         floorNo,
         `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.REGION.ALL}`,
      ],
      ([to, from, toTime, ticketCount, vehicleType, timeInDay, floorNo]) =>
         getTripByFromToDate(
            to,
            from,
            formatDateToYYYYMMDD(toTime),
            ticketCount,
            vehicleType,
            timeInDay,
            floorNo
         )
   )

   if (data?.trips) setTotalTrips(data?.trips.length)

   return data ? (
      <Trips data={data} type="destination" tripType={type as TTripType} />
   ) : (
      <h3>Không tìm thấy chuyến xe phù hợp.</h3>
   )
}

export default memo(DestinationList)
