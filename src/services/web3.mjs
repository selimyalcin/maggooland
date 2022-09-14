import { ethers } from "ethers";
import { chains, activeNetwork } from "../contracts/data"
import { useStore } from 'vuex';
const store = useStore();
class Web3{
    ethereum;
    provider;
    signer;
    contractAddress;
    web3;
    Vue;
    BN;
    currentAccount;
    lastBlock;


    constructor(contractAddr, abi){
        const activeRpcProvider = chains[activeNetwork].data.rpcUrls[0];
        const { ethereum } = window;
        this.ethereum = ethereum;

        this.contractAddress = contractAddr;
        this.abi = abi;
        this.ethereum = ethereum;


        if (ethereum) {
            this.web3 = new ethers.providers.Web3Provider(this.ethereum);
        } else {
            this.web3 = new ethers.providers.JsonRpcProvider(activeRpcProvider)

        }

        this.lastBlock = 0

        setTimeout(() => {
            let nv = ethereum.networkVersion
          
            if (nv !== chains[activeNetwork].chainIdStr) {
                this.AddChain()
            }
        }, 500);

    }
     
    async AddChain() {

        try {
            await this.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: chains[activeNetwork].data.chainId }],
            });
            //window.location.reload();
        } catch (error) {
            await this.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                    chains[activeNetwork].data
                ],
            });
        }
    }

    async GetBalance(wallet) {

        let balance = await this.web3.getBalance(wallet)
        balance = ethers.utils.formatEther(balance)
        return balance
    }

    async ConnectWallet() {
        const accounts = await this.ethereum.request({
            method: "eth_requestAccounts",
        });

       

        
        return accounts[0];

    }
    async GetContractAt(contractAdd, abi) {
        this.GetSigner()
        const contract = new ethers.Contract(contractAdd, abi, this.signer)
        return contract
    }
    GetContract() {
        this.contract = new ethers.Contract(this.contractAddress, this.abi, this.signer);
        return this.contract
    }
    GetSigner() {
        this.GetContract();
        this.signer = this.web3.getSigner();
        let contractSigner = this.contract.connect(this.signer);
        return contractSigner;
    }
}

function useBlock(){
    return "ok"
}
export {useBlock,Web3}