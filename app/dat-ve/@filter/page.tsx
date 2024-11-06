/* eslint-disable @typescript-eslint/no-unused-vars */
import Filter from '@/components/booking/filter'
import { getVehicleType } from '@/service/vehicle'
import React from 'react'

export const Page = async ({
   searchParams,
}: {
   searchParams: {
      timeInDay: string
      vehicleType: string
      floorNo: string
   }
}) => {
   const vehicle = await getVehicleType()

   return <Filter data={vehicle} {...searchParams}/>
}

export default Page
