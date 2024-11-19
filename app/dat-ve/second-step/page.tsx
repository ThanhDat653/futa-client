/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { TTripType } from '@/components/booking/quick-booking'
import SeatMap from '@/components/pages/booking/seat-map'
import { SummaryCard } from '@/components/pages/booking/trip-summary'
import { useBooking } from '@/context/booking-context'
import { useRegions } from '@/context/region-context'
import { useSchedule } from '@/context/schedule-context'
import {
   formatDate,
   formatDistance,
   formatDuration,
   formatTime,
} from '@/lib/utils'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const SecondStep = () => {
   const searchParams = useSearchParams()
   const params = {
      type: searchParams.get('type') as TTripType,
      fromTime: searchParams.get('fromTime') || '',
      toTime: searchParams.get('toTime') || '',
   }
   const { destinationTicket, departureTicket, step } = useBooking()
   const { from, to } = useSchedule()

   console.log(destinationTicket)
   return (
      <div className="mt-[120px] w-full">
         <div className="w-full bg-slate-50 py-10">
            <div className="container mx-auto w-full bg-slate-50 lg:grid lg:grid-cols-3 lg:gap-5">
               <div className="flex h-fit flex-col items-center justify-center gap-4 bg-white p-5 rounded-md shadow-md md:col-span-3 lg:col-span-2">
                  <div className="flex w-full items-center justify-center gap-3 rounded-lg">
                     <div className="flex flex-col gap-1">
                        <h1 className="font-medium text-slate-800">Chọn ghế</h1>
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
                     <div className="flex flex-col gap-1">
                        <h1 className="font-medium text-slate-800">Chọn ghế</h1>
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
                  </div>
                  <div className="flex gap-10">
                     <div className="flex items-center justify-center gap-2">
                        <div
                           className={
                              'size-5 rounded-md border-2 border-slate-200 bg-slate-100'
                           }
                        ></div>
                        <span className="text-sm text-slate-700">Đã bán</span>
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
               <div className="col-span-1 hidden h-fit flex-col items-start justify-start gap-4 rounded-lg lg:flex">
                  <div className="flex w-full flex-col gap-4 rounded-md bg-white p-5 shadow-md">
                     <h1 className="font-medium text-slate-700">
                        Thông tin chuyến đi
                     </h1>
                     <div
                        className={'flex h-fit w-full flex-col border-t py-5'}
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
                     <div className="flex w-full flex-col gap-4 rounded-md bg-white p-5 shadow-md">
                        <h1 className="font-medium text-slate-700">
                           Thông tin chuyến về
                        </h1>
                        <div
                           className={
                              'flex h-fit w-full flex-col border-t py-5'
                           }
                        >
                           <div className="flex items-center justify-between pb-2">
                              <h3 className="font-medium text-gray-700">
                                 {formatTime(destinationTicket?.startTime || '')}
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
                                       {formatDate(destinationTicket?.date || '')}
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
               </div>
            </div>
         </div>
      </div>
   )
}

export default SecondStep
