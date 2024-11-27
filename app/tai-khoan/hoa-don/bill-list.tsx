'use client'
import React from 'react'
import { IBillResponse } from '@/model/bill'
import BillCard from '@/components/pages/bill/BillCard'

interface BookingCardProps {
   bills: IBillResponse[]
}

const BillList = ({ bills }: BookingCardProps) => {
   return (
      <div className="flex w-full flex-col gap-2 space-y-2 md:w-3/4">
         <p className="text-lg font-medium text-gray-800 md:text-2xl">
            Lịch sử mua vé
         </p>
         <div className="flex w-full flex-col gap-3">
            {bills?.map((item, key) => <BillCard bill={item} key={key} />)}
         </div>
      </div>
   )
}

export default BillList
