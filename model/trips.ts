import { IScheduleDetail } from './schedule'
import { Floor } from './seat'

export interface IDepartureTime {
   id: string
   name: string
}

export const departureTime: IDepartureTime[] = [
   {
      id: 'morning',
      name: '06:00 - 12:00',
   },
   {
      id: 'afternoon',
      name: '12:00 - 18:00',
   },
   {
      id: 'evening',
      name: '18:00 - 24:00',
   },
   {
      id: 'night',
      name: '00:00 - 06:00',
   },
]

export interface ILocation {
   name: string
   address: string
   slug: string
   latitude?: number
   longitude?: number
   distanceToLocation?: number
   durationToLocation?: number
}

export interface IVehicleInfo {
   vehicleTypeId: number
   vehicleTypeName: string
}

export interface ITrip {
   id: string
   startTime: string
   endTime: string
   seatsAvailable: number
   price: number
}

export interface ITripDetail extends ITrip {
   licensePlate: string
   seatData: Floor[]
   schedule: IScheduleDetail
}
