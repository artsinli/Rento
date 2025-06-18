import { v4 as uuidv4 } from 'uuid';
import { RateType, ListingParams, User } from '../../src/commonlib';

export default class Listing {
    id: string;
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
        this.id = uuidv4();
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
    public ExtractListingData() {
        return [this.id, this.owner.name, this.price]
    }
}

