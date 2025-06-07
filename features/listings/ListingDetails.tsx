
import { RateType, ListingParams, User } from '../commonl-lib';

export default class Listing {
    id: number;
    owner: User;
    price: number;
    rateType: RateType;
    comment?: string;

    /**
     * Creates a new Listing.
     * @param params - Listing parameters:
     *   - owner: User (required)
     *   - price: number (required)
     *   - rateType: RateType (required)
     *   - comment?: string (optional)
     */
    constructor(params: Partial<ListingParams>){
        const _hashFunction = (n: number): number => {
            const prime1 = 31;
            const prime2 = 17;
            return ((n * prime1) ^ prime2) >>> 0;  // >>> 0 ensures positive number
        }
        this.id = _hashFunction(Date.now());
        this.owner = params.owner!;
        this.price = params.price!;
        this.rateType = params.rateType!;
        this.comment = params.comment;
    }
    /**
     * DisplayListing
     */
    public DisplayListing() {
        return 'The owned of this listing is ' + this.owner.name + ' listed for ' + this.price + ' with ID ' + this.id;
    }
}

