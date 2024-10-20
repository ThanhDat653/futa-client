import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
    client: {
        FUTA_API_URL: z.string().min(1).url(),
    },
    runtimeEnv: {
        FUTA_API_URL: process.env.FUTA_API_URL,
    },
})
