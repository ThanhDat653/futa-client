import { z } from 'zod'

export const bookingSchema = z
   .object({
      from: z
         .string({
            required_error: 'Vui lòng chọn địa điểm đi.',
         })
         .min(1, { message: 'Vui lòng chọn địa điểm đi.' }),
      to: z
         .string({
            required_error: 'Vui lòng chọn địa điểm đến.',
         })
         .min(1, { message: 'Vui lòng chọn địa điểm đến.' }),
      fromDate: z.date({
         required_error: 'Vui lòng chọn ngày đi.',
      }),
      toDate: z.date().optional(),
      ticketCount: z
         .number({
            required_error: 'Vui lòng nhập số vé.',
         })
         .min(1, { message: 'Số vé phải lớn hơn hoặc bằng 1.' })
         .max(10, { message: 'Không thể đặt quá 10 vé.' }),
      typeTrip: z.enum(['oneWay', 'roundTrip']),
   })
   .superRefine((data, ctx) => {
      if (data.typeTrip === 'roundTrip' && data.toDate) {
         if (data.toDate < data.fromDate) {
            ctx.addIssue({
               code: z.ZodIssueCode.custom,
               message: 'Ngày khứ hồi không được sớm hơn ngày đi.',
               path: ['toDate'], // Đánh dấu lỗi trên `toDate`
            })
         }
      }
   })
