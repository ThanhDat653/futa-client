/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import QuickBooking from '@/components/booking/quick-booking'
import Achievement from '@/components/pages/landing/achievement'
import PopularRoute from '@/components/pages/landing/popular-route'
import { getRegions } from '@/service/region'
import React from 'react'

const page = async () => {
   const region = await getRegions()

   return (
      <div className="mt-[120px] w-full">
         <QuickBooking data={region} />
         <PopularRoute />
         <Achievement />
      </div>
   )
}

export default page
