import React, { use, useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ListingCard from '../../components/RecentListings/ListingCard';
import { AuthContext } from '../../provider/AuthContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const PetsAndSupplies = () => {
  const {loading, setLoading} = use(AuthContext);
  const [listings, setListings] = useState([]);
  const [displayedListings, setDisplayedListings] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // ✅ Fetch all listings and show all by default
  useEffect(() => {
    fetch('http://localhost:3000/listings')
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setDisplayedListings(data); 
        setLoading(false)
      })
      .catch((err) => console.error(err));
  }, [setLoading]);

  // ✅ Handle category filter
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);

    let filtered = listings;

    if (value !== '') {
      filtered = listings.filter((item) => item.category === value);
    }

    // Apply search as well
    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setDisplayedListings(filtered);
  };

  // ✅ Handle live search
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    let filtered = listings;

    if (selectedCategory !== '') {
      filtered = listings.filter((item) => item.category === selectedCategory);
    }

    if (value) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(value)
      );
    }

    setDisplayedListings(filtered);
  };

   if(loading){
    return <LoadingSpinner></LoadingSpinner>
  }
 

  return (
    <div className="max-w-7xl mx-auto px-4">
      <SectionTitle title="Pets and Listings" />

      {/* Filter + Search Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
        {/* Category Filter */}
        <div className="w-full md:w-1/3">
          <label className="block text-gray-700 mb-1 font-medium">
            Filter by Category
          </label>
          <select
            name="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">All Categories</option>
            <option value="Pets">Pets (Adoption)</option>
            <option value="Pet Food">Pet Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Pet Care">Pet Care Products</option>
          </select>
        </div>

        {/* Search Input */}
        <div className="w-full md:w-1/3">
          <label className="block text-gray-700 mb-1 font-medium">
            Search Listings
          </label>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

 

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {displayedListings.length > 0 ? (
          displayedListings.map((listing) => (
            <ListingCard key={listing._id} listing={listing} />
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No listings found.
          </p>
        )}
      </div>
    </div>
  );
};

export default PetsAndSupplies;
