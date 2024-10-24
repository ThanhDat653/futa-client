/* eslint-disable @next/next/no-img-element */
import Achievement from '@/components/pages/landing/achievement'
import PopularRoute from '@/components/pages/landing/popular-route'
import React from 'react'

const page = () => {
   return (
      <div className="mt-[120px] w-full">
         <PopularRoute />
         <Achievement />
      </div>
   )
}

export default page
