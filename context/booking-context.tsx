/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { TType } from '@/components/pages/booking/trips'
import { ILocation } from '@/model/trips'
import { createContext, useContext, useState, ReactNode } from 'react'

export interface IBookingState {
   ticketId: string
   seats: string[] | null
   from: string
   to: string
   duration: number
   distance: number
   date: string
}

// Định nghĩa kiểu dữ liệu cho context
interface BookingContextType {
   departureTicket: IBookingState | undefined
   destinationTicket: IBookingState | undefined
   handleSelectDeparture: (
      id: string,
      seats: string[] | null,
      from: string,
      to: string,
      duration: number,
      distance: number,
      date: string
   ) => void
   handleSelectDestination: (
      id: string,
      seats: string[] | null,
      from: string,
      to: string,
      duration: number,
      distance: number,
      date: string
   ) => void
   currentTripType: TType
   handleSelectTripType: (type: TType) => void
}

// Tạo context
const BookingContext = createContext<BookingContextType | null>(null)

// Provider để quản lý dữ liệu trong context
export const BookingProvider = ({ children }: { children: ReactNode }) => {
   const [departureTicket, setDeparture] = useState<IBookingState | undefined>()
   const [destinationTicket, setDestination] = useState<
      IBookingState | undefined
   >()
   const [currentTripType, setCurrentTripType] = useState<TType>('departure')

   const handleSelectDeparture = (
      id: string,
      seats: string[] | null,
      from: string,
      to: string,
      duration: number,
      distance: number,
      date: string
   ) => {
      setDeparture({
         ticketId: id,
         seats: seats,
         from: from,
         to: to,
         duration: duration,
         distance: distance,
         date: date,
      })
   }
   const handleSelectDestination = (
      id: string,
      seats: string[] | null,
      from: string,
      to: string,
      duration: number,
      distance: number,
      date: string
   ) => {
      setDestination({
         ticketId: id,
         seats: seats,
         from: from,
         to: to,
         duration: duration,
         distance: distance,
         date: date,
      })
   }
   const handleSelectTripType = (type: TType) => {
      setCurrentTripType(type)
   }

   return (
      <BookingContext.Provider
         value={{
            currentTripType,
            departureTicket,
            destinationTicket,
            handleSelectDeparture,
            handleSelectDestination,
            handleSelectTripType,
         }}
      >
         {children}
      </BookingContext.Provider>
   )
}

// Custom hook để lấy dữ liệu từ BookingContext
export const useBooking = () => {
   const context = useContext(BookingContext)
   if (!context)
      throw new Error('useBooking phải được sử dụng trong BookingProvider')
   return context
}
