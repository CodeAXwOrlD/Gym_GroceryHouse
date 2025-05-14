"use client";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import AdminNavbar from '@/components/AdminNavbar';
import AdminSidebar from '@/components/AdminSidebar';
import SuperComponent from '@/components/SuperComponent';
import { ToastContainer, toast } from 'react-toastify';
import useSWR from 'swr';
import { get_all_categories } from '@/Services/Admin/category';
import { useDispatch } from 'react-redux';
import { setCatLoading, setCategoryData, setOrderData, setProdLoading, setProductData } from '@/utils/AdminSlice';
import Loading from '../loading';
import { setNavActive } from '@/utils/AdminNavSlice';
import { get_all_products } from '@/Services/Admin/product';
import { get_all_orders } from '@/Services/Admin/order';
export default function Dashboard() {
    var Router = useRouter();
    var dispatch = useDispatch();
    useEffect(function () {
        var user = JSON.parse(localStorage.getItem('user') || '{}');
        if (!Cookies.get('token') || (user === null || user === void 0 ? void 0 : user.role) !== 'admin' || (user === null || user === void 0 ? void 0 : user.email) !== 'mrmoiz.dev@gmail.com') {
            Router.push('/');
        }
        dispatch(setNavActive('Base'));
    }, [dispatch, Cookies, Router]);
    var _a = useSWR('/gettingAllCategoriesFOrAdmin', get_all_categories), categoryData = _a.data, categoryLoading = _a.isLoading;
    if ((categoryData === null || categoryData === void 0 ? void 0 : categoryData.success) !== true)
        toast.error(categoryData === null || categoryData === void 0 ? void 0 : categoryData.message);
    var _b = useSWR('/gettingAllProductsFOrAdmin', get_all_products), productData = _b.data, productLoading = _b.isLoading;
    if ((productData === null || productData === void 0 ? void 0 : productData.success) !== true)
        toast.error(productData === null || productData === void 0 ? void 0 : productData.message);
    var _c = useSWR('/gettingAllOrdersForAdmin', get_all_orders), orderData = _c.data, orderLoading = _c.isLoading;
    if ((orderData === null || orderData === void 0 ? void 0 : orderData.success) !== true)
        toast.error(orderData === null || orderData === void 0 ? void 0 : orderData.message);
    console.log(orderData === null || orderData === void 0 ? void 0 : orderData.data);
    useEffect(function () {
        dispatch(setCategoryData(categoryData === null || categoryData === void 0 ? void 0 : categoryData.data));
        dispatch(setCatLoading(categoryLoading));
        dispatch(setProductData(productData === null || productData === void 0 ? void 0 : productData.data));
        dispatch(setProdLoading(productLoading));
        dispatch(setOrderData(orderData === null || orderData === void 0 ? void 0 : orderData.data));
        dispatch(setCatLoading(orderLoading));
    }, [categoryData, dispatch, categoryLoading, productData, productLoading, orderData, orderLoading]);
    return (<div className='w-full h-screen flex  bg-gray-50 overflow-hidden'>
      <AdminSidebar />
      <div className='w-full h-full '>
        <AdminNavbar />
        <div className='w-full h-5/6  flex flex-wrap items-start justify-center overflow-y-auto  px-4 py-2'>
          {categoryLoading || productLoading ? <Loading /> : <SuperComponent />}
        </div>
      </div>
      <ToastContainer />
    </div>);
}
