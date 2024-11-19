/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { TType } from '@/components/pages/booking/trips'
import { END_POINTS } from '@/constants/endpoints'
import { IRegion } from '@/model/region'
import { ILocation } from '@/model/trips'
import { getRegions } from '@/service/region'
import { createContext, useContext, useState, ReactNode } from 'react'
import useSWR from 'swr'
import { useRegions } from './region-context'
import { useSearchParams } from 'next/navigation'

// Định nghĩa kiểu dữ liệu cho context
interface ScheduleContextType {
   totalTrips: number
   from: string
   to: string
   setTotalTrips: (total: number) => void
}

// Tạo context
const ScheduleContext = createContext<ScheduleContextType | null>(null)

// Provider để quản lý dữ liệu trong context
export const ScheduleProvider = ({ children }: { children: ReactNode }) => {
   const searchParams = useSearchParams()
   const [totalTrips, setTotal] = useState<number>(0)
   const params = {
      from: searchParams.get('from') || '',
      to: searchParams.get('to') || '',
   }
   const { regions } = useRegions()

   const from =
      regions?.find((region) => region.slug === params.from)?.name || ''
   const to = regions?.find((region) => region.slug === params.to)?.name || ''

   const setTotalTrips = (t: number) => {
      setTotal(t)
   }

   return (
      <ScheduleContext.Provider value={{ from, to, totalTrips, setTotalTrips }}>
         {children}
      </ScheduleContext.Provider>
   )
}

// Custom hook để lấy dữ liệu từ BookingContext
export const useSchedule = () => {
   const context = useContext(ScheduleContext)
   if (!context)
      throw new Error('useSchedule phải được sử dụng trong RegionProvider')
   return context
}
