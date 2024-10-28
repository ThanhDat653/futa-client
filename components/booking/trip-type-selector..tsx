import React, { useState } from 'react'

const TripTypeSelector = () => {
   const [tripType, setTripType] = useState('oneWay')

   return (
      <div className="flex items-center justify-start gap-5 border-b px-5 py-4 h-fit">
         <label className="flex gap-2">
            <input
               type="radio"
               name="tripType"
               value="oneWay"
               checked={tripType === 'oneWay'}
               onChange={() => setTripType('oneWay')}
            />
            <span>Một chiều</span>
         </label>

         <label className="flex gap-2">
            <input
               type="radio"
               name="tripType"
               value="roundTrip"
               checked={tripType === 'roundTrip'}
               onChange={() => setTripType('roundTrip')}
            />
            <span>Khứ hồi</span>
         </label>
      </div>
   )
}

export default TripTypeSelector
