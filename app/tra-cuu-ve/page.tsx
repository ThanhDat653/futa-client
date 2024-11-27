/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import {
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   Form,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn, formatDate, formatTime, formatVND } from '@/lib/utils'
import { IBillDetail, IBillSearchData } from '@/model/bill'
import { getBillByIdAndPhone } from '@/service/bill'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const billSearchSchema = z.object({
   billId: z.string({
      required_error: 'Vui lòng nhập ID hóa đơn đã nhận được qua mail.',
   }),
   phoneNumber: z.string({
      required_error: 'Vui lòng nhập số điện thoại.',
   }),
})

const Page = () => {
   const [bill, setBill] = useState<IBillDetail | null>()
   const {
      formState: { errors },
   } = useForm<IBillSearchData>({
      resolver: zodResolver(billSearchSchema), // Tích hợp schema validation
   })

   const form = useForm<z.infer<typeof billSearchSchema>>({
      resolver: zodResolver(billSearchSchema),
   })

   function onSubmit(data: z.infer<typeof billSearchSchema>) {
      async function getBillData() {
         const billData = await getBillByIdAndPhone(data)
         if (billData.id) return setBill(billData)
         return setBill(null)
      }

      getBillData()
   }

   console.log(bill)
   return (
      <div className="mt-[70px] h-full w-full lg:mt-[112px]">
         <div className="h-full w-full py-10">
            <div className="container mx-auto flex h-full w-full flex-col items-center justify-center gap-10">
               <Form {...form}>
                  <form
                     onSubmit={form.handleSubmit(onSubmit)}
                     className="flex h-full w-full max-w-[500px] flex-col gap-2 rounded-md border bg-white p-4 shadow"
                  >
                     <FormField
                        control={form.control}
                        name="billId"
                        render={({ field, fieldState }) => (
                           <FormItem>
                              <FormLabel className="text-gray-600">
                                 Mã hóa đơn{' '}
                                 <span className="text-orange-700">*</span>
                              </FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder="Nhập mã hóa đơn"
                                    {...field}
                                 />
                              </FormControl>
                              {fieldState.error?.message && (
                                 <p className="text-xs text-red-500">
                                    <span className="">(*) </span>
                                    {fieldState.error?.message}
                                 </p>
                              )}
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field, fieldState }) => (
                           <FormItem>
                              <FormLabel className="text-gray-600">
                                 Số điện thoại{' '}
                                 <span className="text-orange-700">*</span>
                              </FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder="Nhập số điện thoại đã đặt vé"
                                    {...field}
                                 />
                              </FormControl>
                              {fieldState.error?.message && (
                                 <p className="text-xs text-red-500">
                                    <span className="">(*) </span>
                                    {fieldState.error?.message}
                                 </p>
                              )}
                           </FormItem>
                        )}
                     />
                     <div className="flex w-full items-center justify-center">
                        <button
                           className="w-fit rounded-full bg-sky-500 px-10 py-1 text-white"
                           type="submit"
                        >
                           Tìm kiếm
                        </button>
                     </div>
                  </form>
               </Form>
               {bill ? (
                  <div className="container mx-auto flex items-start justify-center">
                     <div className="flex w-full max-w-[1000px] flex-col rounded-md bg-white px-2 py-3 shadow-md">
                        <div className="flex w-full items-center justify-center gap-3 border-b pb-2 uppercase">
                           <h1 className="text-center text-lg font-medium text-teal-700">
                              {bill?.trip.regionFromName}
                           </h1>
                           <ArrowRightIcon className="h-4 w-4 stroke-teal-700" />
                           <h1 className="text-center text-lg font-medium text-teal-700">
                              {bill?.trip.regionToName}
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
                              {bill?.status === 'Success' &&
                                 'Mua vé xe thành công'}
                              {bill?.status === 'Pending' &&
                                 'Quá trình thanh toán đang được xử lí'}
                           </h1>
                           <p className="py-2 text-center">
                              <span className="text-orange-600">
                                 FUTA Bus Lines{' '}
                              </span>
                              đã gửi thông tin vé đã đặt về địa chỉ email{' '}
                              <span className="italic">
                                 {bill?.passengerEmail}
                              </span>
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
                                    <h5>{bill?.passengerName}</h5>
                                 </div>
                                 <div className="flex w-full justify-between">
                                    <span className="min-w-[100px] text-gray-600">
                                       Số điện thoại
                                    </span>
                                    <h5>{bill?.passengerPhone}</h5>
                                 </div>
                                 <div className="flex w-full justify-between">
                                    <span className="min-w-[100px] text-gray-600">
                                       Email
                                    </span>
                                    <h5
                                       className="truncate"
                                       title={bill?.passengerEmail}
                                    >
                                       {bill?.passengerEmail}
                                    </h5>
                                 </div>
                              </div>
                              <div className="flex h-full flex-1 flex-col gap-2">
                                 <div className="flex w-full justify-between">
                                    <span className="min-w-[100px] text-gray-600">
                                       Tổng tiền
                                    </span>
                                    <h5 className="font-medium text-orange-600">
                                       {formatVND(bill.totalPrice!)}
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
                                          'text-teal-600':
                                             bill?.status === 'Success',
                                       })}
                                    >
                                       {bill?.status === 'Success' &&
                                          'Đã thanh toán'}
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
                                          {bill?.trip.locationFromName} -{' '}
                                          {bill?.trip.locationToName}
                                       </h5>
                                    </div>
                                    <div className="flex w-full justify-between">
                                       <span className="text-gray-600">
                                          Ngày đi
                                       </span>
                                       {formatDate(bill?.trip.startTime)} |{' '}
                                       {formatTime(bill?.trip.startTime)}
                                    </div>
                                    <div className="flex w-full justify-between">
                                       <span className="text-gray-600">
                                          Ghế
                                       </span>
                                       <h5 className={'text-sky-600'}>
                                          {bill?.tickets
                                             .map((ticket) => ticket.seatName)
                                             .join(', ')}
                                       </h5>
                                    </div>
                                 </div>

                                 {bill?.roundTrip?.id && (
                                    <div className="flex h-full flex-1 flex-col gap-2 rounded-md border-l-[6px] border-teal-600 py-1 pl-4">
                                       <div className="mb-2 text-left">
                                          <h2 className="text-left font-medium uppercase">
                                             Vé về
                                          </h2>
                                          <h5 className="text-teal-700">
                                             {bill?.trip.locationToName}
                                             {' - '}
                                             {bill?.trip.locationFromName}
                                          </h5>
                                       </div>
                                       <div className="flex w-full justify-between">
                                          <span className="text-gray-600">
                                             Ngày đi
                                          </span>
                                          <h5>
                                             {formatDate(
                                                bill?.roundTrip.trip.startTime
                                             )}{' '}
                                             |
                                             {formatTime(
                                                bill?.roundTrip.trip.startTime
                                             )}
                                          </h5>
                                       </div>
                                       <div className="flex w-full justify-between">
                                          <span className="text-gray-600">
                                             Ghế
                                          </span>
                                          <h5 className={'text-sky-600'}>
                                             {bill?.roundTrip.tickets
                                                .map(
                                                   (ticket) => ticket.seatName
                                                )
                                                .join(', ')}
                                          </h5>
                                       </div>
                                    </div>
                                 )}
                              </div>
                              {bill?.status === 'Pending' && (
                                 <Link
                                    className="mx-auto w-fit rounded-full bg-sky-500 px-12 py-2 text-white"
                                    href={bill?.paymentUrl}
                                 >
                                    Thanh toán
                                 </Link>
                              )}
                           </div>
                        </div>
                     </div>
                  </div>
               ) : (
                  <h1 className="italic text-gray-700">
                     Không tìm thấy hóa đơn.
                  </h1>
               )}
            </div>
         </div>
      </div>
   )
}

export default Page
