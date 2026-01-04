import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import ListingCard from '../../components/RecentListings/ListingCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const CategoryPage = () => {
    const {categoryName} = useParams()
    console.log(categoryName);
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://pawmart-server-dusky.vercel.app/categories`)
        .then(res => res.json())
        .then(data => {
            const filtered = data.filter(item => item.category === categoryName)
            setItems(filtered);
        })
    }, [categoryName])

    console.log(items);

    return (
        <div className='max-w-7xl mx-auto my-8'>
            <SectionTitle title={`Category - ${categoryName}`}></SectionTitle>
            {/* category cards */}
            <div className='grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    items.map(item =>    <div key={item._id} className="relative bg-linear-to-br from-red-100 to-red-200 rounded-2xl shadow-md hover:shadow-xl transition p-4 ">
      {/* Favorite Icon */}
      <button className="absolute top-3 right-3 bg-white rounded-full p-1 shadow hover:bg-purple-100 transition">
        
      </button>

      {/* Image */}
      <div className="bg-white rounded-xl overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Details */}
      <div className="bg-white -mt-4 p-4 rounded-xl">
        <h3 className="font-semibold pt-4 text-lg text-gray-800">{item.name}</h3>
        <div className="flex gap-2 mt-1 mb-2">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-700">
            {item.category}
          </span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-700">
            {item.location}
          </span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2">
          {item.description}
        </p>

        {/* Price & Button */}
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-xs text-gray-400">PRICE</p>
            <p className="text-lg font-semibold text-gray-900">
              {item.price === 0 ? "Free" : `৳${item.price}`}
            </p>
          </div>
          <Link to={`/listing-details/${item._id}`} className="bg-[#30b5b2] text-white px-4 py-2 rounded-lg transition">
            See Details
          </Link>
        </div>
      </div>
    </div>)
                }
            </div>
           
        </div>
    );
};

export default CategoryPage;