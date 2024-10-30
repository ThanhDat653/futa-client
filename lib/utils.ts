import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
   const date = new Date(input)
   return date.toLocaleDateString('vi-VN', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
   })
}

export const parseDateFromParams = (dateString: string) => {
   // Decode the URL-encoded string
   const decodedDate = decodeURIComponent(dateString)

   // Split into day, month, and year
   const [day, month, year] = decodedDate.split('/').map(Number)

   // Create a new Date object with month - 1 (since JavaScript months are 0-indexed)
   return new Date(year, month - 1, day)
}

export const formatDateToYYYYMMDD = (dateString: string): string => {
   // Decode the URL-encoded string
   const decodedDate = decodeURIComponent(dateString)

   // Split into day, month, and year
   const [day, month, year] = decodedDate.split('/').map(Number)

   // Format to yyyy-mm-dd
   const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`

   return formattedDate
}

export function formatVND(amount: number) {
   return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
}

export function formatDistance(distance: number): string {
   // Làm tròn và trả về số nguyên
   return Math.round(distance) + 'km'
}

export function formatTime(minutes: number): string {
   const hours = Math.floor(minutes / 60)
   const remainingMinutes = minutes % 60

   if (remainingMinutes === 0) {
      return `${hours} giờ`
   }

   return `${hours} giờ ${remainingMinutes} phút`
}

export const convertToString = (
   value: string | string[] | undefined
): string => {
   return Array.isArray(value) ? value[0] : value || ''
}
