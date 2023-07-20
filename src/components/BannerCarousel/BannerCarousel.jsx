import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const BannerCarousel = () => {

    const [sliders, setSlider] = useState([]);

    useEffect(() => {
        fetch("slider.json")
            .then(res => res.json())
            .then(data => setSlider(data))
    }, [])

    return (
        <div className='bg-gradient-to-t from-[#DAE4F1] to-[#9ABADA] -mt-2 py-10 lg:py-20 lg:px-5'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {sliders.map(slider => <SwiperSlide
                    key={slider._id}
                >
                    <div className='flex lg:gap-10 px-4 lg:px-0 justify-between lg:container mx-auto items-center '>
                        <div className='w-full'>
                            <p className='text-red-500'>Big sale offer</p>
                            <h3 className='text-2xl my-3 md:my-0 lg:text-7xl font-semibold'>{slider.title}</h3>
                            <p className='hidden md:block my-4'>{slider.details}</p>
                            <button className='btn  bg-[#113366] border-none rounded-none text-white lg:px-8 hover:bg-white hover:text-black duration-500'>
                                <FaShoppingCart className='hidden md:block'></FaShoppingCart>
                                <span>Shop Now</span>
                            </button>
                        </div>
                        <div className='lg:w-full'>
                            <img className='lg:w-[600px] lg:h-[600px]' src={slider.image} alt="" />
                        </div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default BannerCarousel;