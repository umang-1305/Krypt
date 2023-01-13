//https://eth-goerli.g.alchemy.com/v2/3RoyGG_6r3FsxlVampn9yK_7z7jmwNgN

require('@nomiclabs/hardhat-waffle');


module.exports={
  solidity:'0.8.0',
  networks: {
    goerli :{
      url : 'https://eth-goerli.g.alchemy.com/v2/3RoyGG_6r3FsxlVampn9yK_7z7jmwNgN',
      accounts: ['29bcf07190b639e9ba330184f776ffc904b9af0b30886efcd6ffc3d2851bcd17']
    }
  }
}