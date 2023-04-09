import { ethers, network, run } from 'hardhat'

async function main() {
  console.log('Deploying Message...')

  const args: any[] = []
  const Message = await ethers.getContractFactory('Message')
  const message = await Message.deploy(...args)

  await message.deployed()

  console.log(`Message deployed to ${message.address}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
