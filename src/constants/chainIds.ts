export const supportedChainIds = {
    Mainnet: 32520,
};
export const getSupportedChainsName = (chainId: number): string => {
    switch (chainId) {
        case 32520:
            return "Brise Chain Mainnet";
        default:
            return "Brise Chain Mainnet";
    }
};
