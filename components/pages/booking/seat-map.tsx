/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { END_POINTS } from '@/constants/endpoints'
import { getTripDetail } from '@/service/trips'
import React from 'react'
import useSWR from 'swr'


const Seat = ({status} : {status: string}) => {
   return <div>
      
   </div>
}

const SeatRow = ()=> {
   return <div>

   </div>
}

const SeatMap = ({id}: {id: string}) => {
   const { data, error, isLoading } = useSWR(
      [
         id,
         `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.TRIP.DETAIL(id)}`,
      ],
      ([id]) => getTripDetail(id)
   )
   // geTripDetail
   console.log('====================================')
   console.log(data)
   console.log('====================================')
   return <div>SeatMap</div>
}

export default SeatMap
