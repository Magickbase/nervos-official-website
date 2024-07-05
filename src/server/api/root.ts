import { createTRPCRouter } from './trpc'
import { ckbRouter } from './routers/ckb'
import { newsLetterRouter } from './routers/newsletter'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  ckb: ckbRouter,
  newsLetter: newsLetterRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
