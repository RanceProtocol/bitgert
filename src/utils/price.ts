import axios from "axios";
import { getCurrentTimestamp } from "./time";

export const getCoinPriceDataSinceInsured = async (
    coin_id: string,
    insuredStartTimestamp: number
): Promise<{ priceChange: string; sparklineData: number[] }> => {
    const currentTimestamp = await getCurrentTimestamp();
    if (!currentTimestamp)
        return { priceChange: "0%", sparklineData: new Array(2).fill(0) };
    const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart/range?vs_currency=usd&from=${insuredStartTimestamp}&to=${currentTimestamp}`
    );

    if (!res?.data?.prices || res?.data?.prices.length < 2) {
        console.log("no price change data data yet");
        return { priceChange: "0%", sparklineData: new Array(2).fill(0) };
    }

    const difference =
        res.data.prices[res.data.prices.length - 1][1] - res.data.prices[0][1];
    const percentageChange = (difference / res.data.prices[0][1]) * 100;

    const priceChange =
        Math.max(0, percentageChange) === 0
            ? `${percentageChange.toFixed(2)}%`
            : `+${percentageChange.toFixed(2)}%`;

    const sparklineData = res.data.prices.map(
        (priceArr: number[]) => priceArr[1]
    );

    return { priceChange, sparklineData };
};
