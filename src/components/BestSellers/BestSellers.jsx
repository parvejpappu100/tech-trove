import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductsCard from '../ProductsCard/ProductsCard';

const BestSellers = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch("allProducts.json")
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, []);

    const cameras = allProducts.filter(products => products.category === "Cameras");
    const electronics = allProducts.filter(products => products.category === "Electronics");
    const audio = allProducts.filter(products => products.category === "Audio");
    const computers = allProducts.filter(products => products.category === "Computers");
    const accessories = allProducts.filter(products => products.category === "Accessories");
    const laptop = allProducts.filter(products => products.category === "Laptop");
    const watches = allProducts.filter(products => products.category === "Watches");
    const mobile = allProducts.filter(products => products.category === "Mobile");
    const headphone = allProducts.filter(products => products.category === "Headphone");

    return (
        <div className='lg:container mx-auto my-12'>
            <SectionTitle title={"Bestsellers"}></SectionTitle>
            <div>
                <Tabs>
                    <div className='text-center text-xl font-semibold'>
                        <TabList>
                            <Tab>Cameras</Tab>
                            <Tab>Electronics</Tab>
                            <Tab>Audio</Tab>
                            <Tab>Computers</Tab>
                            <Tab>Accessories</Tab>
                            <Tab>Laptop</Tab>
                            <Tab>Watches</Tab>
                            <Tab>Mobile</Tab>
                            <Tab>Headphone</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-12'>
                            {
                                cameras.map(offerProduct => <ProductsCard
                                    key={offerProduct._id}
                                    product={offerProduct}
                                ></ProductsCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-12'>
                            {
                                electronics.map(offerProduct => <ProductsCard
                                    key={offerProduct._id}
                                    product={offerProduct}
                                ></ProductsCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-12'>
                            {
                                audio.map(offerProduct => <ProductsCard
                                    key={offerProduct._id}
                                    product={offerProduct}
                                ></ProductsCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-12'>
                            {
                                computers.map(offerProduct => <ProductsCard
                                    key={offerProduct._id}
                                    product={offerProduct}
                                ></ProductsCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-12'>
                            {
                                accessories.map(offerProduct => <ProductsCard
                                    key={offerProduct._id}
                                    product={offerProduct}
                                ></ProductsCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-12'>
                            {
                                laptop.map(offerProduct => <ProductsCard
                                    key={offerProduct._id}
                                    product={offerProduct}
                                ></ProductsCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-12'>
                            {
                                watches.map(offerProduct => <ProductsCard
                                    key={offerProduct._id}
                                    product={offerProduct}
                                ></ProductsCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-12'>
                            {
                                mobile.map(offerProduct => <ProductsCard
                                    key={offerProduct._id}
                                    product={offerProduct}
                                ></ProductsCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-12'>
                            {
                                headphone.map(offerProduct => <ProductsCard
                                    key={offerProduct._id}
                                    product={offerProduct}
                                ></ProductsCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default BestSellers;