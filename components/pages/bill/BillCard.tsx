import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRightIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { IBillResponse } from '@/model/bill'
import Link from 'next/link'

const BillCard = ({ bill }: { bill: IBillResponse }) => {
   const statusColors = {
      Success: 'text-green-500 border-green-500',
      Pending: 'text-amber-500 border-amber-500',
      Cancel: 'text-red-500 border-red-500',
   }
   return (
      <Card key={bill.id} className="w-full text-white">
         <CardContent className="p-4 sm:flex sm:justify-between">
            <div className="flex flex-col gap-1">
               <div className="flex w-full items-center gap-3">
                  <Badge
                     variant="outline"
                     className="flex items-center justify-center text-sm"
                  >
                     Chuyến {bill.type}
                  </Badge>
                  <div className="flex items-center gap-2 text-lg font-semibold text-gray-600">
                     {/*<MapPinIcon className="h-4 w-4" />*/}
                     {bill.trip.regionFromName}
                     <ArrowRightIcon className="h-4 w-4" />
                     {bill.trip.regionToName}
                  </div>
               </div>
               <div className="flex items-center gap-2 ps-2 text-sm text-slate-600">
                  {bill.type === 'Khứ hồi' ? (
                     bill.trip.returnTime && (
                        <>
                           <span>
                              Ngày đi: {bill.trip.startTime.split('T')[0]}
                           </span>
                           <span>-</span>
                           <span>
                              Ngày về: {bill.trip.returnTime.split('T')[0]}
                           </span>
                        </>
                     )
                  ) : (
                     <span>Ngày đi: {bill.trip.startTime.split('T')[0]}</span>
                  )}
               </div>
               <div className="smtext-xl mt-3 ps-2 text-xl font-bold text-orange-600">
                  {bill.totalPrice.toLocaleString()} VND
               </div>
            </div>

            <div className="mt-4 flex justify-between gap-4 border-t-2 border-slate-400 pt-4 sm:mt-0 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
               <span className="text-sm font-bold text-slate-600">
                  {bill.createDate.split('T')[0]}
               </span>
               <div className="flex items-center justify-between space-x-4">
                  <Button
                     disabled={true}
                     className={`h-8 w-20 border-2 bg-transparent text-xs capitalize ${statusColors[bill.status.name]}`}
                  >
                     {bill.status.name}
                  </Button>
                  <Link
                     className={`h-8 bg-orange-100 text-xs capitalize text-orange-700 hover:bg-orange-600 hover:text-white`}
                     href={`tai-khoan/hoa-don/${bill.id}`}
                  >
                     Xem chi tiết
                  </Link>
               </div>
            </div>
         </CardContent>
      </Card>
   )
}

export default BillCard
