/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { TType } from '@/components/pages/booking/trips'
import { END_POINTS } from '@/constants/endpoints'
import { IRegion } from '@/model/region'
import { ILocation } from '@/model/trips'
import { getRegions } from '@/service/region'
import { createContext, useContext, useState, ReactNode } from 'react'
import useSWR from 'swr'

// Định nghĩa kiểu dữ liệu cho context
interface RegionContextType {
   regions: IRegion[] | undefined
   isLoading: boolean
}

// Tạo context
const RegionContext = createContext<RegionContextType | null>(null)

// Provider để quản lý dữ liệu trong context
export const RegionProvider = ({ children }: { children: ReactNode }) => {
   const {
      data: regions,
      error,
      isLoading,
   } = useSWR(
      `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.REGION.ALL}`,
      getRegions
   )

   return (
      <RegionContext.Provider value={{ regions, isLoading }}>
         {children}
      </RegionContext.Provider>
   )
}

// Custom hook để lấy dữ liệu từ BookingContext
export const useRegions = () => {
   const context = useContext(RegionContext)
   if (!context)
      throw new Error('useBooking phải được sử dụng trong RegionProvider')
   return context
}
