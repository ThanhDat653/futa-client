import { IBillResponse } from '@/model/bill'
import { cookies } from 'next/headers'
import { END_POINTS } from '@/constants/endpoints'

export const getBillsByCurrUser = async (): Promise<IBillResponse[]> => {
   const token = cookies().get('access_token')?.value
   const url = `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.BILL.URL}`
   const res = await fetch(url, {
      method: 'GET',
      headers: {
         Authorization: `Bearer ${token}`,
      },
   })
   const result = await res.json()
   return result.data
}
