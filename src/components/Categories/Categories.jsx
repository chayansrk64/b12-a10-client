import React, { use } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from 'react-router';

const Categories = ({listingsPromise}) => {
    const categories = use(listingsPromise)
    console.log('categories', categories);

    const pets = categories.filter(item => item.category === "Pets").slice(0,1)
    const petFood = categories.filter(item => item.category === "Pet Food").slice(0,1)
    const Accessories = categories.filter(item => item.category === "Accessories").slice(0,1)
    const petCare = categories.filter(item => item.category === "Pet Care").slice(0,1)

    console.log(pets, petFood, Accessories, petCare);

    return (
        <div className='max-w-7xl mx-auto'>
            <SectionTitle title="Categories" />
            {/* categories */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {/* pets */}
                 <div className="">
                {pets.map((item, index) => (
                <Link key={index} to={`/category/${item.category}`}>
                    <div className="card">
                    <img src={item.image} alt={item.name} className="w-full h-40 object-cover"/>
                    <h3>{item.name}</h3>
                    <p className='font-semibold'>Category: {item.category}</p>
                    </div>
                </Link>
                ))}
            </div>
            {/* petFood */}
                 <div className="">
                {petFood.map((item, index) => (
                <Link key={index} to={`/category/${item.category}`}>
                    <div className="card">
                    <img src={item.image} alt={item.name} className="w-full h-40 object-cover"/>
                    <h3>{item.name}</h3>
                   <p className='font-semibold'>Category: {item.category}</p>
                    </div>
                </Link>
                ))}
            </div>
            {/*Accessories  */}
                 <div className="">
                {Accessories.map((item, index) => (
                <Link key={index} to={`/category/${item.category}`}>
                    <div className="card">
                    <img src={item.image} alt={item.name} className="w-full h-40 object-cover"/>
                    <h3>{item.name}</h3>
                    <p className='font-semibold'>Category: {item.category}</p>
                    </div>
                </Link>
                ))}
            </div>
            {/* petCare */}
                 <div className="">
                {petCare.map((item, index) => (
                <Link key={index} to={`/category/${item.category}`}>
                    <div className="card">
                    <img src={item.image} alt={item.name} className="w-full h-40 object-cover"/>
                    <h3>{item.name}</h3>
                    <p className='font-semibold'>Category: {item.category}</p>
                    </div>
                </Link>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Categories;