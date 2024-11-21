'use server'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { END_POINTS } from '@/constants/endpoints'
import { permanentRedirect } from 'next/navigation'
import { IBill } from '@/model/bill'

export async function createPaymentURL(data: IBill) {
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
