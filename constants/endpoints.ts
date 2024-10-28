export const PARAMS = {
   REGION: ":slug"
}

export const END_POINTS = {
   REGION: {
      ALL: '/regions',
      BY_SLUG: `/regions/${PARAMS.REGION}`
   }
};
