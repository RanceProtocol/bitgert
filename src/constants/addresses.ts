import { ethers } from "ethers";

export const ranceProtocol = {
    staging: "",
    mainnet: "0x252cf390215BBFaB36790011D3240676C327b64d",
};

// export const stakingContractAddresses = {
//     staging: [
//         "0x95aa44a85647248216915331BC71248838F6AfaC",
//         "0x90E29EeF76c85184A230101DfC5425eE1bc15812",
//     ],
//     mainnet: [
//         "0x95aa44a85647248216915331BC71248838F6AfaC",
//         "0x90E29EeF76c85184A230101DfC5425eE1bc15812",
//     ],
// };

export const tokens = {
    mainnet: {
        RANCE: ethers.constants.AddressZero,
        USDT: "0xDe14b85cf78F2ADd2E867FEE40575437D5f10c06",
        USDC: "0xcf2DF9377A4e3C10e9EA29fDB8879d74C27FCDE7",
    },
    staging: {
        RANCE: ethers.constants.AddressZero,
        USDT: "0xDe14b85cf78F2ADd2E867FEE40575437D5f10c06",
        USDC: "0xcf2DF9377A4e3C10e9EA29fDB8879d74C27FCDE7",
    },
};

// export const stakingAddressToPool: { [key: string]: number } = {
//     "0x95aa44a85647248216915331BC71248838F6AfaC": 0, //staging
//     "0x90E29EeF76c85184A230101DfC5425eE1bc15812": 1, //staging
// };

// export const masterRanceWallet = {
//     staging: "0xb27D527Dc2b5b7811d13Dc0997870BcE6299df61",
//     mainnet: "0xb27D527Dc2b5b7811d13Dc0997870BcE6299df61", // replaced with mainnet wallet later
// };

export const POLYGONMM_ROUTER = "0x51aba405de2b25e5506dea32a6697f450ceb1a17";

export const multicall2Address = "0x3AFd2494833cbB234B363440E65BC2A171Dbb267";
