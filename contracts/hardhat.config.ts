import { HardhatUserConfig } from 'hardhat/config'
import { join } from 'path'
import dotenv from 'dotenv'
import '@nomicfoundation/hardhat-toolbox'

dotenv.config({ path: join(process.cwd(), '../.env') })

const deployerKey = process.env.DEPLOYER_KEY
if (!deployerKey) {
  console.warn('DEPLOYER_KEY not found in .env file. Running with default config')
}

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  defaultNetwork: 'atlantis',
  networks: {
    atlantis: {
      chainId: 5457217,
      url: 'https://atlantis-rpc.seaverse.seaeye.cn/',
      accounts: [deployerKey as string],
    },
  },
}

export default config
