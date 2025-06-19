import { useEffect, useState } from 'react';
import Listing from '@/features/listings/ListingDetails';
import { RateType, ListingParams, User } from '../commonlib';

export default function useUserListings() {
    const address = 'http://localhost:3000/users';
    
    //TODO - TYpe my api call output from my table

    const [users, setUsers] = useState<Listing[]>([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);

    
    useEffect(() => {
        fetch(address)
            .then(res => res.json())
            .then(data => {
                const listings = data.map((item: any) => new Listing({
                        id: item.id,
                        owner: {name: item.name}, //ugly, must fix
                        price: item.wealth, //TODO - wealth? must change
                        rateType: item.rateType ?? RateType.DAILY, //TODO - this must be within the database
                        comment: item.comment ?? null,
                    }
                ))
                setUsers(listings);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);  

    //TODO - Convert this into a util


    return { users, loading, error };
}