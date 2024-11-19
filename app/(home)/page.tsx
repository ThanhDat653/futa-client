/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import QuickBooking from '@/components/booking/quick-booking'
import Achievement from '@/components/pages/landing/achievement'
import PopularRoute from '@/components/pages/landing/popular-route'
import { RegionProvider } from '@/context/region-context'
import { getRegions } from '@/service/region'
import { getPopularTrips } from '@/service/trips'
import React, { Suspense } from 'react'

const page = async () => {
   const popularTrips = await getPopularTrips()

   return (
      <div className="mt-[120px] w-full">
         <RegionProvider>
            <QuickBooking />
         </RegionProvider>
         <PopularRoute data={popularTrips} />
         <Achievement />
      </div>
   )
}

export default page
