import { IScheduleDetail } from './schedule'

export interface ISeat {
   id: number
   rowNo: number
   colNo: number
   floorNo: number
   name: string
   isReserved: boolean
}

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
   seats: ISeat[]
   schedule: IScheduleDetail
}
