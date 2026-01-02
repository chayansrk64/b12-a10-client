import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation, Parallax } from "swiper/modules";
 

const Banner = () => {
    return (
         <div className='md:min-h-[700px] relative pt-16 lg:pt-[69px]'>
         
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, Parallax]}
          className="mySwiper"
        >
          
          <SwiperSlide>
            
                  <img className='md:h-[700px] w-full' src="https://webdesign-finder.com/pet-space-clinic/wp-content/uploads/2017/06/slide3-3.jpg" alt="" />
                  <div className='absolute top-5 md:top-20 left-18 md:left-20 '>
                      <h1 className='text-3xl md:text-6xl font-semibold text-white my-3'>Find Your Furry Friend Today!!</h1>
                      <h3 className='md:text-3xl text-white md:py-3'>Discover loving companions waiting to meet <br /> you—start your adoption journey now.</h3>
                  </div>
          </SwiperSlide>
          <SwiperSlide>
                  <img className='md:h-[700px] w-full' src="https://webdesign-finder.com/pet-space-clinic/wp-content/uploads/2017/06/Slide2-1.jpg" alt="" />
                  <div className='absolute top-5 md:top-20 left-18 md:left-20 '>
                      <h1 className='text-3xl md:text-6xl font-semibold text-white my-3'>Adopt, Don’t Shop — Give a Pet a Home.</h1>
                      <h3 className='md:text-3xl text-white md:py-3'>Open your heart and home to pets <br /> who truly need you.</h3>
                  </div>
          </SwiperSlide>
          <SwiperSlide>
              <img className='md:h-[700px] w-full' src="https://webdesign-finder.com/pet-space-clinic/wp-content/uploads/2017/06/slide1-1.jpg" alt="" />
              <div className='absolute top-5 md:top-20 left-18 md:left-20 '>
                      <h1 className='text-3xl md:text-6xl font-semibold text-white my-3'>Because Every Pet Deserves Love and Care.</h1>
                      <h3 className='md:text-3xl text-white md:py-3'> Every tail wags for kindness—bring <br /> love into a pet’s life today. </h3>
                  </div>
          </SwiperSlide>
          
        </Swiper>
       
    </div>
    );
};

export default Banner;