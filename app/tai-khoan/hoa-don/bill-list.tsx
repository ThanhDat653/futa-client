'use client'
import React from 'react'
import { IBillResponse } from '@/model/bill'
import BillCard from '@/components/pages/bill/BillCard'

interface BookingCardProps {
   bills: IBillResponse[]
}

const BillList = ({ bills }: BookingCardProps) => {
   return (
      <div className="space-y-2 md:w-3/4 md:ps-8">
         <p className="font-inter text-2xl font-semibold">Lịch sử mua vé</p>
         <div className="h-[600px] space-y-4 overflow-y-auto">
            {bills?.map((item, key) => <BillCard bill={item} key={key} />)}
         </div>
      </div>
   )
}

export default BillList
