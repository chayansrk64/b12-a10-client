import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ListingCard from '../../components/RecentListings/ListingCard';

const PetsAndSupplies = () => {
    const [listings, setListings] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/listings')
        .then(res => res.json())
        .then(data => {
            setListings(data)
        })
    }, []);

    return (
        <div className='max-w-7xl mx-auto'>
            <SectionTitle title="Pets and Listings"></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
                {
                    listings.map(listing => <div key={listing._id}>
                        <ListingCard listing={listing}></ListingCard>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PetsAndSupplies;