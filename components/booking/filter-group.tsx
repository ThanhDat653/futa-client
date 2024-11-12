/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { IFloor } from '@/model/seat'
import { IDepartureTime } from '@/model/trips'
import { IVehicle } from '@/model/vehicle'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface IFilterGroupProps {
   title: string
   options: IVehicle[] | IFloor[] | IDepartureTime[]
   selectedOptions: string
   setSelectedOption?: (id: number | string) => void
   paramName: string
}

const FilterGroup: React.FC<IFilterGroupProps> = ({
   title,
   options,
   selectedOptions,
   paramName,
}) => {
   const router = useRouter()
   const searchParams = useSearchParams()
   const initialOptions = selectedOptions ? selectedOptions.split('-') : []
   const [currentOptions, setCurrentOptions] =
      useState<string[]>(initialOptions)

   useEffect(() => {
      const params = new URLSearchParams(searchParams.toString())
      if (currentOptions.length > 0) {
         params.set(paramName, currentOptions?.join('-'))
      } else {
         params.delete(paramName)
      }
      router.push(`?${params.toString()}`)
   }, [router, searchParams, currentOptions, paramName])

   const toggleOption = (opt: string) => {
      setCurrentOptions((prev) =>
         prev.includes(opt)
            ? prev.filter((item) => item !== opt)
            : [...prev, opt]
      )
   }

   return (
      <div className="flex w-full flex-col gap-4 border-b p-5">
         <h3 className="font-medium text-gray-800">{title}</h3>
         <div className="flex flex-wrap gap-2 pl-2">
            {options?.map((option) => (
               <div className="flex items-center space-x-2" key={option.id}>
                  <button
                     onClick={() => toggleOption(option.id.toString())}
                     className={`box-border rounded-lg border-2 px-3 py-1 text-sm shadow-sm transition-all duration-200 ${
                        currentOptions?.includes(option.id.toString())
                           ? 'border-sky-600 bg-sky-100 text-sky-800'
                           : 'border-gray-200 bg-gray-50 text-gray-800'
                     } lg:hover:border-sky-600 lg:hover:bg-sky-100 lg:hover:text-sky-800`}
                  >
                     {option.name}
                  </button>
               </div>
            ))}
         </div>
      </div>
   )
}

export default FilterGroup
