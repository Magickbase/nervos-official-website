// https://github.com/vercel/vercel/discussions/5230
// VERCEL_URL doesn't work on custom domains, so we need NEXT_BASE_URL
export const BASE_URL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.NEXT_BASE_URL
