import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Helmet } from 'react-helmet-async';
import useSaved from '../../hooks/useSaved';
import SavedProduct from '../../components/SavedProduct/SavedProduct';
import { Link } from 'react-router-dom';

const Wishlist = () => {

    const [saved, refetchSaved] = useSaved();

    return (
        <div>
            <Helmet>
                <title>Wishlist | Tech Trove</title>
            </Helmet>
            <PageTitle currentPage={"Wishlist"}></PageTitle>
            <div className='lg:container mx-auto px-4 my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    saved.length !== 0 ? saved.map(item => <SavedProduct key={item._id} refetchSaved={refetchSaved} item={item}></SavedProduct>) : <div className='bg-[#15407F] py-3 text-white px-4 text-center font-semibold'>
                        <h3>You don't saved any item ! <Link className='text-red-500' to={`/shop/${"product"}`}>Shop Now</Link></h3>
                    </div>
                }
            </div>
        </div>
    );
};

export default Wishlist;