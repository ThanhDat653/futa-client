import { z } from 'zod'

export const paymentSchema = z.object({
   fullname: z
      .string({
         required_error: 'Vui lòng nhập họ tên.',
      })
      .min(2, 'Vui lòng nhập họ tên.'),
   email: z
      .string({
         required_error: 'Vui lòng nhập email.',
         invalid_type_error: 'Email không hợp lệ.',
      })
      .email('Email không đúng định dạng.'),
   phoneNumber: z
      .string({
         required_error: 'Vui lòng nhập số điện thoại.',
      })
      .regex(/^[0-9]+$/, 'Số điện thoại chỉ được chứa chữ số.')
      .min(10, 'Số điện thoại phải có ít nhất 10 chữ số.')
      .max(15, 'Số điện thoại không được vượt quá 15 chữ số.'),
})
