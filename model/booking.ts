// import { TTripType } from '@/components/booking/quick-booking'

export type BookingFormData = {
   from: string
   to: string
   fromDate: Date
   toDate?: Date
   ticketCount: number
   typeTrip: 'oneWay' | 'roundTrip'
}
