/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Decentragram, DecentragramInterface } from "../Decentragram";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "hash",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tipAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "author",
        type: "address",
      },
    ],
    name: "ImageCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "hash",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tipAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "author",
        type: "address",
      },
    ],
    name: "ImageTipped",
    type: "event",
  },
  {
    inputs: [],
    name: "imageCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "images",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "hash",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "tipAmount",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "author",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "tipImageOwner",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_imgHash",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
    ],
    name: "uploadImage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526040518060400160405280600c81526020017f446563656e7472616772616d000000000000000000000000000000000000000081525060009080519060200190620000519291906200006b565b5060006001553480156200006457600080fd5b5062000180565b82805462000079906200011b565b90600052602060002090601f0160209004810192826200009d5760008555620000e9565b82601f10620000b857805160ff1916838001178555620000e9565b82800160010185558215620000e9579182015b82811115620000e8578251825591602001919060010190620000cb565b5b509050620000f89190620000fc565b5090565b5b8082111562000117576000816000905550600101620000fd565b5090565b600060028204905060018216806200013457607f821691505b602082108114156200014b576200014a62000151565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b610dff80620001906000396000f3fe60806040526004361061004a5760003560e01c806306fdde031461004f578063848564821461007a5780638567ade8146100bb57806392053b63146100d7578063a91b831414610102575b600080fd5b34801561005b57600080fd5b5061006461012b565b6040516100719190610a11565b60405180910390f35b34801561008657600080fd5b506100a1600480360381019061009c9190610982565b6101b9565b6040516100b2959493929190610aaf565b60405180910390f35b6100d560048036038101906100d09190610982565b61031f565b005b3480156100e357600080fd5b506100ec61064f565b6040516100f99190610a33565b60405180910390f35b34801561010e57600080fd5b5061012960048036038101906101249190610916565b610655565b005b6000805461013890610c68565b80601f016020809104026020016040519081016040528092919081815260200182805461016490610c68565b80156101b15780601f10610186576101008083540402835291602001916101b1565b820191906000526020600020905b81548152906001019060200180831161019457829003601f168201915b505050505081565b60026020528060005260406000206000915090508060000154908060010180546101e290610c68565b80601f016020809104026020016040519081016040528092919081815260200182805461020e90610c68565b801561025b5780601f106102305761010080835404028352916020019161025b565b820191906000526020600020905b81548152906001019060200180831161023e57829003601f168201915b50505050509080600201805461027090610c68565b80601f016020809104026020016040519081016040528092919081815260200182805461029c90610c68565b80156102e95780601f106102be576101008083540402835291602001916102e9565b820191906000526020600020905b8154815290600101906020018083116102cc57829003601f168201915b5050505050908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905085565b60008111801561033157506001548111155b61033a57600080fd5b6000600260008381526020019081526020016000206040518060a00160405290816000820154815260200160018201805461037490610c68565b80601f01602080910402602001604051908101604052809291908181526020018280546103a090610c68565b80156103ed5780601f106103c2576101008083540402835291602001916103ed565b820191906000526020600020905b8154815290600101906020018083116103d057829003601f168201915b5050505050815260200160028201805461040690610c68565b80601f016020809104026020016040519081016040528092919081815260200182805461043290610c68565b801561047f5780601f106104545761010080835404028352916020019161047f565b820191906000526020600020905b81548152906001019060200180831161046257829003601f168201915b50505050508152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505090506000816080015190508073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610539573d6000803e3d6000fd5b5034826060015161054a9190610b82565b826060018181525050816002600085815260200190815260200160002060008201518160000155602082015181600101908051906020019061058d9291906107f6565b5060408201518160020190805190602001906105aa9291906107f6565b506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507f1be5317bca8d3f70dc1efe89958be71bff36cdca33fc00a6423e25eb2f1d492f8383602001518460400151856060015185604051610642959493929190610aaf565b60405180910390a1505050565b60015481565b600082511161066357600080fd5b600081511161067157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156106ab57600080fd5b600160008154809291906106be90610ccb565b91905055506040518060a001604052806001548152602001838152602001828152602001600081526020013373ffffffffffffffffffffffffffffffffffffffff1681525060026000600154815260200190815260200160002060008201518160000155602082015181600101908051906020019061073e9291906107f6565b50604082015181600201908051906020019061075b9291906107f6565b506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507fc1d8dfa99b3f84f95d3f0bc4a768addeb97b83b20aef7f9cb6729e126bafd2f960015483836000336040516107ea959493929190610a4e565b60405180910390a15050565b82805461080290610c68565b90600052602060002090601f016020900481019282610824576000855561086b565b82601f1061083d57805160ff191683800117855561086b565b8280016001018555821561086b579182015b8281111561086a57825182559160200191906001019061084f565b5b509050610878919061087c565b5090565b5b8082111561089557600081600090555060010161087d565b5090565b60006108ac6108a784610b35565b610b10565b9050828152602081018484840111156108c457600080fd5b6108cf848285610c26565b509392505050565b600082601f8301126108e857600080fd5b81356108f8848260208601610899565b91505092915050565b60008135905061091081610db2565b92915050565b6000806040838503121561092957600080fd5b600083013567ffffffffffffffff81111561094357600080fd5b61094f858286016108d7565b925050602083013567ffffffffffffffff81111561096c57600080fd5b610978858286016108d7565b9150509250929050565b60006020828403121561099457600080fd5b60006109a284828501610901565b91505092915050565b6109b481610bd8565b82525050565b6109c381610c14565b82525050565b60006109d482610b66565b6109de8185610b71565b93506109ee818560208601610c35565b6109f781610da1565b840191505092915050565b610a0b81610c0a565b82525050565b60006020820190508181036000830152610a2b81846109c9565b905092915050565b6000602082019050610a486000830184610a02565b92915050565b600060a082019050610a636000830188610a02565b8181036020830152610a7581876109c9565b90508181036040830152610a8981866109c9565b9050610a9860608301856109ba565b610aa560808301846109ab565b9695505050505050565b600060a082019050610ac46000830188610a02565b8181036020830152610ad681876109c9565b90508181036040830152610aea81866109c9565b9050610af96060830185610a02565b610b0660808301846109ab565b9695505050505050565b6000610b1a610b2b565b9050610b268282610c9a565b919050565b6000604051905090565b600067ffffffffffffffff821115610b5057610b4f610d72565b5b610b5982610da1565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000610b8d82610c0a565b9150610b9883610c0a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610bcd57610bcc610d14565b5b828201905092915050565b6000610be382610bea565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610c1f82610c0a565b9050919050565b82818337600083830152505050565b60005b83811015610c53578082015181840152602081019050610c38565b83811115610c62576000848401525b50505050565b60006002820490506001821680610c8057607f821691505b60208210811415610c9457610c93610d43565b5b50919050565b610ca382610da1565b810181811067ffffffffffffffff82111715610cc257610cc1610d72565b5b80604052505050565b6000610cd682610c0a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610d0957610d08610d14565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610dbb81610c0a565b8114610dc657600080fd5b5056fea2646970667358221220d55ef2c6bb61b6d7a0a13c6e0d2d14fc40b580a7e68b816eab4ca9b26690e8cf64736f6c63430008040033";

export class Decentragram__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Decentragram> {
    return super.deploy(overrides || {}) as Promise<Decentragram>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Decentragram {
    return super.attach(address) as Decentragram;
  }
  connect(signer: Signer): Decentragram__factory {
    return super.connect(signer) as Decentragram__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DecentragramInterface {
    return new utils.Interface(_abi) as DecentragramInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Decentragram {
    return new Contract(address, _abi, signerOrProvider) as Decentragram;
  }
}