import { useEffect, useState } from 'react';
import Listing from '@/features/listings/ListingDetails';
import { RateType, ListingParams, User } from '../commonlib';

export default function useUserListings() {
    const address = 'http://localhost:3000/users';
    
    //TODO - TYpe my api call output from my table
    //TODO - Hashmap of my listings 
    //TODO - Only new data should be parsed in, perhaps too memory intensive?

    //Hooks for loading, error getting, and user list handling
    const [listings, setListings] = useState<Listing[]>([])               //Array of listings, can be empty at the start
    const [loading, setLoading] = useState(true);                   //Current state is that loading is true while this runs
    const [error, setError] = useState<null | string>(null);        //No errors, so start as null, but can be a string to display

    //Since we will be connecting to a PSQL database, useEffect is a good hook to use.
    useEffect(() => {
        fetch(address)
            .then(res => res.json()) //Read the promise response, convert to JSON
            .then(data => { //Converts the data into a listing map
                const listings = data.map((item: any) => new Listing({
                        id: item.id,
                        owner: {name: item.name}, //ugly, must fix
                        price: item.wealth, //TODO - wealth? must change
                        rateType: item.rateType ?? RateType.DAILY, //TODO - this must be within the database
                        comment: item.comment ?? null,
                    }
                ))
                //Set states once loaded
                setListings(listings);
                setLoading(false);
            })
            //If any errors are caught, return what the 
            //error message is and the page loading to false
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);  

    //NOTE - Consider making the conversion of the API calls into a listing


    return { listings, loading, error };
}