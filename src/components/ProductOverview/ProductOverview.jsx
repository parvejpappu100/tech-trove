import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ProductOverview = ({ product }) => {
    return (
        <div className='my-28'>
            <Tabs>
                <div className='text-xl font-semibold'>
                    <TabList>
                        <Tab>Description</Tab>
                        <Tab>Review</Tab>
                        <Tab>Shipping Information</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <h2 className='text-2xl my-8 font-semibold'>Overview</h2>
                    <p>{product?.description.details}</p>
                    <div className='mt-12'>
                        {
                            product?.description.features.map(feature => <div>
                                <ul className='list-disc'><li className='my-3'>{feature}</li></ul>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl my-8 font-semibold'>Customer Review</h2>
                    <div className='mb-5'>
                        <Rating style={{ maxWidth: 100 }} value="5" readOnly />
                    </div>
                    <hr className='w-full' />
                    <div className='my-12'>
                        {
                            product?.reviews.map(review => <div key={review._id}>
                                <div className='mb-16'>
                                    <h3 className='text-xl font-semibold my-3'>{review.name}</h3>
                                    <p>{review.date}</p>
                                    <div className='my-5'>
                                        <Rating style={{ maxWidth: 100 }} value={review.rating} readOnly />
                                    </div>
                                    <p>{review.review}</p>
                                    <img className='my-5 w-[200px]' src={review?.img} alt="" />
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ProductOverview;