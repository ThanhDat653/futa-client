/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { ChangeEvent, memo, useState } from 'react'
import SelectLocation from './select-location'
import { IRegion } from '@/model/region'
import TripTypeSelector from './trip-type-selector.'
import { DatePicker } from './date-picker.'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { cn, formatDate, parseDateFromParams } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'
import { RegionProvider, useRegions } from '@/context/region-context'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { BookingFormData } from '@/model/booking'
import { bookingSchema } from '@/actions/bookingSchema'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Popover } from '@radix-ui/react-popover'
import { PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '../ui/calendar'
import { isBefore, startOfToday } from 'date-fns'
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from '../ui/select'
export type TTripType = 'oneWay' | 'roundTrip'

type BookingFormInputs = z.infer<typeof bookingSchema>

// Lấy các query từ URL
const QuickBooking = () => {
   const router = useRouter()
   const searchParams = useSearchParams()
   const { regions, isLoading } = useRegions()

   // // State lưu trữ thông tin form
   const [tripType, setTripType] = useState<TTripType>(
      (searchParams.get('type') as TTripType) || 'oneWay'
   )
   // const [departure, setDeparture] = useState<string>(
   //    searchParams.get('from') || ''
   // )
   // const [destination, setDestination] = useState(searchParams.get('to') || '')
   // const [fromTimeState, setFromTimeState] = useState<Date>(
   //    parseDateFromParams(searchParams.get('fromTime')) ?? new Date()
   // )
   // const [toTimeState, setToTimeState] = useState<Date>(
   //    parseDateFromParams(searchParams.get('toTime')) ?? new Date()
   // )
   // const [quantity, setQuantity] = useState<number>(
   //    Number(searchParams.get('ticketCount')) || 1
   // )

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<BookingFormData>({
      resolver: zodResolver(bookingSchema), // Tích hợp schema validation
   })

   const form = useForm<z.infer<typeof bookingSchema>>({
      resolver: zodResolver(bookingSchema),
      defaultValues: {
         from: searchParams.get('from') || '',
         fromDate:
            parseDateFromParams(searchParams.get('fromTime')) ?? new Date(),
         ticketCount: Number(searchParams.get('ticketCount')) || 1,
         to: searchParams.get('to') || '',
         toDate: parseDateFromParams(searchParams.get('toTime')) ?? new Date(),
      },
   })

   const handleSelectTripType = (type: TTripType) => {
      setTripType(type)
   }

   // const handleSelectDeparture = (d: string) => {
   //    setDeparture(d)
   // }

   // const handleSelectDestination = (d: string) => {
   //    setDestination(d)
   // }

   // const handleSelectDepartureTime = (d: Date) => {
   //    setFromTimeState(d)
   // }

   // const swapLocations = () => {
   //    setDeparture(destination)
   //    setDestination(departure)
   // }

   // Hàm xử lý khi bấm nút "Tìm chuyến xe"
   function onSubmit(data: z.infer<typeof bookingSchema>) {
      const query = {
         from: data.from,
         fromTime: formatDate(String(data.fromDate)),
         to: data.to,
         toTime: formatDate(String(data.toDate)),
         ticketCount: String(data.ticketCount),
         type: tripType,
      }
      const searchParams = new URLSearchParams(query).toString()
      const newUrl = `/dat-ve?${searchParams}`
      router.replace(newUrl)
   }

   return (
      <div className="w-full px-2 py-10">
         <div className="container mx-auto flex flex-col items-start justify-start gap-5 rounded-xl border-2 border-sky-500 pb-10 shadow ring-8 ring-sky-100 lg:gap-10">
            <div className="hidden w-full overflow-hidden rounded-xl border-2 border-gray-200 shadow md:block">
               <img src="/banner.png" alt="23 năm vững tin và phát triển" />
            </div>
            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="relative flex w-full flex-col"
               >
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
                        <FormField
                           control={form.control}
                           name="from"
                           render={({ field, fieldState }) => (
                              <SelectLocation
                                 field={field}
                                 label="Điểm đi"
                                 error={fieldState.error?.message}
                                 placeholder="Chọn điểm đi"
                                 array={regions!}
                                 name="departure"
                              />
                           )}
                        />
                        <button
                           className="mt-4 hidden md:block"
                           title="Đảo ngược điểm đi và điểm đến"
                           // onClick={swapLocations}
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
                        <FormField
                           control={form.control}
                           name="to"
                           render={({ field, fieldState }) => (
                              <SelectLocation
                                 field={field}
                                 label="Điểm đến"
                                 error={fieldState.error?.message}
                                 placeholder="Chọn điểm đến"
                                 array={regions!}
                                 name="destination"
                              />
                           )}
                        />
                     </div>
                     {/* Mobile swap button*/}
                     <div className="md:hidden">
                        <button
                           className="ml-1 sm:ml-2"
                           title="Đảo ngược điểm đi và điểm đến"
                           // onClick={swapLocations}
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
                  <div className="flex h-full w-full flex-col items-start gap-2 px-5 py-5 md:flex-row md:px-10">
                     <FormField
                        control={form.control}
                        name="fromDate"
                        render={({ field, fieldState }) => (
                           <DatePicker
                              field={field}
                              label="Ngày đi"
                              error={fieldState.error?.message}
                           />
                        )}
                     />
                     {tripType === 'roundTrip' && (
                        <FormField
                           control={form.control}
                           name="toDate"
                           render={({ field, fieldState }) => (
                              <DatePicker
                                 field={field}
                                 label="Ngày về"
                                 error={fieldState.error?.message}
                              />
                           )}
                        />
                     )}
                     <div className="flex h-full w-full flex-col items-start justify-start gap-1 md:w-fit">
                        <FormField
                           control={form.control}
                           name="ticketCount"
                           render={({ field, fieldState }) => (
                              <FormItem>
                                 <FormLabel>Số vé</FormLabel>
                                 <FormControl>
                                    <Input min={1} {...field} type="number" />
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
                     </div>
                  </div>
                  <div className="absolute top-[103%] flex w-full justify-center sm:top-[105%] lg:top-[106%]">
                     <button
                        className="rounded-full bg-blue-600 px-16 py-3 text-white"
                        type="submit"
                     >
                        Tìm chuyến xe
                     </button>
                  </div>
               </form>
            </Form>
         </div>
      </div>
   )
}

export default memo(QuickBooking)
