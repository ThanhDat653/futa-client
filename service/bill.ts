'use server'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { IBillDetail, IBillResponse } from '@/model/bill'
import { cookies } from 'next/headers'
import { END_POINTS } from '@/constants/endpoints'
import { permanentRedirect } from 'next/navigation'
import { IBill } from '@/model/bill'

export async function createPaymentURL(data: IBill) {
   const token = cookies().get('access_token')?.value
   const url = `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.BILL.ALL}`
   try {
      const response = await fetch(url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            ...data,
         }),
      })

      if (!response.ok) {
         const errorData = await response.json()

         throw new Error(
            errorData?.error || 'Đã có lỗi không xác định, hãy thử lại sau'
         )
      }

      const payment_url = await response.text()
      permanentRedirect(payment_url)
   } catch (error) {
      console.error('Error during create payment:', error)
      throw error
   }
}

export const getBillsByCurrUser = async (): Promise<IBillResponse[]> => {
   const token = cookies().get('access_token')?.value
   const url = `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.BILL.ALL}`
   const res = await fetch(url, {
      method: 'GET',
      headers: {
         Authorization: `Bearer ${token}`,
      },
   })
   const result = await res.json()
   console.log(result.data)

   return result.data
}

export const getBillById = async (id: string): Promise<IBillDetail> => {
   const token = cookies().get('access_token')?.value
   const url = `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.BILL.ALL}/${id}`
   const res = await fetch(url, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   })

   const result = await res.json()

   return result
}
