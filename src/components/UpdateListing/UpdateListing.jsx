import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const UpdateListing = () => {

    const listing = useLoaderData()
    // console.log('update page', listing);


    const handleUpdateListing = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const location = form.location.value;
        const description = form.description.value;
        const image = form.image.value;

        const updateListing = {
            name,
            price,
            location,
            description,
            image
        }

        fetch(`https://pawmart-server-dusky.vercel.app/listings/${listing._id}`, {
            method: "PATCH",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updateListing)
        })
        .then(res => res.json())
        .then(data => {
            console.log('updated listing', data);
            if(data.modifiedCount > 0){
                toast('Listing Updated!')
                 
            }
        })


    }



    return (
        <div className='max-w-7xl mx-auto'>
             <SectionTitle title="Update Listing"></SectionTitle>

             {/* update listing form container */}
             <div className='w-1/2 mx-auto my-8'>
        <form onSubmit={handleUpdateListing} className="space-y-4">
        {/* Product/Pet Name */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Product/Pet Name</label>
          <input
            type="text"
            name="name"
            defaultValue={listing.name}
            
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="e.g. Golden Retriever Puppy"
          />
        </div>

         
        {/* Price */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Price (৳)</label>
          <input
            type="number"
            name="price"
            defaultValue={listing.price}
            
            // disabled={formData.category === "Pets"}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:bg-gray-100"
            placeholder="Enter price or 0 for adoption"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Location</label>
          <input
            type="text"
            name="location"
            defaultValue={listing.location}
            
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="e.g. Dhaka, Chittagong"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Description</label>
          <textarea
            name="description"
            defaultValue={listing.description}
            
            rows="3"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Write a short description..."
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Image URL</label>
          <input
            type="url"
            name="image"
            defaultValue={listing.image}
            
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="https://example.com/image.jpg"
          />
        </div>

       
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#B7B89F] hover:bg-[#777C6D] text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Update Listing
        </button>
      </form>
             </div>
        </div>
    );
};

export default UpdateListing;