/* eslint-disable prefer-const */
import { END_POINTS } from '@/constants/endpoints'
import { IRegion } from '@/model/region'

/* eslint-disable @typescript-eslint/no-unused-vars */
async function getRegions() {
   let res = await fetch(
      `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.REGION.ALL}`
   )
   let result = await res.json()
   let regions: IRegion[] = result.data

   return regions
}

export { getRegions }
