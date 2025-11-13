import React, { use } from 'react';
import ListingCard from './ListingCard';
import SectionTitle from '../SectionTitle/SectionTitle';

const RecentListings = ({listingsPromise}) => {
    const listings = use(listingsPromise)
    // console.log(listings);
    return (
        <div className='max-w-7xl mx-auto'>
            <div>
                <SectionTitle
                title="Recent Listings"
                subtitle="The most recent listings are available here"
                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
                {
                    listings.slice(0,6).map(listing => <ListingCard listing={listing} key={listing._id}></ListingCard>)
                }
            </div>
        </div>
    );
};

export default RecentListings;