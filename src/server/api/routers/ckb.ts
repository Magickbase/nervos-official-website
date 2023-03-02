import { createTRPCRouter, publicProcedure } from '../trpc'

export const ckbRouter = createTRPCRouter({
  liveMetrics: publicProcedure.query(() => {
    // TODO: mock data, need to implement
    return {
      liveCells: 8263135529.34,
      stored: 42263135529,
      dao: 9263009336.34,
    }
  }),
})
