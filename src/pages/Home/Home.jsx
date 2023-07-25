import React from 'react';
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel';
import SpecialDiscount from '../../components/SpeacialDiscount/SpecialDiscount';

const Home = () => {
    return (
        <div className=''>
            <BannerCarousel></BannerCarousel>
            <SpecialDiscount></SpecialDiscount>
        </div>
    );
};

export default Home;