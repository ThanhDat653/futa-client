/* eslint-disable @typescript-eslint/no-unused-vars */
import Loading from '@/app/loading'
import { TTripType } from '@/components/booking/quick-booking'
import Trips from '@/components/pages/booking/trips'
import { END_POINTS } from '@/constants/endpoints'
import { useSchedule } from '@/context/schedule-context'
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
   const {
      from,
      to,
      fromTime,
      ticketCount,
      vehicleType,
      timeInDay,
      floorNo,
      type,
   } = searchParams
   const { setTotalTrips } = useSchedule()
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
   if (data?.trips) setTotalTrips(data?.trips.length)

   if (isLoading) return <Loading />

   return <Trips data={data!} type="departure" tripType={type as TTripType} />
}

export default DepartureList
