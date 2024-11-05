export interface IFloor {
   id: number
   name: string
}

export const floor: IFloor[] = [
   { id: 1, name: 'Tầng dưới' },
   { id: 2, name: 'Tầng trên' },
]

export interface ISeat {
   id: number
   rowNo: number
   colNo: number
   floorNo: number
   name: string
   isReserved: boolean
}
