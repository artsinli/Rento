export const enum RateType { 
    HOURLY = 'HOURLY',
    DAILY = 'DAILY', 
}

export interface ListingParams {
    owner: User;
    price: number;
    rateType: RateType;
    comment?: string;
}

export type User = {
    name: string;
}