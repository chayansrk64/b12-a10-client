import React, { use } from 'react';
import ListingCard from './ListingCard';
import SectionTitle from '../SectionTitle/SectionTitle';
import { motion } from "motion/react"


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
            <motion.div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8'
                variants={{hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:0.25}}}}
                initial="hidden"
                animate="show"
            >
                {
                    listings.map(listing => <ListingCard listing={listing} key={listing._id}></ListingCard>)
                }
            </motion.div>
        </div>
    );
};

export default RecentListings;