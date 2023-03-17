import { toCamelcase } from '../../utils'
import { Response } from './types'

class ExplorerService {
  apiBase = 'https://mainnet-api.explorer.nervos.org/api'
  commonHeaders: RequestInit['headers'] = {
    accept: 'application/vnd.api+json',
    'content-type': 'application/vnd.api+json',
  }

  async fetchStatisticCellCount() {
    const resp = await fetch(`${this.apiBase}/v1/daily_statistics/live_cells_count-dead_cells_count`, {
      headers: this.commonHeaders,
    })
    const respData: unknown = await resp.json()

    const apiRes = toCamelcase<
      Response.Wrapper<
        Response.ItemWrapper<{
          liveCellsCount: string
          deadCellsCount: string
          createdAtUnixtimestamp: string
        }>[]
      >
    >(respData)

    return apiRes
  }

  async fetchStatisticTotalSupply() {
    const resp = await fetch(`${this.apiBase}/v1/daily_statistics/circulating_supply-burnt-locked_capacity`, {
      headers: this.commonHeaders,
    })
    const respData: unknown = await resp.json()

    const apiRes = toCamelcase<
      Response.Wrapper<
        Response.ItemWrapper<{
          createdAtUnixtimestamp: string
          circulatingSupply: string
          burnt: string
          lockedCapacity: string
        }>[]
      >
    >(respData)

    return apiRes
  }

  async fetchNervosDao() {
    const resp = await fetch(`${this.apiBase}/v1/contracts/nervos_dao`, {
      headers: this.commonHeaders,
    })
    const respData: unknown = await resp.json()

    const apiRes = toCamelcase<
      Response.Wrapper<
        Response.ItemWrapper<{
          totalDeposit: string
          depositorsCount: string
          depositChanges: string
          unclaimedCompensationChanges: string
          claimedCompensationChanges: string
          depositorChanges: string
          unclaimedCompensation: string
          claimedCompensation: string
          averageDepositTime: string
          miningReward: string
          depositCompensation: string
          treasuryAmount: string
          estimatedApc: string
        }>
      >
    >(respData)

    return apiRes
  }
}

export const explorerService = new ExplorerService()
