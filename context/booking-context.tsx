'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

// Định nghĩa kiểu dữ liệu cho context
interface BookingContextType {
   ticket: { ticketId: string | null; seats: string[] | null }[]
   setTicket: React.Dispatch<
      React.SetStateAction<
         { ticketId: string | null; seats: string[] | null }[]
      >
   >
}

// Tạo context
const BookingContext = createContext<BookingContextType | null>(null)

// Provider để quản lý dữ liệu trong context
export const BookingProvider = ({ children }: { children: ReactNode }) => {
   const [ticket, setTicket] = useState<
      { ticketId: string | null; seats: string[] | null }[]
   >([{ ticketId: null, seats: [] }])

   return (
      <BookingContext.Provider value={{ ticket, setTicket }}>
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
