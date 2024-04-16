import { BetaAnalyticsDataClient } from '@google-analytics/data'

type Credential = {
  project_id: string
  client_email: string
  private_key: string
}

export async function getPageViewCount(urlPrefix = '/') {
  const propertyId = process.env.GOOGLE_ANALYSIS_PROPERTY_ID
  const CREDENTIALS_B64 = process.env.GOOGLE_CLOUD_CREDENTIAL

  if (!propertyId || !CREDENTIALS_B64) {
    return {}
  }

  try {
    const credential = JSON.parse(Buffer.from(CREDENTIALS_B64, 'base64').toString()) as Credential
    const analyticsDataClient = new BetaAnalyticsDataClient({
      projectId: credential.project_id,
      credentials: {
        client_email: credential.client_email,
        private_key: credential.private_key,
      },
    })

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: '2019-01-01',
          endDate: 'today',
        },
      ],
      dimensions: [
        {
          name: 'pagePath',
        },
      ],
      metrics: [
        {
          name: 'eventCount',
        },
      ],
      dimensionFilter: {
        andGroup: {
          expressions: [
            {
              filter: {
                fieldName: 'pagePath',
                stringFilter: {
                  matchType: 'CONTAINS',
                  value: urlPrefix,
                },
              },
            },
            {
              filter: {
                fieldName: 'eventName',
                stringFilter: {
                  value: 'page_view',
                },
              },
            },
          ],
        },
      },
    })

    const map: Record<string, number> = {}
    response.rows?.forEach(row => {
      if (row.dimensionValues && row.metricValues) {
        const key = (row.dimensionValues[0]?.value ?? '').split(urlPrefix).pop() ?? ''
        const value = parseInt(row.metricValues[0]?.value ?? '0')
        map[key] = (map[key] ?? 0) + value
      }
    })

    return map
  } catch {
    return {}
  }
}
