export const PARAMS = {
   REGION: ':slug',
   FROM: ':from',
   TO: ':to',
   DATE: ':date',
   TICKET: ':ticketCount',
}

export const END_POINTS = {
   REGION: {
      ALL: 'regions',
      BY_SLUG: `regions/${PARAMS.REGION}`,
   },
   TRIP: {
      POPULAR: `schedules/popular`,
      BY_FROMTODATE: `trips`,
   },
   VEHICLE: {
      TYPE: `vtypes`,
   },
   PROFILE: {
      URl: `profiles`,
      CHILD: {
         INFO: `info`,
         REGISTER: `register`
      }
   },
   AUTH: {
      LOGOUT: `logout`,
      TOKEN: `oauth2/token`
   }
}
