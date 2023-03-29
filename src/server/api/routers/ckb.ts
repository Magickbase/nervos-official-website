import BigNumber from 'bignumber.js'
import { explorerService } from '../../../services/ExplorerService'
import { createTRPCRouter, publicProcedure } from '../trpc'

const DECIMAL = BigNumber(10 ** 8)

export const ckbRouter = createTRPCRouter({
  // TODO: need cache?
  liveMetrics: publicProcedure.query(async () => {
    const { data: cellCountRecords } = await explorerService.fetchStatisticCellCount()
    const lastCellCountRecord = cellCountRecords[cellCountRecords.length - 1]
    const liveCells = BigInt(lastCellCountRecord?.attributes.liveCellsCount ?? '0')

    const { data: totalSupplyRecords } = await explorerService.fetchStatisticTotalSupply()
    const lastTotalSupplyRecord = totalSupplyRecords[totalSupplyRecords.length - 1]

    const stored = !lastTotalSupplyRecord
      ? 0n
      : // The decimal places are discarded here, but it shouldn't have any effect?
        /* burnt is expected to be ignored accordig to https://nervos-official-website-git-fork-whiteminds-f-10c647-magickbase.vercel.app/#thread-id=2No7H */
        // BigInt(lastTotalSupplyRecord.attributes.burnt.replace(/\.\d*/, '')) +
        BigInt(lastTotalSupplyRecord.attributes.circulatingSupply.replace(/\.\d*/, '')) +
        BigInt(lastTotalSupplyRecord.attributes.lockedCapacity.replace(/\.\d*/, ''))

    const { data: nervosDao } = await explorerService.fetchNervosDao()
    const daoDeposit = BigInt(nervosDao.attributes.totalDeposit)

    return {
      liveCells: BigInt(liveCells).toLocaleString('en'),
      stored: BigNumber(stored.toString()).dividedBy(DECIMAL).toFormat(2),
      daoDeposit: BigNumber(daoDeposit.toString()).dividedBy(DECIMAL).toFormat(2),
    }
  }),
})
