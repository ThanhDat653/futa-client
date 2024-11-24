/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import * as React from 'react'
import { format, isBefore, startOfDay, startOfToday } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn, formatDate } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '@/components/ui/popover'
import { ControllerRenderProps } from 'react-hook-form'
import { FormControl, FormItem } from '../ui/form'
import { BookingFormData } from '@/model/booking'

interface IPickerProps<TFieldName extends keyof BookingFormData> {
   label: string
   field: ControllerRenderProps<BookingFormData, TFieldName> // Field từ React Hook Form
   error?: string
}

export function DatePicker<TFieldName extends keyof BookingFormData>({
   label,
   error,
   field,
}: IPickerProps<TFieldName>) {
   console.log(field.value)

   return (
      <FormItem className="flex w-full flex-col items-start justify-start gap-1">
         <span className="text-sm">{label}</span>
         <Popover>
            <PopoverTrigger asChild>
               <FormControl>
                  <Button
                     variant={'outline'}
                     className={cn(
                        'w-full min-w-[180px] justify-start text-left font-normal',
                        !field.value && 'text-muted-foreground',
                        { 'border-red-500': error }
                     )}
                  >
                     <CalendarIcon className="size-4" />
                     {field.value ? (
                        formatDate(field.value.toString())
                     ) : (
                        <span>Chọn ngày</span>
                     )}
                  </Button>
               </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
               <Calendar
                  mode="single"
                  selected={field.value ? new Date(field.value) : undefined}
                  onSelect={(date) => field.onChange(date)} // Cập nhật form
                  initialFocus
                  disabled={(date) => isBefore(date, startOfToday())}
               />
            </PopoverContent>
         </Popover>
         {error && (
            <p className="text-xs text-red-500">
               <span className="">(*) </span>
               {error}
            </p>
         )}
      </FormItem>
   )
}
