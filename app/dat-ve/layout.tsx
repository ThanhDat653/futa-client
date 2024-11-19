'use client'
import { BookingProvider } from '@/context/booking-context'
import { RegionProvider } from '@/context/region-context'
import { ScheduleProvider } from '@/context/schedule-context'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <RegionProvider>
         <ScheduleProvider>
            <BookingProvider>{children}</BookingProvider>
         </ScheduleProvider>
      </RegionProvider>
   )
}

export default layout
