export const PARAMS = {
   REGION: ':slug',
   FROM: ':from',
   TO: ':to',
   DATE: ':date',
   TICKET: ':ticketCount',
   ID: ':id',
}

export const END_POINTS = {
   REGION: {
      ALL: 'regions',
      BY_SLUG: `regions/${PARAMS.REGION}`,
   },
   TRIP: {
      POPULAR: `schedules/popular`,
      BY_FROMTODATE: `trips`,
      DETAIL:(id:string)=> `trips/${id}`,
   },
   VEHICLE: {
      TYPE: `vtypes`,
   },
}
