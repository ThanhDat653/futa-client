/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { END_POINTS } from '@/constants/endpoints'
import { TBookingStep, useBooking } from '@/context/booking-context'
import { cn } from '@/lib/utils'
import { Floor, IFloor, IRow, ISeat } from '@/model/seat'
import { getTripDetail } from '@/service/trips'
import React from 'react'
import useSWR from 'swr'

const Seat = ({ data, tripId }: { data: ISeat; tripId: string }) => {
   const { handleToggleSeat, departureTicket, destinationTicket } = useBooking()
   const seats =
      departureTicket?.ticketId === tripId
         ? departureTicket.seats
         : destinationTicket?.seats

   return (
      <button
         className={cn(
            'hover:stroke-sky-5 flex size-8 items-center justify-center rounded-lg border-2 text-slate-500',
            {
               'border-slate-200': data.isReserved,
               'border-sky-500 bg-sky-50 text-sky-500 hover:border-sky-600 hover:text-sky-600':
                  !data.isReserved,
               'border-orange-500 bg-orange-50 text-orange-500 hover:border-orange-600 hover:text-orange-600':
                  seats?.find((s) => s.id === data.id),
            }
         )}
         disabled={data.isReserved}
         onClick={() => handleToggleSeat(tripId, data.id, data.name)}
      >
         <span
            className={cn('text-xs font-medium', {
               'text-slate-300': data.isReserved,
            })}
         >
            {data.name}
         </span>
      </button>
   )
}

const SeatRow = ({ data, tripId }: { data: IRow; tripId: string }) => {
   return (
      <div className="flex w-full justify-between gap-7">
         {data.seats.map((seat) => {
            return (
               seat.name && <Seat data={seat} key={seat.id} tripId={tripId} />
            )
         })}
      </div>
   )
}

const SeatFloor = ({ data, tripId }: { data: Floor; tripId: string }) => {
   return (
      <div className="flex flex-col gap-4 px-5">
         <h3 className="w-full text-center text-sm text-slate-700">
            {data[0].floorNo === 1 ? 'Tầng dưới' : 'Tầng trên'}
         </h3>
         <div className="flex flex-col items-start justify-start gap-1">
            {data.map((row) => {
               return (
                  <SeatRow
                     data={row}
                     key={row.rowId + row.floorNo}
                     tripId={tripId}
                  />
               )
            })}
         </div>
      </div>
   )
}

const SeatMap = ({
   id,
   handleSelectTrip,
   step,
}: {
   id: string
   handleSelectTrip: () => void
   step: TBookingStep
}) => {
   const { data, error, isLoading } = useSWR(
      [
         id,
         `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.TRIP.DETAIL(id)}`,
      ],
      ([id]) => getTripDetail(id)
   )

   return (
      <div
         className="flex w-full flex-col items-center justify-center"
         onClick={(event) => event.stopPropagation()}
      >
         {step === 1 && (
            <div className="flex gap-10">
               <div className="flex items-center justify-center gap-2">
                  <div
                     className={cn(
                        'size-5 rounded-md border-2 border-slate-200 bg-slate-100'
                     )}
                  ></div>
                  <span className="text-sm text-slate-700">Đã bán</span>
               </div>
               <div className="flex items-center justify-center gap-2">
                  <div
                     className={cn(
                        'size-5 rounded-md border-2 border-sky-500 bg-sky-100'
                     )}
                  ></div>
                  <span className="text-sm text-slate-700">Còn trống</span>
               </div>
               <div className="flex items-center justify-center gap-2">
                  <div
                     className={cn(
                        'size-5 rounded-md border-2 border-orange-500 bg-orange-100'
                     )}
                  ></div>
                  <span className="text-sm text-slate-700">Đang chọn</span>
               </div>
            </div>
         )}
         <div className="flex w-full items-center justify-center divide-x py-5">
            {data?.seatData.map((floor) => {
               return (
                  <SeatFloor data={floor} key={floor[0].floorNo} tripId={id} />
               )
            })}
         </div>
         {step === 1 && (
            <div className="flex w-full items-center justify-between pt-4">
               <div>
                  <h3>Ghế: </h3>
               </div>
               <button
                  onClick={handleSelectTrip}
                  className={cn(
                     'rounded-full bg-sky-500 px-10 py-2 text-sm leading-5 text-white transition-all duration-200'
                  )}
               >
                  Chọn ghế
               </button>
            </div>
         )}
      </div>
   )
}

export default SeatMap
