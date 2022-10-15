import {
    UniswapPair,
    UniswapVersion,
    UniswapPairSettings,
    TradeDirection,
} from "simple-uniswap-sdk";
import { constants } from "ethers";

interface Params {
    fromTokenContractAddress: string;
    toTokenContractAddress: string;
    amount: string;
    provider: any;
}

export const findBestRoute = async (
    params: Params
): Promise<{ path: string[]; expectedOutput: string }> => {
    const {
        fromTokenContractAddress,
        toTokenContractAddress,
        amount,
        provider,
    } = params;

    const cloneUniswapContractDetails = {
        v2Override: {
            routerAddress: "0x83f465457c8caFbe85aBB941F20291F826C7F72A",
            factoryAddress: "0xd4688F52e9944A30A7eaD808E9A86F95a0661DF8",
            pairAddress: "0xd4688F52e9944A30A7eaD808E9A86F95a0661DF8",
        },
    };

    const uniswapPair = new UniswapPair({
        fromTokenContractAddress,
        toTokenContractAddress,
        ethereumAddress: constants.AddressZero,
        ethereumProvider: provider,
        settings: new UniswapPairSettings({
            slippage: 0.001,
            deadlineMinutes: 20,
            disableMultihops: false,
            uniswapVersions: [UniswapVersion.v2],
            cloneUniswapContractDetails: cloneUniswapContractDetails,
            customNetwork: {
                nameNetwork: "Bitgert Mainnet",
                multicallContractAddress:
                    "0x3AFd2494833cbB234B363440E65BC2A171Dbb267",
                nativeCurrency: {
                    name: "Brise",
                    symbol: "BRISE",
                },
                nativeWrappedTokenInfo: {
                    chainId: 32520,
                    contractAddress:
                        "0x0eb9036cbE0f052386f36170c6b07eF0a0E3f710",
                    decimals: 18,
                    symbol: "WBRISE",
                    name: "Wrapped BRISE",
                },
                baseTokens: {
                    dai: {
                        chainId: 32520,
                        contractAddress:
                            "0x0eb9036cbE0f052386f36170c6b07eF0a0E3f710",
                        decimals: 18,
                        symbol: "WBRISE",
                        name: "Wrapped BRISE",
                    },
                },
            },
        }),
    });

    try {
        const uniswapPairFactory = await uniswapPair.createFactory();

        const result = await uniswapPairFactory.findBestRoute(
            amount,
            TradeDirection.input
        );

        return {
            path: result.bestRouteQuote.routePathArray,
            expectedOutput:
                result.bestRouteQuote
                    .expectedConvertQuoteOrTokenAmountInMaxWithSlippage,
        };
    } catch (error) {
        console.log("errkroejmomv: ", error);

        throw error;
    }
};
