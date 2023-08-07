import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ProductOverview;