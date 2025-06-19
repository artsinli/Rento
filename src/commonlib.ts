export const enum RateType { 
    HOURLY = 'HOURLY',
    DAILY = 'DAILY', 
}
//TODO - price needs to have its own interface so that it has a currency 
// symbol etc. 
export interface ListingParams {
    id: string,
    owner: User;
    price: string;
    rateType?: RateType;
    comment?: string;
}

export type User = {
    name: string;
}