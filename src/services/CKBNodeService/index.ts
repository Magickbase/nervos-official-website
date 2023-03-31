class CKBNodeService {
  apiBase = 'https://mainnet.ckb.dev/rpc'
  commonHeaders: RequestInit['headers'] = {
    accept: 'application/json',
    'content-type': 'application/json',
  }

  async fetchOccupiedCapacity() {
    const BURNT_AMOUNT = BigInt('504000000000000000')
    try {
      const resp = await fetch(`${this.apiBase}`, {
        method: 'POST',
        headers: this.commonHeaders,
        body: JSON.stringify({
          id: 1,
          jsonrpc: '2.0',
          method: 'get_tip_header',
          params: [],
        }),
      }).then(res => res.json() as Promise<{ result: { dao: string } }>)
      const FIELD_LENGTH = 16
      const u = resp.result.dao.slice(-1 * FIELD_LENGTH)
      const occupied = u.match(/\w{2}/g)?.reverse().join('')
      if (!occupied) {
        return ''
      }
      return (BigInt(`0x${occupied}`) - BURNT_AMOUNT).toString()
    } catch {
      return ''
    }
  }
}

export const ckbNodeService = new CKBNodeService()
