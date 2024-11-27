import { cn, formatDate, formatTime, formatVND } from '@/lib/utils'
import { getBillById } from '@/service/bill'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default async function Page({
   params,
}: {
   params: Promise<{ id: string }>
}) {
   const billId = (await params).id
   const bill = await getBillById(billId)
   console.log(bill.totalPrice)

   return (
      // <div className="mt-[120px] w-full bg-slate-100">
      <div className="h-full w-full bg-slate-100 px-4 py-24 lg:py-36">
         <div className="container mx-auto flex items-start justify-center">
            <div className="flex w-full max-w-[1000px] flex-col rounded-md bg-white px-2 py-3 shadow-md">
               <div className="flex w-full items-center justify-center gap-3 border-b pb-2 uppercase">
                  <h1 className="text-center text-lg font-medium text-teal-700">
                     {bill.trip.regionFromName}
                  </h1>
                  <ArrowRightIcon className="h-4 w-4 stroke-teal-700" />
                  <h1 className="text-center text-lg font-medium text-teal-700">
                     {bill.trip.regionToName}
                  </h1>
               </div>
               <div className="flex w-full flex-col items-center justify-center py-3">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     fill="none"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="size-16 fill-teal-500 stroke-white"
                     strokeWidth={2}
                  >
                     {' '}
                     <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>{' '}
                     <path d="M9 12l2 2l4 -4"></path>{' '}
                  </svg>
                  <h1 className="text-center text-xl font-medium uppercase text-gray-800">
                     {bill.status === 'Success' && 'Mua vé xe thành công'}
                     {bill.status === 'Pending' &&
                        'Quá trình thanh toán đang được xử lí'}
                  </h1>
                  <p className="py-2 text-center">
                     <span className="text-orange-600">FUTA Bus Lines </span>
                     đã gửi thông tin vé đã đặt về địa chỉ email{' '}
                     <span className="italic">{bill.passengerEmail}</span>
                  </p>
               </div>

               <div className="flex w-full flex-col overflow-hidden rounded-md border pb-4">
                  <div className="w-full bg-gray-300 py-1">
                     <h2 className="text-center font-medium uppercase">
                        Thông tin đặt vé
                     </h2>
                  </div>
                  <div className="flex h-full flex-col gap-2 border-b px-3 py-5 md:flex-row md:gap-20 md:px-5 lg:px-10">
                     <div className="flex h-full flex-1 flex-col gap-2">
                        <div className="flex w-full justify-between">
                           <span className="min-w-[100px] text-gray-600">
                              Khách hàng
                           </span>
                           <h5>{bill.passengerName}</h5>
                        </div>
                        <div className="flex w-full justify-between">
                           <span className="min-w-[100px] text-gray-600">
                              Số điện thoại
                           </span>
                           <h5>{bill.passengerPhone}</h5>
                        </div>
                        <div className="flex w-full justify-between">
                           <span className="min-w-[100px] text-gray-600">
                              Email
                           </span>
                           <h5 className="truncate" title={bill.passengerEmail}>
                              {bill.passengerEmail}
                           </h5>
                        </div>
                     </div>
                     <div className="flex h-full flex-1 flex-col gap-2">
                        <div className="flex w-full justify-between">
                           <span className="min-w-[100px] text-gray-600">
                              Tổng tiền
                           </span>
                           <h5 className="font-medium text-orange-600">
                              {formatVND(bill.totalPrice)}
                           </h5>
                        </div>
                        <div className="flex w-full justify-between">
                           <span className="min-w-[100px] text-gray-600">
                              Ngày đặt vé
                           </span>
                           <h5>{formatDate(bill.paymentAt!)}</h5>
                        </div>
                        <div className="flex w-full justify-between">
                           <span className="min-w-[100px] text-gray-600">
                              Trạng thái
                           </span>
                           <h5
                              className={cn({
                                 'text-teal-600': bill.status === 'Success',
                              })}
                           >
                              {bill.status === 'Success' && 'Đã thanh toán'}
                           </h5>
                        </div>
                     </div>
                  </div>
                  <div className="flex w-full flex-col">
                     <div className="flex h-full flex-col gap-5 px-3 py-5 md:flex-row md:gap-20 md:px-5 lg:px-10">
                        <div className="flex h-full flex-1 flex-col gap-2 rounded-md border-l-[6px] border-teal-600 py-1 pl-4">
                           <div className="mb-2 text-left">
                              <h2 className="text-left font-medium uppercase">
                                 Vé đi
                              </h2>
                              <h5 className="text-teal-700">
                                 {bill.trip.locationFromName} -{' '}
                                 {bill.trip.locationToName}
                              </h5>
                           </div>
                           <div className="flex w-full justify-between">
                              <span className="text-gray-600">Ngày đi</span>
                              {formatDate(bill.trip.startTime)} |{' '}
                              {formatTime(bill.trip.startTime)}
                           </div>
                           <div className="flex w-full justify-between">
                              <span className="text-gray-600">Ghế</span>
                              <h5 className={'text-sky-600'}>
                                 {bill.tickets
                                    .map((ticket) => ticket.seatName)
                                    .join(', ')}
                              </h5>
                           </div>
                        </div>

                        {bill.roundTrip?.id && (
                           <div className="flex h-full flex-1 flex-col gap-2 rounded-md border-l-[6px] border-teal-600 py-1 pl-4">
                              <div className="mb-2 text-left">
                                 <h2 className="text-left font-medium uppercase">
                                    Vé về
                                 </h2>
                                 <h5 className="text-teal-700">
                                    {bill.trip.locationToName}
                                    {' - '}
                                    {bill.trip.locationFromName}
                                 </h5>
                              </div>
                              <div className="flex w-full justify-between">
                                 <span className="text-gray-600">Ngày đi</span>
                                 <h5>
                                    {formatDate(bill.roundTrip.trip.startTime)}{' '}
                                    |{formatTime(bill.roundTrip.trip.startTime)}
                                 </h5>
                              </div>
                              <div className="flex w-full justify-between">
                                 <span className="text-gray-600">Ghế</span>
                                 <h5 className={'text-sky-600'}>
                                    {bill.roundTrip.tickets
                                       .map((ticket) => ticket.seatName)
                                       .join(', ')}
                                 </h5>
                              </div>
                           </div>
                        )}
                     </div>
                     {bill.status === 'Pending' && (
                        <Link
                           className="mx-auto w-fit rounded-full bg-sky-500 px-12 py-2 text-white"
                           href={bill.paymentUrl}
                        >
                           Thanh toán
                        </Link>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
