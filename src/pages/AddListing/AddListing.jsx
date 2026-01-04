import React, { use } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { AuthContext } from '../../provider/AuthContext';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const AddListing = () => {
    const {user, loading, setLoading} = use(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const location = form.location.value;
        const description = form.description.value;
        const image = form.image.value;

        // console.log({name, category, price, location, description, image, email: user?.email, date: new Date()});

       const newListing = {name, category, price, location, description, image, email: user?.email, date: new Date()};

    // save to db

        fetch('https://pawmart-server-dusky.vercel.app/listings', {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newListing)
        })
        .then(res => res.json())
        .then(data => {
            console.log('after saved to db=>', data);
            if(data.insertedId){
                toast("Listing Added")
                setLoading(false)
                form.reset()
            }
        })

    }


    if(loading){
      return <LoadingSpinner></LoadingSpinner>
    }


    return (
        <div className='max-w-7xl mx-auto mt-24'>
           <SectionTitle title="Add Listing"></SectionTitle>

         <div className='lg:w-1/2 mx-auto my-6'>

             <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product/Pet Name */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Product/Pet Name</label>
          <input
            type="text"
            name="name"
             
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="e.g. Golden Retriever Puppy"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Category</label>
          <select
            name="category"
             
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select Category</option>
            <option value="Pets">Pets (Adoption)</option>
            <option value="Pet Food">Pet Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Pet Care">Pet Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Price (৳)</label>
          <input
            type="number"
            name="price"
            
            required
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
            
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="e.g. Dhaka, Chittagong"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Description</label>
          <textarea
            name="description"
           
            required
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
            
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="https://example.com/image.jpg"
          />
        </div>

       
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#B7B89F] hover:bg-[#777C6D]  text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Submit Listing
        </button>
      </form>
         </div>
        </div>
    );
};

export default AddListing;