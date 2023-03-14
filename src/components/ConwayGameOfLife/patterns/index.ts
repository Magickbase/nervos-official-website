import GosperGliderGun from './gosper_glider_gun.json'
import P101 from './101.json'
import P119P4H1V0 from './119P4H1V0.json'
import TwoEngineCordership from './two_engine_cordership.json'

export type GOLPattern = { x: number; y: number }[]

export const patterns: GOLPattern[] = [GosperGliderGun, P101, P119P4H1V0, TwoEngineCordership]
