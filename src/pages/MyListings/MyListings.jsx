import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

const MyListings = () => {
    const {user} = use(AuthContext)
    const [myListings, setMyListings] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/listings?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyListings(data)
            // console.log('data by user', data);
        })
    }, [user])

const handleDelete = (id) => {
  // Show confirmation toast with buttons
  toast.info(
    <div className="flex flex-col gap-2">
      <p className="font-medium text-gray-800">Are you sure you want to delete this listing?</p>
      <div className="flex gap-3 justify-end">
        <button
          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 text-sm"
          onClick={() => {
            toast.dismiss(); // close the toast
          }}
        >
          Cancel
        </button>

        <button
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
          onClick={() => {
            // Proceed with delete
            toast.dismiss(); // close the confirmation toast
            fetch(`http://localhost:3000/listings/${id}`, {
              method: 'DELETE',
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0 || data.success) {
                  setMyListings((prev) => prev.filter((item) => item._id !== id));
                  toast.success('Listing deleted successfully!');
                } else {
                  toast.error('Failed to delete. Try again.');
                }
              })
              .catch((err) => {
                console.error(err);
                toast.error('Something went wrong!');
              });
          }}
        >
          Delete
        </button>
      </div>
    </div>,
    {
      autoClose: false, // keep toast open until user acts
      closeOnClick: false,
      draggable: false,
    }
  );
};

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
          <Link to={`/listing-update/${listing._id}`}
          className="btn btn-ghost btn-xs bg-green-500 text-white me-2 tooltip" data-tip="Update Your Product">
          Update
          </Link>
          <button onClick={() => handleDelete(`${listing._id}`)} className="btn btn-ghost btn-xs bg-red-500 text-white tooltip" data-tip="Delete Your Product">Delete</button>
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