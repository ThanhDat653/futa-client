import { TTripType } from '@/components/booking/quick-booking'
import { useSearchParams } from 'next/navigation'

export const useQueryParams = () => {
   const searchParams = useSearchParams()
   return {
      from: searchParams.get('from') || '',
      fromTime: searchParams.get('fromTime') || '',
      to: searchParams.get('to') || '',
      toTime: searchParams.get('toTime') || '',
      ticketCount: Number(searchParams.get('ticketCount') || 1),
      type: (searchParams.get('type') as TTripType) || 'oneWay',
      timeInDay: searchParams.get('timeInDay') || '',
      vehicleType: searchParams.get('vehicleType')
         ? searchParams.get('vehicleType')!.split(',').map(Number)
         : [],
      floorNo: searchParams.get('floorNo') || '',
   }
}
