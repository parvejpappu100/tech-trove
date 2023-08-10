import React from 'react';
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel';
import SpecialDiscount from '../../components/SpeacialDiscount/SpecialDiscount';
import Services from '../../components/Services/Services';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import OffersProducts from '../../components/OffersProducts/OffersProducts';
import NewArrivalBanner from '../../components/NewArrivalBanner/NewArrivalBanner';
import BestSellers from '../../components/BestSellers/BestSellers';
import Blogs from '../../components/Blogs/Blogs';
import Sponsors from '../../components/Sponsors/Sponsors';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Home | Tech Trove</title>
            </Helmet>
            <BannerCarousel></BannerCarousel>
            <SpecialDiscount></SpecialDiscount>
            <Services></Services>
            <NewArrivals></NewArrivals>
            <OffersProducts></OffersProducts>
            <NewArrivalBanner></NewArrivalBanner>
            <BestSellers></BestSellers>
            <Blogs></Blogs>
            <Sponsors></Sponsors>
        </div>
    );
};

export default Home;