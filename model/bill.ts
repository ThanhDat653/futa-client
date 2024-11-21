export interface IBill {
   roundTrip?: {
      tripId: string
      seats: string[]
   }
   passengerName: string
   passengerPhone: string
   passengerEmail: string
   trip: {
      tripId: string
      seats: string[]
   }
}
