import Banner from '../../components/Banner/Banner';
import RecentListings from '../../components/RecentListings/RecentListings';
import PetHeroes from '../../components/PetHeroes/PetHeroes';
import Categories from '../../components/Categories/Categories';
import HighLights from '../../components/HighLights/HighLights';
import Statistics from '../../components/Statistics/Statistics';
import Testimonials from '../../components/Testimonials/Testimonials';
import FAQ from '../../components/FAQ/FAQ';
import CTA from '../../components/CTA/CTA';
 
const listingsPromise = fetch('https://pawmart-server-dusky.vercel.app/latest-listings').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories listingsPromise={listingsPromise}></Categories>
            <RecentListings listingsPromise={listingsPromise}></RecentListings>
            <HighLights></HighLights>
            <PetHeroes></PetHeroes>
            <Statistics></Statistics>
            <Testimonials></Testimonials>
            <FAQ></FAQ>
            <CTA></CTA>
        </div>
    );
};

export default Home;