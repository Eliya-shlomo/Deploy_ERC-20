require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    goerli: {
      url: ALCHEMY_GOERLI_URL,
      accounts: [], // Add the accounts you want to use for deployment here
    },
  },
};