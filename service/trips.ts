/* eslint-disable prefer-const */
import { END_POINTS } from '@/constants/endpoints'
import { IScheduleGroupByRegion, IScheduleTrip } from '@/model/schedule'
import { notFound } from 'next/navigation'

/* eslint-disable @typescript-eslint/no-unused-vars */
async function getTripByFromToDate(
   from: string,
   to: string,
   fromDate: string,
   ticketCount: number
) {
   // Construct query string with parameters
   const queryParams = new URLSearchParams({
      from,
      to,
      fromDate,
      ticketCount: ticketCount.toString(),
   }).toString()

   try {
      console.log(
         `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.TRIP.BY_FROMTODATE}?${queryParams}`
      )
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

export { getTripByFromToDate, getPopularTrips }
