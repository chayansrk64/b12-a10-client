import React from 'react';

const AdoptionAwareness = () => {
    return (
        <div>
             <section className="bg-linear-to-br from-pink-50 to-pink-100 py-16 px-6 text-center rounded-3xl shadow-inner max-w-5xl mx-auto my-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4">
        <span className="h-0.5 w-10 bg-pink-500 rounded"></span>
        Why Adopt from <span className="text-pink-600">PawMart?</span>
        <span className="h-0.5 w-10 bg-pink-500 rounded"></span>
      </h2>

      <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Every adoption from <span className="font-semibold text-pink-600">PawMart</span> gives a second chance to a loving animal in need. 
        By choosing to adopt instead of buying, you help reduce pet homelessness, 
        support rescue initiatives, and open your heart to a loyal companion who’s 
        waiting for a forever home.
      </p>

      <button className="mt-8 bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition shadow">
        Meet Our Rescues
      </button>
    </section>
        </div>
    );
};

export default AdoptionAwareness;