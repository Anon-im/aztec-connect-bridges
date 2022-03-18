/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IEthJoin, IEthJoinInterface } from "../IEthJoin";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "join",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IEthJoin__factory {
  static readonly abi = _abi;
  static createInterface(): IEthJoinInterface {
    return new utils.Interface(_abi) as IEthJoinInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IEthJoin {
    return new Contract(address, _abi, signerOrProvider) as IEthJoin;
  }
}
