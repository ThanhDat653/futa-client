/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { TTripType } from '@/components/booking/quick-booking'
import SeatMap from '@/components/pages/booking/seat-map'
import { SummaryCard } from '@/components/pages/booking/trip-summary'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { END_POINTS } from '@/constants/endpoints'
import { useBooking } from '@/context/booking-context'
import { useSchedule } from '@/context/schedule-context'
import {
   formatDate,
   formatDistance,
   formatDuration,
   formatTime,
   formatVND,
} from '@/lib/utils'
import { IBill } from '@/model/bill'
import { createPaymentURL } from '@/service/bill'
import { getUserInfo } from '@/service/profile'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

const SecondStep = () => {
   const searchParams = useSearchParams()
   const { data: userInfo } = useSWR(
      `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.PROFILE.URl}/${END_POINTS.PROFILE.CHILD.INFO}`,
      getUserInfo
   )
   const params = {
      type: searchParams.get('type') as TTripType,
      fromTime: searchParams.get('fromTime') || '',
      toTime: searchParams.get('toTime') || '',
   }
   const { destinationTicket, departureTicket, step, handleSetStep } =
      useBooking()
   const { from, to } = useSchedule()
   const [accept, setAccept] = useState<boolean>(false)

   const toggleAccept = () => {
      setAccept(!accept)
   }

   const handleSubmitPayment = async () => {
      if (departureTicket) {
         const data: IBill = {
            passengerEmail: userInfo?.email || '',
            passengerName: userInfo?.fullname || '',
            passengerPhone: userInfo?.phoneNumber || '',
            trip: {
               seats: departureTicket?.seats.map((s) => s.name),
               tripId: departureTicket?.ticketId,
            },
         }

         const url = await createPaymentURL(data)
      }
   }

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <div className="w-full">
         <div className="mt-[112px] w-full bg-sky-600">
            <div className="container relative mx-auto py-5 text-white">
               <div className="flex flex-col items-center justify-center gap-0">
                  <h1 className="text-center text-2xl">{`${from} - ${to}`}</h1>
                  <h3>{params.fromTime}</h3>
               </div>
               <div className="absolute left-0 top-0 flex h-full cursor-pointer items-center justify-center hover:underline">
                  <span className="text-sm" onClick={() => handleSetStep(1)}>
                     Quay lại
                  </span>
               </div>
            </div>
         </div>
         <div className="w-full bg-slate-50 py-10">
            <div className="container mx-auto w-full lg:grid lg:grid-cols-3 lg:gap-5">
               <div className="flex h-fit flex-col items-center justify-center gap-5 md:col-span-3 lg:col-span-2">
                  <div className="flex h-fit w-full flex-col items-center justify-center gap-4 rounded-md border border-gray-100 bg-white p-5 shadow-md">
                     <div className="flex w-full items-center justify-center gap-3 rounded-lg">
                        <div className="flex flex-1 flex-col gap-1">
                           <h1 className="text-lg font-medium text-slate-800">
                              Chọn ghế
                           </h1>
                           <span className="w-full text-left text-sm italic text-slate-700">
                              Chuyến đi {params.fromTime}
                           </span>
                           <div className="flex justify-between">
                              <div className="flex flex-col items-center justify-center">
                                 {departureTicket?.ticketId && (
                                    <SeatMap
                                       handleSelectTrip={() => {}}
                                       id={departureTicket.ticketId!}
                                       step={step}
                                    />
                                 )}
                              </div>
                           </div>
                        </div>
                        {params.type === 'roundTrip' && (
                           <div className="flex flex-1 flex-col gap-1">
                              <h1 className="text-lg font-medium text-slate-800">
                                 Chọn ghế
                              </h1>
                              <span className="w-full text-left text-sm italic text-slate-700">
                                 Chuyến về {params.toTime}
                              </span>
                              <div className="flex flex-col items-center justify-center">
                                 {params.type === 'roundTrip' &&
                                    destinationTicket?.ticketId && (
                                       <SeatMap
                                          step={step}
                                          handleSelectTrip={() => {}}
                                          id={destinationTicket.ticketId!}
                                       />
                                    )}
                              </div>
                           </div>
                        )}
                     </div>
                     <div className="flex gap-10 py-1">
                        <div className="flex items-center justify-center gap-2">
                           <div
                              className={
                                 'size-5 rounded-md border-2 border-slate-200 bg-slate-100'
                              }
                           ></div>
                           <span className="text-sm text-slate-700">
                              Đã bán
                           </span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                           <div
                              className={
                                 'size-5 rounded-md border-2 border-sky-500 bg-sky-100'
                              }
                           ></div>
                           <span className="text-sm text-slate-700">
                              Còn trống
                           </span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                           <div
                              className={
                                 'size-5 rounded-md border-2 border-orange-500 bg-orange-100'
                              }
                           ></div>
                           <span className="text-sm text-slate-700">
                              Đang chọn
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="flex h-fit w-full flex-col items-start justify-start gap-5 rounded-md border border-gray-100 bg-white p-5 shadow-md">
                     <div className="flex h-fit w-full items-start justify-start">
                        <div className="flex w-full flex-col gap-5 rounded-md">
                           <h1 className="h-full text-lg font-medium text-slate-700">
                              Thông tin khách hàng
                           </h1>
                           <div className="flex flex-col items-start justify-between gap-5">
                              <div className="grid w-full max-w-sm items-center gap-2">
                                 <Label
                                    htmlFor="name"
                                    className="text-gray-600"
                                 >
                                    Họ và tên{' '}
                                    <span className="text-orange-700">*</span>
                                 </Label>
                                 <Input
                                    type="name"
                                    id="name"
                                    placeholder="Nguyen Van A"
                                    className="md:h-11"
                                    value={userInfo?.fullname}
                                 />
                              </div>
                              <div className="grid w-full max-w-sm items-center gap-2">
                                 <Label
                                    htmlFor="email"
                                    className="text-gray-600"
                                 >
                                    Email{' '}
                                    <span className="text-orange-700">*</span>
                                 </Label>
                                 <Input
                                    type="email"
                                    id="email"
                                    placeholder="Example@gmail.com"
                                    className="md:h-11"
                                    value={userInfo?.email}
                                 />
                              </div>
                              <div className="grid w-full max-w-sm items-center gap-2">
                                 <Label
                                    htmlFor="phone"
                                    className="text-gray-600"
                                 >
                                    Số điện thoại{' '}
                                    <span className="text-orange-700">*</span>
                                 </Label>
                                 <Input
                                    type="phone"
                                    id="phone"
                                    placeholder="Nhập số điện thoại"
                                    className="md:h-11"
                                    value={userInfo?.phoneNumber}
                                 />
                              </div>
                           </div>
                        </div>
                        <div className="flex w-full flex-col gap-3 rounded-md">
                           <h1 className="text-center text-lg uppercase text-orange-600">
                              Điều khoản & lưu ý
                           </h1>
                           <div className="flex flex-col gap-3">
                              <p className="text-slate-900">
                                 (*) Quý khách vui lòng có mặt tại bến xuất phát
                                 của xe trước ít nhất 30 phút giờ xe khởi hành,
                                 mang theo thông báo đã thanh toán vé thành công
                                 có chứa mã vé được gửi từ hệ thống FUTA BUS
                                 LINES. Vui lòng liên hệ Trung tâm tổng đài{' '}
                                 <span className="text-orange-600">
                                    1900 6067
                                 </span>{' '}
                                 để được hỗ trợ.
                              </p>
                              <p className="text-slate-900">
                                 (*) Nếu quý khách có nhu cầu trung chuyển, vui
                                 lòng liên hệ Tổng đài trung chuyển{' '}
                                 <span className="text-orange-600">
                                    1900 6918
                                 </span>{' '}
                                 trước khi đặt vé. Chúng tôi không đón/trung
                                 chuyển tại những điểm xe trung chuyển không thể
                                 tới được.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="flex items-center space-x-2 py-1">
                        <Checkbox
                           id="terms"
                           className="size-5 border-gray-500 ring-offset-white hover:border-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500 data-[state=checked]:text-white"
                           onClick={toggleAccept}
                           checked={accept}
                        />
                        <label
                           htmlFor="terms"
                           className="text-sm text-gray-900"
                        >
                           <span className="text-orange-600 underline">
                              Chấp nhận điều khoản đặt vé{' '}
                           </span>{' '}
                           và chính sách bảo mật thông tin của FUTA Bus Lines.
                        </label>
                     </div>
                  </div>
               </div>
               <div className="col-span-1 hidden h-fit flex-col items-start justify-start gap-3 rounded-lg lg:flex">
                  <div className="flex w-full flex-col gap-4 rounded-md border border-gray-100 bg-white p-5 shadow-md">
                     <h1 className="text-lg font-medium text-slate-800">
                        Thông tin chuyến đi
                     </h1>
                     <div
                        className={'flex h-fit w-full flex-col border-t pt-5'}
                     >
                        <div className="flex items-center justify-between pb-2">
                           <h3 className="font-medium text-gray-700">
                              {formatTime(departureTicket?.startTime || '')}
                           </h3>
                           <div className="flex flex-1 items-center justify-between gap-1 px-2">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 className="size-5 stroke-teal-600"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                              >
                                 <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                 <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"></path>
                              </svg>

                              <span className="flex-1 border-t-2 border-dotted"></span>

                              <div className="flex flex-col items-center justify-center gap-1 px-2">
                                 <p className="text-sm font-medium text-slate-500">
                                    {formatDuration(
                                       departureTicket?.duration || 0
                                    )}
                                 </p>
                                 <p className="text-sm text-slate-500">
                                    {formatDistance(
                                       departureTicket?.distance || 0
                                    )}
                                 </p>
                              </div>

                              <span className="flex-1 border-t-2 border-dotted"></span>

                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 className="size-5 stroke-orange-500"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                              >
                                 <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                 <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                              </svg>
                           </div>
                           <h3 className="font-medium text-gray-700">
                              {formatTime(departureTicket?.endTime || '')}
                           </h3>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                           <div className="flex flex-1 flex-col gap-2">
                              <div className="flex justify-between gap-2">
                                 <span className="text-slate-500">Ngày</span>
                                 <span className="font-medium text-slate-700">
                                    {formatDate(departureTicket?.date || '')}
                                 </span>
                              </div>
                              <div className="flex justify-between gap-2">
                                 <span className="text-slate-500">
                                    Tuyến xe
                                 </span>
                                 <span className="font-medium text-teal-700">
                                    {departureTicket?.from} -{' '}
                                    {departureTicket?.to}
                                 </span>
                              </div>
                              <div className="flex items-center justify-between text-sm text-gray-700 sm:text-base">
                                 <div className="text-gray-500">Ghế</div>
                                 <span className="text-sky-600">
                                    {departureTicket?.seats
                                       .map((s) => s.name)
                                       .join(', ')}
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {params.type === 'roundTrip' && (
                     <div className="flex w-full flex-col gap-4 rounded-md border border-gray-100 bg-white p-5 shadow-md">
                        <h1 className="text-lg font-medium text-slate-800">
                           Thông tin chuyến về
                        </h1>
                        <div
                           className={
                              'flex h-fit w-full flex-col border-t py-5'
                           }
                        >
                           <div className="flex items-center justify-between pb-2">
                              <h3 className="font-medium text-gray-700">
                                 {formatTime(
                                    destinationTicket?.startTime || ''
                                 )}
                              </h3>
                              <div className="flex flex-1 items-center justify-between gap-1 px-2">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="size-5 stroke-teal-600"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                 >
                                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                    <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"></path>
                                 </svg>

                                 <span className="flex-1 border-t-2 border-dotted"></span>

                                 <div className="flex flex-col items-center justify-center gap-1 px-2">
                                    <p className="text-sm font-medium text-slate-500">
                                       {formatDuration(
                                          destinationTicket?.duration || 0
                                       )}
                                    </p>
                                    <p className="text-sm text-slate-500">
                                       {formatDistance(
                                          destinationTicket?.distance || 0
                                       )}
                                    </p>
                                 </div>

                                 <span className="flex-1 border-t-2 border-dotted"></span>

                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="size-5 stroke-orange-500"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                 >
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                                 </svg>
                              </div>
                              <h3 className="font-medium text-gray-700">
                                 {formatTime(destinationTicket?.endTime || '')}
                              </h3>
                           </div>
                           <div className="flex items-center justify-start gap-2">
                              <div className="flex flex-1 flex-col gap-2">
                                 <div className="flex justify-between gap-2">
                                    <span className="text-slate-500">Ngày</span>
                                    <span className="font-medium text-slate-700">
                                       {formatDate(
                                          destinationTicket?.date || ''
                                       )}
                                    </span>
                                 </div>
                                 <div className="flex justify-between gap-2">
                                    <span className="text-slate-500">
                                       Tuyến xe
                                    </span>
                                    <span className="font-medium text-teal-700">
                                       {destinationTicket?.from} -{' '}
                                       {destinationTicket?.to}
                                    </span>
                                 </div>
                                 <div className="flex items-center justify-between text-sm text-gray-700 sm:text-base">
                                    <div className="text-gray-500">Ghế</div>
                                    <span className="text-sky-600">
                                       {destinationTicket?.seats
                                          .map((s) => s.name)
                                          .join(', ')}
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  )}
                  <div className="flex w-full flex-col gap-4 rounded-md border border-gray-100 bg-white p-5 shadow-md">
                     <h1 className="text-lg font-medium text-slate-800">
                        Chi tiết giá
                     </h1>
                     <div
                        className={'flex h-fit w-full flex-col border-t pt-5'}
                     >
                        <div className="flex items-center justify-start gap-2">
                           <div className="flex flex-1 flex-col gap-2">
                              <div className="flex justify-between gap-2">
                                 <span className="text-slate-500">
                                    Giá vé lượt đi
                                 </span>
                                 <span className="font-medium text-slate-700">
                                    {formatVND(
                                       departureTicket?.seats.reduce(
                                          (sum, seat) => sum + seat.price,
                                          0
                                       ) || 0
                                    )}
                                 </span>
                              </div>
                              {params.type === 'roundTrip' && (
                                 <div className="flex justify-between gap-2">
                                    <span className="text-slate-500">
                                       Giá vé lượt về
                                    </span>
                                    <span className="font-medium text-slate-700">
                                       {formatVND(
                                          destinationTicket?.seats.reduce(
                                             (sum, seat) => sum + seat.price,
                                             0
                                          ) || 0
                                       )}
                                    </span>
                                 </div>
                              )}
                              <div className="flex justify-between gap-2">
                                 <span className="text-slate-500">
                                    Phí thanh toán
                                 </span>
                                 <span className="font-medium text-slate-700">
                                    0đ
                                 </span>
                              </div>

                              <div className="flex items-center justify-between border-t border-gray-100 pt-2 text-sm text-gray-700 sm:text-base">
                                 <div className="text-gray-500">Tổng tiền</div>
                                 <span className="font-medium text-orange-600">
                                    {formatVND(
                                       (departureTicket?.seats.reduce(
                                          (sum, seat) => sum + seat.price,
                                          0
                                       ) || 0) +
                                          (destinationTicket?.seats.reduce(
                                             (sum, seat) => sum + seat.price,
                                             0
                                          ) || 0)
                                    )}
                                 </span>
                              </div>
                              <div className="mt-2 flex w-full items-center justify-center gap-2">
                                 <button
                                    className="flex-1 rounded-md border-2 py-2 text-gray-500 hover:bg-gray-100"
                                    onClick={() => handleSetStep(1)}
                                 >
                                    Huỷ
                                 </button>
                                 <button
                                    disabled={!accept}
                                    className="flex-1 rounded-md border-2 border-orange-500 py-2 text-orange-600 hover:bg-orange-600 hover:text-white"
                                    onClick={handleSubmitPayment}
                                 >
                                    Thanh toán
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SecondStep
