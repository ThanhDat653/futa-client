/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useBooking } from '@/context/booking-context'
import FirstStep from './first-step/page'
import SecondStep from './second-step/page'

export default function Page() {
   const { step } = useBooking()

   switch (step) {
      case 1:
         return <FirstStep />

      case 2:
         return <SecondStep />
   }
}
