import BigNumber from 'bignumber.js'
import { explorerService } from '../../../services/ExplorerService'
import { ckbNodeService } from '../../../services/CKBNodeService'
import { createTRPCRouter, publicProcedure } from '../trpc'

const DECIMAL = BigNumber(10 ** 8)

export const ckbRouter = createTRPCRouter({
  // TODO: need cache?
  liveMetrics: publicProcedure.query(async () => {
    const occupied = await ckbNodeService.fetchOccupiedCapacity()

    const { data: cellCountRecords } = await explorerService.fetchStatisticCellCount()
    const lastCellCountRecord = cellCountRecords[cellCountRecords.length - 1]
    const liveCells = BigInt(lastCellCountRecord?.attributes.liveCellsCount ?? '0')

    const { data: nervosDao } = await explorerService.fetchNervosDao()
    const daoDeposit = BigInt(nervosDao.attributes.totalDeposit)

    return {
      liveCells: BigInt(liveCells).toLocaleString('en'),
      stored: BigNumber(occupied).dividedBy(DECIMAL).toFormat(),
      daoDeposit: BigNumber(daoDeposit.toString()).dividedBy(DECIMAL).toFormat(2),
    }
  }),
})
