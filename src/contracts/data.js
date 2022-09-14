export const activeNetwork = "mumbai";

export const contractAddr = {

    "Factory": "0x630dB46e394528dB6589D58f7958F97500f4E1D4",
    "Token": "0x2c509F92970Eb7f910506Bc154042AEB1387dE37",
    "Minter": "0xa3AD5291460D52C908846C07e1F37F8cE08Be9F5",
    "Collection": "0x1012CfaC51400Bcf038DBc154E0B52BF6D11099A",
    "Info": "0xc6B159E5fd4eE6D26806AFa643dC46Ec29bf4f39",
    "Settings": "0x23aD8782895C203AA1a653A412590f2926019C5B"
}

export const chains = {
    "polygon": {
        chainIdStr: '137',
        usdSymbol:'USDT',
        usdContract:"0xb9C31Ea1D475c25E58a1bE1a46221db55E5A7C6e",
        usdDecimals:6,
        data: {
            chainId: '0x89',
            chainName: 'Polygon Mainnet',
            nativeCurrency: {
                name: 'Matic',
                symbol: 'matic',
                decimals: 18
            },
            blockExplorerUrls: ['https://polygonscan.com'],
            rpcUrls: ['https://polygon-rpc.com'],
        }
    },
    "mumbai": {
        chainIdStr: '80001',
        usdSymbol:'USDT',
        usdContract:"0xb9C31Ea1D475c25E58a1bE1a46221db55E5A7C6e",
        usdDecimals:6,
        data: {
            chainId: '0x13881',
            chainName: 'Mumbai',
            nativeCurrency: {
                name: 'Matic',
                symbol: 'matic',
                decimals: 18
            },
            blockExplorerUrls: ['https://mumbai.polygonscan.com'],
            rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
        }
    },
    
}