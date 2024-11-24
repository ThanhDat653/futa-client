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
import { BookingFormData } from '@/model/booking'
import { FormItem, FormLabel } from '../ui/form'
import { ControllerRenderProps } from 'react-hook-form'
import clsx from 'clsx'

interface ISelectLocationProps<TFieldName extends keyof BookingFormData> {
   field: ControllerRenderProps<BookingFormData, TFieldName> // Field từ React Hook Form
   error?: string
   name: string
   label: string
   placeholder: string
   array: IRegion[]
   // handleSelect: (region: string) => void
}

export default function SelectLocation<
   TFieldName extends keyof BookingFormData,
>({
   array,
   label,
   name,
   placeholder,
   field,
   error,
}: ISelectLocationProps<TFieldName>) {
   return (
      <div className="h-fit w-full py-2">
         <FormItem>
            <FormLabel
               htmlFor={name}
               className="mb-1 hidden font-normal text-gray-800 md:block"
            >
               {label}
            </FormLabel>
            <Select
               name={name}
               onValueChange={field.onChange}
               value={field.value as string}
            >
               <SelectTrigger
                  className={
                     (clsx('w-full min-w-[180px]'), error && 'border-red-500')
                  }
               >
                  <SelectValue placeholder={placeholder} />
               </SelectTrigger>
               <SelectContent className="h-fit">
                  <SelectGroup>
                     <SelectLabel>Chọn điểm đi</SelectLabel>
                     {array?.map((region) => (
                        <SelectItem key={region.id} value={region.slug}>
                           {region.name}
                        </SelectItem>
                     ))}
                  </SelectGroup>
               </SelectContent>
            </Select>
            {error && (
               <p className="text-xs text-red-500">
                  <span className="">(*) </span>
                  {error}
               </p>
            )}
         </FormItem>
      </div>
   )
}

// export default SelectLocation
