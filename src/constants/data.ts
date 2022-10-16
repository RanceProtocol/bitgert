export enum PackageEnum {
    SILVER = "Silver",
    GOLD = "Gold",
    PLATINUM = "Platinum",
}

export type IinsurableCoins = "WBTC" | "WETH" | "WCRO" | "MMF";

export const insurableCoins: IinsurableCoins[] = [
    "WBTC",
    "WETH",
    "WCRO",
    "MMF",
];

export interface IinsurancePackagePlanDetails {
    packageType: PackageEnum;
    name: string;
    duration: number;
    timeUnit: "MTH" | "YR" | "YRS";
    timeUnitFull: "months" | "year" | "years";
}

export const periodInMonthsToPlanData: {
    [key: number]: IinsurancePackagePlanDetails;
} = {
    6: {
        packageType: PackageEnum.SILVER,
        name: `${PackageEnum.SILVER} Package`,
        duration: 6,
        timeUnit: "MTH",
        timeUnitFull: "months",
    },
    12: {
        packageType: PackageEnum.GOLD,
        name: `${PackageEnum.GOLD} Package`,
        duration: 1,
        timeUnit: "YR",
        timeUnitFull: "year",
    },
    24: {
        packageType: PackageEnum.PLATINUM,
        name: `${PackageEnum.PLATINUM} Package`,
        duration: 2,
        timeUnit: "YRS",
        timeUnitFull: "years",
    },
};

export const getDurationData = (periodInSeconds: number) => {
    const months = Math.round(periodInSeconds / (60 * 60 * 24 * 30));
    return periodInMonthsToPlanData[months];
};

export const addressToCoinDetails: {
    [key: string]: any;
} = {
    "0x0e11DCE06eF2FeD6f78CEF5144F970E1184b4298": {
        id: "sphynx",
        symbol: "sphynx",
        name: "Sphynx",
    },
    "0x0eb9036cbE0f052386f36170c6b07eF0a0E3f710": {
        id: "wrapped-brise",
        symbol: "wbrise",
        name: "Wrapped Brise",
    },
    "0x611a767AE0b231e82Da8711294A378F5639Af037": {
        id: "wbnb",
        symbol: "wbnb",
        name: "Wrapped BNB",
    },
};
