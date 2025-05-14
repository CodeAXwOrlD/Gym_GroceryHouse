"use client";
import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import Loading from '@/app/loading';
export default function FeaturedProduct() {
    var prodData = useSelector(function (state) { return state.Admin.product; });
    var prodLoading = useSelector(function (state) { return state.Admin.productLoading; });
    var FeaturedProducts = prodData === null || prodData === void 0 ? void 0 : prodData.filter(function (prod) {
        if (prod === null || prod === void 0 ? void 0 : prod.productFeatured) {
            return prod;
        }
    });
    var filteredProducts = FeaturedProducts === null || FeaturedProducts === void 0 ? void 0 : FeaturedProducts.slice(0, 9);
    return (<div className='w-full bg-gray-50 text-black  flex items-center flex-col justify-start'>
            <div className='flex items-center justify-center px-2 py-2 mb-2'>
                <h1 className='py-2 px-4 border-x-2 border-x-orange-500 font-semibold text-2xl '>Top Products</h1>
            </div>
            <div className='md:w-4/5 w-full px-1 h-full min-h-96 py-2 md:px-4 flex items-center justify-center flex-wrap'>
            {prodLoading ? <Loading /> :
            <>
                            {(filteredProducts === null || filteredProducts === void 0 ? void 0 : filteredProducts.length) < 1 ?
                    <h1 className='text-2xl font-semibold text-gray-500'>No Featured Products</h1>
                    :
                        filteredProducts === null || filteredProducts === void 0 ? void 0 : filteredProducts.map(function (item) {
                            return <ProductCard productName={item === null || item === void 0 ? void 0 : item.productName} productPrice={item === null || item === void 0 ? void 0 : item.productPrice} productFeatured={item === null || item === void 0 ? void 0 : item.productFeatured} productImage={item === null || item === void 0 ? void 0 : item.productImage} productCategory={item === null || item === void 0 ? void 0 : item.productCategory} productSlug={item === null || item === void 0 ? void 0 : item.productSlug} _id={item === null || item === void 0 ? void 0 : item._id} key={item === null || item === void 0 ? void 0 : item._id}/>;
                        })}
                        </>}

            </div>
        </div>);
}
