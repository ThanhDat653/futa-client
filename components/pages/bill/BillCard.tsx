import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRightIcon } from 'lucide-react'
import { IBillResponse } from '@/model/bill'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

const BillCard = ({ bill }: { bill: IBillResponse }) => {
   const statusColors = {
      Success: 'text-teal-700 bg-teal-100',
      Pending: 'text-sky-700 bg-sky-50',
      Cancel: 'text-red-700 bg-red-50',
   }
   return (
      <Card key={bill.id} className="w-full border-gray-100 text-white shadow">
         <CardContent className="p-4 sm:flex sm:justify-between md:p-5">
            <div className="flex flex-col gap-2">
               <div className="flex w-full flex-col items-center gap-3 sm:flex-row">
                  <h2 className="flex items-center justify-center rounded-full border bg-gray-100 px-2 py-1 text-sm font-medium text-gray-800">
                     Chuyến {bill.type}
                  </h2>
                  <div className="flex items-center gap-2 font-medium text-teal-700 md:text-lg">
                     {bill.trip.regionFromName}
                     <ArrowRightIcon className="h-4 w-4" />
                     {bill.trip.regionToName}
                  </div>
               </div>
               <div className="flex items-center gap-2 text-sm text-slate-600">
                  {bill.type === 'Khứ hồi' ? (
                     bill.trip.returnTime && (
                        <>
                           <span>
                              Ngày đi: {formatDate(bill.trip.startTime)}
                           </span>

                           <span>
                              Ngày về: {formatDate(bill.trip.returnTime)}
                           </span>
                        </>
                     )
                  ) : (
                     <span>Ngày đi: {formatDate(bill.trip.startTime)}</span>
                  )}
               </div>
               <div className="smtext-xl mt-3 text-xl font-bold text-orange-600">
                  {bill.totalPrice.toLocaleString()} VND
               </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 border-t border-slate-200 pt-4 sm:mt-0 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
               <span className="text-sm font-medium text-slate-500">
                  {formatDate(bill.createDate)}
               </span>
               <div className="flex items-center justify-between space-x-1">
                  <div
                     className={`rounded-full bg-transparent px-4 py-2 text-xs font-medium ${statusColors[bill.status]}`}
                  >
                     {bill.status === 'Cancel' && 'Đã hủy'}
                     {bill.status === 'Pending' && 'Chờ thanh toán'}
                     {bill.status === 'Success' && 'Đã mua'}
                  </div>
                  {bill.status !== 'Cancel' && (
                     <Link
                        className={`rounded-full border bg-orange-500 px-5 py-1 text-sm text-white hover:text-white sm:py-2`}
                        href={`tai-khoan/hoa-don/${bill.id}`}
                     >
                        Chi tiết
                     </Link>
                  )}
               </div>
            </div>
         </CardContent>
      </Card>
   )
}

export default BillCard
