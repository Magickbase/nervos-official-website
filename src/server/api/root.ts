import { createTRPCRouter } from './trpc'
import { ckbRouter } from './routers/ckb'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  ckb: ckbRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
