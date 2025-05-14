"use client";
import { get_product_by_category_id } from '@/Services/Admin/product';
import Loading from '@/app/loading';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useSWR from 'swr';
export default function Page(_a) {
    var params = _a.params, searchParams = _a.searchParams;
    var _b = useState([]), thisProduct = _b[0], setThisProdData = _b[1];
    var _c = useSWR('/gettingProductOFSpecificCategoryID', function () { return get_product_by_category_id(params.id); }), data = _c.data, isLoading = _c.isLoading;
    if ((data === null || data === void 0 ? void 0 : data.success) !== true)
        toast.error(data === null || data === void 0 ? void 0 : data.message);
    useEffect(function () {
        setThisProdData(data === null || data === void 0 ? void 0 : data.data);
    }, [data]);
    var CategoryName = thisProduct === null || thisProduct === void 0 ? void 0 : thisProduct.map(function (item) {
        var _a;
        return (_a = item === null || item === void 0 ? void 0 : item.productCategory) === null || _a === void 0 ? void 0 : _a.categoryName;
    });
    return (<div className='w-full h-screen dark:text-black bg-gray-50 py-4 px-2 '>
            <div className="text-sm breadcrumbs  border-b-2 border-b-orange-600">
                <ul>
                    <li>
                        <Link href={'/'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        {(CategoryName === null || CategoryName === void 0 ? void 0 : CategoryName[0]) || "Loading Category"}
                    </li>
                </ul>
            </div>
            <div className='w-full h-5/6  flex items-start justify-center flex-wrap overflow-auto'>
                {isLoading ? <Loading /> : <>
                         {thisProduct === null || thisProduct === void 0 ? void 0 : thisProduct.map(function (item) {
                return <ProductCard productName={item === null || item === void 0 ? void 0 : item.productName} productPrice={item === null || item === void 0 ? void 0 : item.productPrice} productFeatured={item === null || item === void 0 ? void 0 : item.productFeatured} productImage={item === null || item === void 0 ? void 0 : item.productImage} productSlug={item === null || item === void 0 ? void 0 : item.productSlug} productCategory={item === null || item === void 0 ? void 0 : item.productCategory} _id={item === null || item === void 0 ? void 0 : item._id} key={item === null || item === void 0 ? void 0 : item._id}/>;
            })}
                    </>}
                {isLoading === false && thisProduct === undefined || (thisProduct === null || thisProduct === void 0 ? void 0 : thisProduct.length) < 1 && <p className='text-2xl my-4 text-center font-semibold text-red-400'>No Product Found in this Category</p>}
            </div>
            <ToastContainer />
        </div>);
}
