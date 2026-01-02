import React, { use } from 'react';
import ListingCard from './ListingCard';
import SectionTitle from '../SectionTitle/SectionTitle';


const RecentListings = ({listingsPromise}) => {
    const listings = use(listingsPromise)
    // console.log(listings);
    return (
        <div className='max-w-7xl mx-auto overflow-x-hidden'>
            <div>
                <SectionTitle
                title="Recent Listings"
                subtitle="The most recent listings are available here"
                />
            </div>
            <div className='overflow-x-hidden grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8'
              
            >
                {
                    listings.map(listing => <ListingCard listing={listing} key={listing._id}></ListingCard>)
                }
            </div>
        </div>
    );
};

export default RecentListings;