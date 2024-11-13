/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, {
   ChangeEvent,
   memo,
   useCallback,
   useEffect,
   useState,
} from 'react'
import SelectLocation from './select-location'
import { IRegion } from '@/model/region'
import TripTypeSelector from './trip-type-selector.'
import { DatePicker } from './date-picker.'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { formatDate, parseDateFromParams } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'
export type TTripType = 'oneWay' | 'roundTrip'

// Lấy các query từ URL
const QuickBooking = ({ data }: { data: IRegion[] }) => {
   const router = useRouter()
   const searchParams = useSearchParams()

   // State lưu trữ thông tin form
   const [tripType, setTripType] = useState<TTripType>(
      (searchParams.get('type') as TTripType) || 'oneWay'
   )
   const [departure, setDeparture] = useState<string>(
      searchParams.get('from') || ''
   )
   const [destination, setDestination] = useState(searchParams.get('to') || '')
   const [fromTimeState, setFromTimeState] = useState<Date>(
      parseDateFromParams(searchParams.get('fromTime')) ?? new Date()
   )
   const [toTimeState, setToTimeState] = useState<Date>(
      parseDateFromParams(searchParams.get('toTime')) ?? new Date()
   )
   const [quantity, setQuantity] = useState<number>(
      Number(searchParams.get('ticketCount')) || 1
   )

   const handleSelectTripType = (type: TTripType) => {
      setTripType(type)
   }

   const handleSelectDeparture = (d: string) => {
      setDeparture(d)
   }

   const handleSelectDestination = (d: string) => {
      setDestination(d)
   }

   const handleSelectDepartureTime = (d: Date) => {
      setFromTimeState(d)
   }

   const swapLocations = () => {
      setDeparture(destination)
      setDestination(departure)
   }

   // Hàm xử lý khi bấm nút "Tìm chuyến xe"
   const handleSearch = () => {
      const query = {
         from: departure,
         fromTime: formatDate(String(fromTimeState)),
         to: destination,
         toTime: formatDate(String(toTimeState)),
         ticketCount: String(quantity),
         type: tripType,
      }

      const searchParams = new URLSearchParams(query).toString()
      const newUrl = `/dat-ve?${searchParams}`

      router.replace(newUrl)
   }
   console.log('re-render in quick booking:' + destination + '-' + departure)

   return (
      <div className="w-full px-2 py-10">
         <div className="container mx-auto flex flex-col items-start justify-start gap-5 rounded-xl border-2 border-sky-500 pb-10 shadow ring-8 ring-sky-100 lg:gap-10">
            <div className="hidden w-full overflow-hidden rounded-xl border-2 border-gray-200 shadow md:block">
               <img src="/banner.png" alt="23 năm vững tin và phát triển" />
            </div>
            <div className="relative flex w-full flex-col">
               <TripTypeSelector
                  tripType={tripType}
                  setTripType={handleSelectTripType}
               />
               <div className="flex h-full w-full items-center gap-2 border-b px-5 py-4 md:px-10">
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
                        handleSelect={handleSelectDeparture}
                        value={departure}
                     />
                     <button
                        className="mt-4 hidden md:block"
                        title="Đảo ngược điểm đi và điểm đến"
                        onClick={swapLocations}
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           fill="none"
                           className="size-10 rounded-full bg-white stroke-sky-600 p-2 shadow-md transition-transform duration-500 hover:rotate-180"
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
                        handleSelect={handleSelectDestination}
                        value={destination}
                     />
                  </div>
                  {/* Mobile swap button*/}
                  <div className="md:hidden">
                     <button
                        className="ml-1 sm:ml-2"
                        title="Đảo ngược điểm đi và điểm đến"
                        onClick={swapLocations}
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           fill="none"
                           className="size-6 stroke-gray-800 transition-transform duration-500 hover:rotate-180 sm:size-7"
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
               <div className="flex h-full w-full flex-col items-center gap-2 px-5 py-5 md:flex-row md:px-10">
                  <DatePicker
                     label="Ngày đi"
                     date={fromTimeState}
                     handleSelect={(date) =>
                        handleSelectDepartureTime(date as Date)
                     }
                  />
                  {tripType === 'roundTrip' && toTimeState !== undefined && (
                     <DatePicker
                        label="Ngày về"
                        date={toTimeState}
                        handleSelect={(date) => setToTimeState(date as Date)}
                     />
                  )}
                  <div className="flex h-full w-full flex-col items-start justify-start gap-1 md:w-fit">
                     <Label htmlFor="quantity" className="leading-5">
                        Số vé
                     </Label>
                     <Input
                        id="quantity"
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                           setQuantity(parseInt(e.target.value))
                        }
                     />
                  </div>
               </div>
               <div className="absolute top-[103%] flex w-full justify-center sm:top-[105%] lg:top-[106%]">
                  <button
                     className="rounded-full bg-blue-600 px-16 py-3 text-white"
                     onClick={() => handleSearch()}
                  >
                     Tìm chuyến xe
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default memo(QuickBooking)
