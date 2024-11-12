/* eslint-disable prefer-const */
import { END_POINTS } from '@/constants/endpoints'
import { IVehicle } from '@/model/vehicle'

/* eslint-disable @typescript-eslint/no-unused-vars */
async function getVehicleType() {
   let res = await fetch(
      `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.VEHICLE.TYPE}`
   )
   let result = await res.json()
   let vehicle: IVehicle[] = result.data

   return vehicle
}

export { getVehicleType }
