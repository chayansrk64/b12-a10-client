import Banner from '../../components/Banner/Banner';
import RecentListings from '../../components/RecentListings/RecentListings';
import AdoptionAwareness from '../../components/AdoptionAwareness/AdoptionAwareness';
import PetHeroes from '../../components/PetHeroes/PetHeroes';
import Categories from '../../components/Categories/Categories';
 
const listingsPromise = fetch('http://localhost:3000/latest-listings').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories listingsPromise={listingsPromise}></Categories>
            <RecentListings listingsPromise={listingsPromise}></RecentListings>
            <AdoptionAwareness></AdoptionAwareness>
            <PetHeroes></PetHeroes>
        </div>
    );
};

export default Home;