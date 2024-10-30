import React from 'react'

const TripCard = () => {
   return (
      <div className="flex w-full flex-col items-start justify-start rounded-md bg-white p-4 shadow-lg">
         <div className="flex w-full justify-start"></div>
      </div>
   )
}

const Trips = () => {
   return (
      <div className="w-full bg-slate-50 py-10">
         <div className="container mx-auto flex flex-col items-center justify-start gap-5 py-10 lg:gap-10">
            <TripCard />
         </div>
      </div>
   )
}

export default Trips
