import React from 'react';
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel';
import SpecialDiscount from '../../components/SpeacialDiscount/SpecialDiscount';
import Services from '../../components/Services/Services';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import OffersProducts from '../../components/OffersProducts/OffersProducts';
import NewArrivalBanner from '../../components/NewArrivalBanner/NewArrivalBanner';

const Home = () => {
    return (
        <div className=''>
            <BannerCarousel></BannerCarousel>
            <SpecialDiscount></SpecialDiscount>
            <Services></Services>
            <NewArrivals></NewArrivals>
            <OffersProducts></OffersProducts>
            <NewArrivalBanner></NewArrivalBanner>
        </div>
    );
};

export default Home;