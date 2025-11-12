import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router';

const MyListings = () => {
    const {user} = use(AuthContext)
    const [myListings, setMyListings] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/listings?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyListings(data)
            console.log('data by user', data);
        })
    }, [user])


    return (
        <div className='max-w-7xl mx-auto'>
            <SectionTitle title="My Listings"></SectionTitle>
            {/* table container */}
            <div>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
           SL No.
        </th>
        <th>Product Name</th>
        <th>Product Category</th>
        <th>Buyer Email</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>

      {
        myListings.map((listing, index) =>  <tr key={listing._id}>
        <td>
         {index + 1}
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={listing.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{listing.name}</div>
              <div className="text-sm opacity-50">{listing.location}</div>
            </div>
          </div>
        </td>
         <td className="">{listing.category}</td>
        <td>
         <div className="font-bold">{listing.email}</div>
           

        </td>
        <td className="font-bold">{listing.price}</td>
        <td>
          <Link to={`/listing-update/${listing._id}`} className="btn btn-ghost btn-xs bg-green-500 text-white me-2">Update</Link>
          <button className="btn btn-ghost btn-xs bg-red-500 text-white">Delete</button>
        </td>
      </tr>
     )
      }
     
      
    </tbody>
   
  </table>
</div>
            </div>
        </div>
    );
};

export default MyListings;