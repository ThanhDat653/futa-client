/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { IVehicle } from '@/model/vehicle'
import React, { memo, useCallback, useState } from 'react'
import { floor } from '@/model/seat'
import { departureTime } from '@/model/trips'
import FilterGroup from './filter-group'
import { useRouter, useSearchParams } from 'next/navigation'

const Filter = ({ data }: { data: IVehicle[] }) => {
   const router = useRouter()
   const searchParams = useSearchParams()
   const params = {
      timeInDay: searchParams.get('timeInDay'),
      floorNo: searchParams.get('floorNo'),
      vehicleType: searchParams.get('vehicleType'),
   }
   const { floorNo, timeInDay, vehicleType } = params

   const removeFilter = useCallback(() => {
      const filterParams = new URLSearchParams(searchParams.toString())
      filterParams.delete('timeInDay')
      filterParams.delete('vehicleType')
      filterParams.delete('floorNo')
      router.replace(`?${filterParams.toString()}`)
   }, [searchParams, router])
   return (
      <aside className="col-span-1 hidden h-fit flex-col items-start justify-start rounded-lg bg-white shadow-md lg:flex">
         <div className="flex w-full items-center justify-between px-5 pt-5">
            <h1 className="text-lg font-medium text-gray-800">
               Bộ lọc tìm kiếm
            </h1>
            <div
               className="flex cursor-pointer items-center gap-1 rounded-md px-2 lg:hover:bg-red-50"
               onClick={() => removeFilter()}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 stroke-red-600"
                  strokeWidth={2}
               >
                  {' '}
                  <path d="M4 7l16 0"></path> <path d="M10 11l0 6"></path>{' '}
                  <path d="M14 11l0 6"></path>{' '}
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>{' '}
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>{' '}
               </svg>
               <span className="text-sm text-red-600">Hủy lọc</span>
            </div>
         </div>
         <FilterGroup
            title="Giờ đi"
            options={departureTime}
            selectedOptions={timeInDay}
            key="timeInDay"
            paramName="timeInDay"
         />

         <FilterGroup
            title="Loại xe"
            options={data}
            selectedOptions={vehicleType}
            key="vehicleType"
            paramName="vehicleType"
         />

         <FilterGroup
            title="Tầng"
            options={floor}
            selectedOptions={floorNo}
            key="floor"
            paramName="floorNo"
         />
      </aside>
   )
}

export default memo(Filter)
