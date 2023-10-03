import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config({path: __dirname + "/.env"});
const config: HardhatUserConfig = {
  solidity: "0.8.18",


  networks: {
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/8515ac49e8494608bf8ec1053dfbdf3a",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: "VIT7XVFNT1RIGIMPDPY6QKEVJJ94DSNVVW",
      polygon: "9UHP9XAJW9C5CGVRG5IQ29ZEKTB7N12TRE",
      goerli: "31WXEYFAGW4JBBSRRJZRJQB2GB5D6MB48W",
      mainnet: "31WXEYFAGW4JBBSRRJZRJQB2GB5D6MB48W",
    }
  }

};

export default config;
