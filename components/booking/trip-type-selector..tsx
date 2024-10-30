/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { TTripType } from './quick-booking'

interface ITripTypeProps {
   tripType: TTripType
   setTripType: (type: TTripType) => void
}

const TripTypeSelector = ({ tripType, setTripType }: ITripTypeProps) => {
   // const [tripType, setTripType] = useState<>('oneWay')

   return (
      <div className="flex h-fit items-center justify-start gap-5 border-b px-5 py-4">
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
