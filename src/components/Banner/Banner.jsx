import { Swiper, SwiperSlide } from 'swiper/react';
import {AnimatePresence,  motion } from "framer-motion";
import { useNavigate } from "react-router";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation, Parallax } from "swiper/modules";
import { useState } from 'react';

 const slides = [
  {
    id: 1,
    image: "https://webdesign-finder.com/pet-space-clinic/wp-content/uploads/2017/06/slide3-3.jpg",
    title: "Find Your Furry Friend Today!!",
    subtitle: "Discover loving companions waiting to meet you—start your adoption journey now.",
  },
  {
    id: 2,
    image: "https://webdesign-finder.com/pet-space-clinic/wp-content/uploads/2017/06/Slide2-1.jpg",
    title: "Adopt, Don’t Shop — Give a Pet a Home.",
    subtitle: "Open your heart and home to pets who truly need you.",
  },
  {
    id: 3,
    image: "https://webdesign-finder.com/pet-space-clinic/wp-content/uploads/2017/06/slide1-1.jpg",
    title: "Because Every Pet Deserves Love and Care.",
    subtitle: "Every tail wags for kindness—bring love into a pet’s life today.",
  },
];

 

const Banner = () => {

const [activeIndex, setActiveIndex] = useState(0);
 const navigate = useNavigate();

    return (
         <div className=' md:min-h-[700px] relative pt-16 lg:pt-[69px]'>
         
        <Swiper
         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation, Parallax]}
          className="mySwiper"
        >
          
 {slides.map((slide) => (
    <SwiperSlide key={slide.id}>
      <div className="relative w-full">
        <motion.img 
        key={activeIndex } 
            initial={{ opacity: 0, y: -50 , scale: 1.1}}
            animate={{ opacity: 1, y: 0 , scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}

        className="md:h-[700px] w-full object-cover" src={slide.image} alt={slide.title} />

        <div className="absolute top-5 md:top-20 left-4 md:left-40 lg:left-60 text-white max-w-2xl ">
          <motion.h1
            key={activeIndex + "title"} 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="text-3xl md:text-6xl font-semibold my-3"
          >
            {slide.title}
          </motion.h1>
          <motion.h3
            key={activeIndex + "-sub"} 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="md:text-3xl text-white md:py-3"
          >
            {slide.subtitle}
          </motion.h3>

          <motion.button
            onClick={() => navigate("/my-and-supplies")}
            key={activeIndex + "btn"} 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
           className='btn border-0 bg-[#B7B89F] mt-8 text-white'
          >
            Explore More
          </motion.button>
          
        </div>
      </div>
    </SwiperSlide>
  ))} 
          
          
        </Swiper>
       
    </div>
    );
};

export default Banner;