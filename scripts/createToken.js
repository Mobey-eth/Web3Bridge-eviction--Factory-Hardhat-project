const hre = require("hardhat");

async function main() {
  
  const contractAddress = "0x122fFeEa826d69b4480F45ba8Bd18EbD4f895144";

  // Load the contract's ABI
  const TokenFactoryABI = require("../artifacts/contracts/TokenFactory.sol/TokenFactory.json").abi;

  // Create an instance of the contract
  const [deployer] = await hre.ethers.getSigners();
  const tokenFactory = new hre.ethers.Contract(contractAddress, TokenFactoryABI, deployer);

 
  const name = "Hamas";
  const symbol = "HAM";
  const amount ="1000000000000000000"; 
  const initAddress = deployer.address; 

  const createTokenTx = await tokenFactory.createToken(name, symbol, amount, initAddress);

  // Wait for the transaction to be mined
  await createTokenTx.wait();

  console.log(`createToken transaction hash: ${createTokenTx.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// https://goerli.etherscan.io/tx/0x7e3017c613fca10aad65feacd79ff947068f428e3e89b4378306bb479a316e09