/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'

import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { IRegion } from '@/model/region'

interface ISelectLocationProps {
   name: string
   label: string
   placeholder: string
   array: IRegion[]
   value: string
   handleSelect: (region: string) => void
}

const SelectLocation = ({
   array,
   label,
   name,
   placeholder,
   handleSelect,
   value
}: ISelectLocationProps) => {
   return (
      <div className="h-fit w-full py-2">
         <Select
            name={name}
            onValueChange={(value: string) => {
               handleSelect(value)
            }}
            value={value}
         >
            <Label htmlFor={name} className="mb-1 hidden md:block">
               {label}
            </Label>
            <SelectTrigger className="w-full min-w-[180px]">
               <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="h-fit">
               <SelectGroup>
                  <SelectLabel>{label}</SelectLabel>
                  {array.map((region) => (
                     <SelectItem key={region.id} value={region.slug}>
                        {region.name}
                     </SelectItem>
                  ))}
               </SelectGroup>
            </SelectContent>
         </Select>
      </div>
   )
}

export default SelectLocation
