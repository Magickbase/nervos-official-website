import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '../trpc'
import { env } from '../../../env.mjs'

// document: https://www.twilio.com/docs/sendgrid/api-reference/contacts/add-or-update-a-contact
const SEND_GRID_API_ENDPOINT = `https://api.sendgrid.com/v3/marketing/contacts`
const METHOD = 'PUT'
const TOKEN = env.SENDGRID_API_TOKEN
const SEND_GRID_LIST_ID = env.SENDGRID_LIST_ID

export const newsLetterRouter = createTRPCRouter({
  signup: publicProcedure
    .input(
      z.object({
        email: z.string(),
        firstName: z.string(),
      }),
    )
    .mutation(async ({ input: { email, firstName } }) => {
      const data = {
        list_ids: [SEND_GRID_LIST_ID],
        contacts: [{ email, first_name: firstName }],
      }

      const res = await fetch(SEND_GRID_API_ENDPOINT, {
        method: METHOD,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(data),
      })

      if (res.status !== 202) {
        return {
          success: false,
          error: {
            message: 'Failed to add user to newsletter',
            status: res.status,
          },
        }
      }

      return { success: true }
    }),
})
