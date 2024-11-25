'use client'
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRightIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {IBillResponse} from "@/model/bill";

interface BookingCardProps {
   bills: IBillResponse[]
}

const BillList = ({bills}: BookingCardProps) => {
   const statusColors = {
      Success: 'text-green-500 border-green-500',
      Pending: 'text-amber-500 border-amber-500',
      Cancel: 'text-red-500 border-red-500',
   }

   return (
      <div className="space-y-2 md:w-3/4 md:ps-8">
         <p className="font-inter text-2xl font-semibold">Lịch sử mua vé</p>
         <div className="h-[600px] space-y-4 overflow-y-auto">
            {bills.map((item, key) => (
               <Card key={key} className="w-full text-white">
                  <CardContent className="p-4 sm:flex sm:justify-between">
                     <div className="flex flex-col gap-1">
                        <div className="flex w-full items-center gap-3">
                           <Badge
                              variant="outline"
                              className="flex items-center justify-center text-sm"
                           >
                              Chuyến {item.type}
                           </Badge>
                           <div className="flex items-center gap-2 text-lg font-semibold text-gray-600">
                              {/*<MapPinIcon className="h-4 w-4" />*/}
                              {item.trip.regionFromName}
                              <ArrowRightIcon className="h-4 w-4" />
                              {item.trip.regionToName}
                           </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600 ps-2">
                           {/*<CalendarIcon className="h-4 w-4" />*/}
                           {item.type === 'Khứ hồi' ? (
                              item.roundTrip?.trip && (
                                 <>
                                    <span>Ngày đi: {item.trip.startTime.split('T')[0]}</span>
                                    <span>-</span>
                                    <span>Ngày về: {item.roundTrip.trip.startTime.split('T')[0]}</span>
                                 </>
                              )
                           ) : (
                              <span>Ngày đi: {item.trip.startTime.split('T')[0]}</span>
                           )}
                        </div>
                        <div className="smtext-xl text-xl font-bold text-orange-600 ps-2 mt-3">
                           {item.totalPrice.toLocaleString()} VND
                        </div>
                     </div>

                     <div className="mt-4 flex justify-between gap-4 border-t-2 border-slate-400 pt-4 sm:mt-0 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
                        <span className="text-sm text-slate-600 font-bold">
                           {item.createDate.split('T')[0]}
                        </span>
                        <div className="flex justify-between items-center space-x-4">
                           <Button
                               disabled={true}
                               className={`h-8 w-20 border-2 bg-transparent text-xs capitalize ${statusColors[item.status.name]}`}
                           >
                              {item.status.name}
                           </Button>
                           <Button
                               className={`h-8 text-xs capitalize bg-orange-100 text-orange-700 hover:text-white hover:bg-orange-600`}
                           >
                              Xem chi tiết
                           </Button>
                        </div>

                     </div>
                  </CardContent>
               </Card>
            ))}
         </div>
      </div>
   )
}

export default BillList
