/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { TType } from '@/components/pages/booking/trips'
import { ILocation } from '@/model/trips'
import { createContext, useContext, useState, ReactNode } from 'react'

export type TBookingStep = 1 | 2

export interface IBookingState {
   ticketId: string
   seats: { id: number; name: string; price: number }[] | []
   from: string
   to: string
   duration: number
   distance: number
   date: string
   startTime: string
   endTime: string
}

// Định nghĩa kiểu dữ liệu cho context
interface BookingContextType {
   step: TBookingStep
   departureTicket: IBookingState | undefined
   destinationTicket: IBookingState | undefined
   handleSetStep: (step: TBookingStep) => void
   handleSelectDeparture: (
      id: string,
      seats: { id: number; name: string; price: number }[] | [],
      from: string,
      to: string,
      duration: number,
      distance: number,
      date: string,
      startTime: string,
      endTime: string
   ) => void
   handleSelectDestination: (
      id: string,
      seats: { id: number; name: string; price: number }[] | [],
      from: string,
      to: string,
      duration: number,
      distance: number,
      date: string,
      startTime: string,
      endTime: string
   ) => void
   currentTripType: TType
   handleSelectTripType: (type: TType) => void
   handleToggleSeat: (
      ticketId: string,
      seatId: number,
      seatName: string,
      price: number
   ) => void
}

// Tạo context
const BookingContext = createContext<BookingContextType | null>(null)

// Provider để quản lý dữ liệu trong context
export const BookingProvider = ({ children }: { children: ReactNode }) => {
   const [step, setStep] = useState<TBookingStep>(1)
   const [departureTicket, setDeparture] = useState<IBookingState | undefined>()
   const [destinationTicket, setDestination] = useState<
      IBookingState | undefined
   >()
   const [currentTripType, setCurrentTripType] = useState<TType>('departure')

   const handleSetStep = (s: TBookingStep) => {
      setStep(s)
   }

   const handleSelectDeparture = (
      id: string,
      seats: { id: number; name: string; price: number }[] | [],
      from: string,
      to: string,
      duration: number,
      distance: number,
      date: string,
      startTime: string,
      endTime: string
   ) => {
      setDeparture({
         ticketId: id,
         seats: seats,
         from: from,
         to: to,
         duration: duration,
         distance: distance,
         date: date,
         startTime: startTime,
         endTime: endTime,
      })
   }

   const handleSelectDestination = (
      id: string,
      seats: { id: number; name: string; price: number }[] | [],
      from: string,
      to: string,
      duration: number,
      distance: number,
      date: string,
      startTime: string,
      endTime: string
   ) => {
      setDestination({
         ticketId: id,
         seats: seats,
         from: from,
         to: to,
         duration: duration,
         distance: distance,
         date: date,
         startTime: startTime,
         endTime: endTime,
      })
   }

   const handleSelectTripType = (type: TType) => {
      setCurrentTripType(type)
   }

   const handleToggleSeat = (
      ticketId: string,
      seatId: number,
      seatName: string,
      price: number
   ) => {
      const updateSeats = (
         setTicket: React.Dispatch<
            React.SetStateAction<IBookingState | undefined>
         >
      ) => {
         setTicket((prev) => {
            // Nếu ticket không tồn tại hoặc ticketId không khớp, giữ nguyên state
            if (!prev || prev.ticketId !== ticketId) return prev

            // Đảm bảo seats luôn là mảng
            const currentSeats = Array.isArray(prev.seats) ? prev.seats : []

            // Kiểm tra ghế đã tồn tại hay chưa
            const isSeatSelected = currentSeats.some(
               (seat) => seat.id === seatId
            )

            // Tạo mảng ghế mới
            const updatedSeats = isSeatSelected
               ? currentSeats.filter((seat) => seat.id !== seatId) // Xóa ghế nếu đã chọn
               : [...currentSeats, { id: seatId, name: seatName, price: price }] // Thêm ghế nếu chưa chọn

            return {
               ...prev,
               seats: updatedSeats,
            }
         })
      }

      // Kiểm tra ticket để cập nhật đúng state
      if (departureTicket?.ticketId === ticketId) {
         updateSeats(setDeparture)
      } else if (destinationTicket?.ticketId === ticketId) {
         updateSeats(setDestination)
      }
   }

   return (
      <BookingContext.Provider
         value={{
            step,
            currentTripType,
            departureTicket,
            destinationTicket,
            handleSetStep,
            handleSelectDeparture,
            handleSelectDestination,
            handleSelectTripType,
            handleToggleSeat,
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
