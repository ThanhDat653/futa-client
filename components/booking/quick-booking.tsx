/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useEffect, useState } from 'react'
import SelectLocation from './select-location'
import { IRegion } from '@/model/region'
import { getRegions } from '@/service/region'
import TripTypeSelector from './trip-type-selector.'
import { DatePicker } from './date-picker.'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const QuickBooking = ({ data }: { data: IRegion[] }) => {
   return (
      <div className="w-full px-2 py-10">
         <div className="container mx-auto flex flex-col items-start justify-start gap-5 rounded-xl border-2 border-sky-500 pb-10 shadow ring-8 ring-sky-100 lg:gap-10">
            <div className="hidden w-full overflow-hidden rounded-xl border-2 border-gray-200 shadow md:block">
               <img src="/banner.png" alt="23 năm vững tin và phát triển" />
            </div>
            <div className="flex w-full flex-col relative">
               <TripTypeSelector />
               <div className="flex h-full w-full items-center gap-2 border-b px-5 py-4">
                  <div className="flex h-[112px] flex-col items-center justify-between py-4 md:hidden">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-5 stroke-gray-600 sm:size-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                     >
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"></path>
                     </svg>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-5 stroke-gray-400 sm:size-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width={24}
                        height={24}
                        strokeWidth={1}
                     >
                        {' '}
                        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>{' '}
                        <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>{' '}
                        <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>{' '}
                     </svg>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-5 stroke-cyan-600 sm:size-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width="24"
                        height="24"
                        strokeWidth="1.5"
                     >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                     </svg>
                  </div>

                  <div className="flex w-full flex-col md:flex-row md:gap-5">
                     <SelectLocation
                        label="Điểm đi"
                        name="departure"
                        placeholder="Chọn điểm đi"
                        array={data}
                     />
                     <button
                        className="mt-4 hidden md:block"
                        title="Đảo ngược điểm đi và điểm đến"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           fill="none"
                           className="size-10 rounded-full bg-white stroke-sky-600 p-2 shadow-md"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                        >
                           <path d="M7 10h14l-4 -4" />{' '}
                           <path d="M17 14h-14l4 4" />
                        </svg>
                     </button>
                     <SelectLocation
                        label="Điểm đến"
                        name="destination"
                        placeholder="Chọn điểm đến"
                        array={data}
                     />
                  </div>
                  {/* Mobile swap button*/}
                  <div className="md:hidden">
                     <button
                        className="ml-1 sm:ml-2"
                        title="Đảo ngược điểm đi và điểm đến"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           fill="none"
                           className="size-6 stroke-gray-800 sm:size-7"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           width={24}
                           height={24}
                           strokeWidth={1.8}
                        >
                           {' '}
                           <path d="M3 8l4 -4l4 4"></path>{' '}
                           <path d="M7 4l0 9"></path>{' '}
                           <path d="M13 16l4 4l4 -4"></path>{' '}
                           <path d="M17 10l0 10"></path>{' '}
                        </svg>
                     </button>
                  </div>
               </div>
               <div className="flex h-full w-full flex-col items-center gap-2 border-b px-5 py-4 md:flex-row">
                  <DatePicker label="Ngày đi" />
                  <DatePicker label="Ngày về" />
                  <div className="w-full md:w-fit flex flex-col justify-start items-start gap-1 h-full">
                     <Label htmlFor="quantity" className='leading-5'>Số vé</Label>
                     <Input id="quantity" type="number" min={1} defaultValue={1}/>
                  </div>
               </div>
               <div className='absolute top-[103%] w-full flex justify-center'>
                  <button className='bg-blue-600 px-16 py-3 text-white rounded-full'>
                     Tìm chuyến xe
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default QuickBooking

// <svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
//   <path d="M21 17l-18 0"></path>
//   <path d="M6 10l-3 -3l3 -3"></path>
//   <path d="M3 7l18 0"></path>
//   <path d="M18 20l3 -3l-3 -3"></path>
// </svg>

// updown
{
   /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M3 9l4 -4l4 4m-4 -4v14"></path> <path d="M21 15l-4 4l-4 -4m4 4v-14"></path> </svg>  */
}
