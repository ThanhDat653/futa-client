import { IRegion } from './region'
import { ILocation, ITrip, IVehicleInfo } from './trips'

// Schedule
export interface ISchedule extends IVehicleInfo {
   id: string
   regionFrom: IRegion
   regionTo: IRegion
   from: ILocation
   to: ILocation
   duration: number
   distance: number
   price: number
}

export interface IScheduleDetail extends IVehicleInfo, ISchedule {
   pickUps: ILocation[]
   transits: ILocation[]
}
   
// Get trips by from, to, date.
export interface IScheduleTrip extends ISchedule {
   trips: ITrip[]
}

// Schedules Grouped by Region / Popular
export interface IScheduleInGroup extends IVehicleInfo {
   id: string
   regionTo: IRegion
   duration: number
   distance: number
   price: number
}

export interface IScheduleGroupByRegion {
   name: string
   slug: string
   nameWithType: string
   schedules: IScheduleInGroup[]
}
