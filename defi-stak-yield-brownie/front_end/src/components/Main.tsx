import { Ether, useEthers } from "@usedapp/core"
import helperConfig from "../helper-config.json"
import networkMapping from "../chain-info/deployments/map.json"
import { constants } from "ethers"
import brownieConfig from "..//brownie-config.json"
import dapp from "../dapp.png"
import eth from "../ethereum.png"
import dai from "../dai.png"
import { YourWallet } from "./yourWallet/YourWallet"

export type Token = {
    image: string
    address: string
    name: string
}

export const Main = () => {
    const { chainId, error } = useEthers()
    const networkName = chainId ? helperConfig[chainId] : "dev"
    console.log(chainId)
    console.log(networkName)
    let stringChainId = String(chainId)
    const dappTokenAddress = chainId ? networkMapping[stringChainId]["DappToken"][0] : constants.AddressZero
    const wethTokenAddress = chainId ? brownieConfig["networks"][networkName]["weth_token"] : constants.AddressZero
    const fautTokenAddress = chainId ? brownieConfig["networks"][networkName]["fau_token"] : constants.AddressZero

    const supportedTokens: Array<Token> = [
        {
            image: dapp,
            address: dappTokenAddress,
            name: "Dapp"
        },
        {
            image: eth,
            address: wethTokenAddress,
            name: "WETH"
        },
        {
            image: dai,
            address: fautTokenAddress,
            name: "FAU"
        }
    ]

    return (<YourWallet supportedTokens={supportedTokens} />)
}