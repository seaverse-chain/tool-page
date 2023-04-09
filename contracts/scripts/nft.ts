import { ethers, network, run } from 'hardhat'

async function main() {
  console.log('Deploying Test NFT...')

  const args: any[] = []
  const TestNFT = await ethers.getContractFactory('TestNFT')
  const nft = await TestNFT.deploy(...args)

  await nft.deployed()

  console.log(`NFT deployed to ${nft.address}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
