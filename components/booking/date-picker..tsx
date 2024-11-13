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

interface IPickerProps {
   label: string
   date: Date
   handleSelect: (date?: Date) => void
}

export function DatePicker({ label, date, handleSelect }: IPickerProps) {
   return (
      <div className="flex w-full flex-col items-start justify-start gap-1">
         <span className="text-sm">{label}</span>
         <Popover>
            <PopoverTrigger asChild>
               <Button
                  variant={'outline'}
                  className={cn(
                     'w-full min-w-[180px] justify-start text-left font-normal',
                     !date && 'text-muted-foreground'
                  )}
               >
                  <CalendarIcon className="size-4" />
                  {date ? formatDate(date.toString()) : <span>{label}</span>}
               </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
               <Calendar
                  mode="single"
                  selected={date}
                  // onSelect={handleSelect}
                  onDayClick={handleSelect}
                  initialFocus
                  disabled={(Date) => isBefore(Date, startOfToday())}
               />
            </PopoverContent>
         </Popover>
      </div>
   )
}
