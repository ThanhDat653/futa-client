/* eslint-disable @typescript-eslint/no-unused-vars */
import QuickBooking from '@/components/booking/quick-booking'
import { Suspense } from 'react'

export default function Layout({
   children,
   filter,
   quickBooking,
   tripList,
}: {
   children: React.ReactNode
   filter: React.ReactNode
   quickBooking: React.ReactNode
   tripList: React.ReactNode
}) {
   return (
      <div className="mt-[120px] w-full">
         {quickBooking}
         <div className="w-full bg-slate-50 py-10">
            <div className="container mx-auto w-full bg-slate-50 lg:grid lg:grid-cols-3 lg:gap-5">
               {filter}
               {tripList}
            </div>
         </div>
      </div>
   )
}
