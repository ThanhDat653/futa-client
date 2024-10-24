/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { formatVND } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface ITrips {
   destination: string
   price: number
   detail: string
}

interface IPopularRouteCardProps {
   departure: string
   img: string
   trips: ITrips[]
}

const PopularRouteCard = ({
   trips,
   departure,
   img,
}: IPopularRouteCardProps) => {
   return (
      <Link className="flex w-fit min-w-[300px] flex-col items-center justify-center rounded-xl border-2 overflow-hidden border-gray-200 bg-white shadow-lg xl:max-w-[380px]" href={"/lich-trinh"}>
         <div className="relative w-full rounded-xl overflow-hidden">
            <img src={img} alt="Thành phố Hồ Chí Minh" />
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute bottom-3 left-3 text-white">
               <h3>Tuyến xe từ</h3>
               <h1 className="font-semibold uppercase">{departure}</h1>
            </div>
         </div>
         <div className="flex w-full flex-col">
            {trips.map((trip) => (
               <div
                  className="w-full border-b border-gray-100 px-5 py-4"
                  key={trip.destination}
               >
                  <div className="flex items-center justify-between">
                     <h3 className="text-lg capitalize text-teal-700">
                        {trip.destination}
                     </h3>
                     <h5 className="text-gray-900">{formatVND(trip.price)}</h5>
                  </div>
                  <p className="w-full text-left text-base text-gray-500">
                     {trip.detail}
                  </p>
               </div>
            ))}
         </div>
      </Link>
   )
}

const PopularRoute = () => {
   const trips = [
      {
         destination: 'đà lạt',
         price: 290000,
         detail: ' 305km - 8 giờ - 24/10/2024',
      },
      {
         destination: 'đà lạt',
         price: 290000,
         detail: ' 305km - 8 giờ - 24/10/2024',
      },
      {
         destination: 'đà lạt',
         price: 290000,
         detail: ' 305km - 8 giờ - 24/10/2024',
      },
   ]
   return (
      <div className="w-full bg-slate-50 py-10">
         <div className="container mx-auto flex flex-col items-center justify-start gap-5 py-10 lg:gap-10">
            <div className="text-center">
               <h1 className="text-lg font-semibold text-teal-700 lg:text-2xl">
                  TUYẾN PHỔ BIẾN
               </h1>
               <h4 className="mt-2 text-sm text-gray-700">
                  Được khách hàng tin tưởng và lựa chọn
               </h4>
            </div>
            <div className="flex h-fit w-full items-center justify-start gap-3 overflow-x-scroll lg:justify-center lg:gap-4 lg:overflow-visible">
               <PopularRouteCard
                  trips={trips}
                  departure="TP Hồ Chí Minh"
                  img="https://trip.s3-hcm-r1.s3cloud.vn/landing/hcm.png"
                  key={'hcm'}
               />
               <PopularRouteCard
                  trips={trips}
                  departure="TP Hồ Chí Minh"
                  img="https://trip.s3-hcm-r1.s3cloud.vn/landing/dalat.png"
                  key={'hcm'}
               />
               <PopularRouteCard
                  trips={trips}
                  departure="TP Hồ Chí Minh"
                  img="https://trip.s3-hcm-r1.s3cloud.vn/landing/danang.png"
                  key={'hcm'}
               />
            </div>
         </div>
      </div>
   )
}

export default PopularRoute
