/* eslint-disable prefer-const */
import { END_POINTS } from '@/constants/endpoints'
import { IScheduleGroupByRegion, IScheduleTrip } from '@/model/schedule'
import { ITripDetail } from '@/model/trips'
import { notFound } from 'next/navigation'

/* eslint-disable @typescript-eslint/no-unused-vars */
async function getTripByFromToDate(
   from: string,
   to: string,
   fromDate: string,
   ticketCount: string,
   vehicleType: string = '',
   timeInDay: string = '',
   floorNo: string = ''
) {
   // Construct query string with parameters
   const queryParams = new URLSearchParams({
      from,
      to,
      fromDate,
      ticketCount,
      vehicleType: vehicleType,
      timeInDay: timeInDay,
      floorNo: floorNo,
   }).toString()

   try {
      const res = await fetch(
         `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.TRIP.BY_FROMTODATE}?${queryParams}`
      )

      if (!res.ok) {
         throw new Error(`Error: ${res.status}`)
      }

      const result = await res.json()

      const trips: IScheduleTrip = result.data[0]

      if (!trips) {
         notFound()
      }

      return trips
   } catch (error) {
      console.error('Failed to fetch trips:', error)
   }
}

async function getPopularTrips(): Promise<IScheduleGroupByRegion[]> {
   try {
      const res = await fetch(
         `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.TRIP.POPULAR}`
      )

      if (!res.ok) {
         throw new Error(`Error: ${res.status}`)
      }

      const result = await res.json()

      const popular: IScheduleGroupByRegion[] = result

      if (!popular || popular.length === 0) {
         notFound()
      }

      return popular
   } catch (error) {
      console.error('Failed to fetch popular trips:', error)
      throw error
   }
}

async function getTripDetail(id: string): Promise<ITripDetail> {
   const res = await fetch(
      `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.TRIP.DETAIL(id)}`
   )

   if (!res.ok) {
      throw new Error(`Error: ${res.status}`)
   }

   const result = await res.json()

   const trip: ITripDetail = result

   return trip
}

export { getTripByFromToDate, getPopularTrips, getTripDetail }
