// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  

  const messageContract = await hre.ethers.deployContract("TokenFactory");

  await messageContract.waitForDeployment();

  console.log(
    `Contract deployed to ${messageContract.target}`
  );

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// Contract deployed to 0x122fFeEa826d69b4480F45ba8Bd18EbD4f895144
// creation txId = https://goerli.etherscan.io/tx/0x72e9ddfa3061760f175da688ff9d12d52279aeb8a5148e12e0357ff62da5e8f4
// Interaction txId= https://goerli.etherscan.io/tx/0x7e3017c613fca10aad65feacd79ff947068f428e3e89b4378306bb479a316e09 