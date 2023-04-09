type Address = `0x${string}`
type BlockExplorer = {
  name: string
  url: string
}
type Chain = {
  /** ID in number form */
  id: number
  /** Human-readable name */
  name: string
  /** Internal network name */
  network: string
  /** Currency used by chain */
  nativeCurrency: NativeCurrency
  /** Collection of RPC endpoints */
  rpcUrls: {
    [key: string]: RpcUrls
    default: RpcUrls
    public: RpcUrls
  }
  /** Collection of block explorers */
  blockExplorers?: {
    [key: string]: BlockExplorer
    default: BlockExplorer
  }
  /** Collection of contracts */
  contracts?: {
    ensRegistry?: Contract
    ensUniversalResolver?: Contract
    multicall3?: Contract
  }
  /** Flag for test networks */
  testnet?: boolean
}
type Contract = {
  address: Address
  blockCreated?: number
}
type NativeCurrency = {
  name: string
  /** 2-6 characters long */
  symbol: string
  decimals: number
}
type RpcUrls = {
  http: readonly string[]
  webSocket?: readonly string[]
}

declare const atlantis: {
  readonly id: 5457217
  readonly name: 'Seaverse Chain Atlantis Testnet'
  readonly network: 'atlantis'
  readonly nativeCurrency: {
    readonly decimals: 18
    readonly name: 'SEA'
    readonly symbol: 'SEA'
  }
  readonly rpcUrls: {
    readonly default: {
      readonly http: readonly ['https://atlantis-rpc.seaverse.seaeye.cn/']
    }
    readonly public: {
      readonly http: readonly ['https://atlantis-rpc.seaverse.seaeye.cn/']
    }
  }
  readonly blockExplorers: {
    readonly etherscan: {
      readonly name: 'AtlantisScan'
      readonly url: 'https://atlantis-scan.seaverse.seaeye.cn/'
    }
    readonly default: {
      readonly name: 'AtlantisScan'
      readonly url: 'https://atlantis-scan.seaverse.seaeye.cn/'
    }
  }
  readonly testnet: true
}

export function GetNetworkColor(chain?: string) {
  if (chain === 'atlantis') return 'blue'
  return 'grey'
}

export { atlantis }
