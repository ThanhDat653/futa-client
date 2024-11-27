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

export interface IBillResponse {
   id: string
   createDate: string
   paymentAt: string | null
   expireAt: string
   totalPrice: number
   paymentUrl: string
   failureReason: string | null
   failureAt: string | null
   failure: boolean
   passengerName: string
   passengerPhone: string
   passengerEmail: string
   status: TBillStatusDto
   type: string
   trip: ITripDto
}

export interface IBillDetail extends IBillResponse {
   tickets: ITicket[]
   roundTrip?: IBillDetail
}

export interface ITicket {
   id: string
   seatName: string
   price: number
}

export type TBillStatusDto = 'Success' | 'Pending' | 'Cancel'

export interface ITripDto {
   id: string
   startTime: string
   returnTime: string
   regionFromName: string
   regionToName: string
   locationFromName: string
   locationToName: string
}
