import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Sponsors = () => {

    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
        fetch("sponsors.json")
            .then(res => res.json())
            .then(data => setSponsors(data))
    }, []);

    return (
        <div className='bg-[#F2F2F2] py-24'>
            <div className='lg:container mx-auto'>
                <Swiper
                    autoplay={true}
                    loop={true}
                    slidesPerView={2}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        sponsors.map(sponsor => <SwiperSlide
                            key={sponsor._id}
                        >
                            <div className='flex justify-center items-center'>
                                <img className='grayscale hover:grayscale-0 duration-700 transition' src={sponsor.img} alt="" />
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Sponsors;