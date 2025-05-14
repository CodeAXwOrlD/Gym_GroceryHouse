"use client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from "react-hook-form";
import { TailSpin } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import CartCard from '@/components/CartCard';
import { get_all_cart_Items } from '@/Services/common/cart';
import { setCart } from '@/utils/CartSlice';
import { setNavActive } from '@/utils/AdminNavSlice';
import { create_a_new_order } from '@/Services/common/order';
export default function Page() {
    var _this = this;
    var _a = useState(false), loader = _a[0], setLoader = _a[1];
    var Router = useRouter();
    var dispatch = useDispatch();
    var user = useSelector(function (state) { return state.User.userData; });
    var cartData = useSelector(function (state) { return state.Cart.cart; });
    var _b = useState(true), loading = _b[0], setLoading = _b[1];
    useEffect(function () {
        if (!Cookies.get('token') || user === null) {
            Router.push('/');
        }
        dispatch(setNavActive('Base'));
    }, [dispatch, Router]);
    useEffect(function () {
        toast.warning("This is Dummy Website Don't add your Origial Details Here !");
    }, []);
    useEffect(function () {
        fetchCartData();
    }, []);
    var fetchCartData = function () { return __awaiter(_this, void 0, void 0, function () {
        var cartData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(user === null || user === void 0 ? void 0 : user._id))
                        return [2 /*return*/, Router.push('/')];
                    return [4 /*yield*/, get_all_cart_Items(user === null || user === void 0 ? void 0 : user._id)];
                case 1:
                    cartData = _a.sent();
                    if (cartData === null || cartData === void 0 ? void 0 : cartData.success) {
                        dispatch(setCart(cartData === null || cartData === void 0 ? void 0 : cartData.data));
                    }
                    else {
                        toast.error(cartData === null || cartData === void 0 ? void 0 : cartData.message);
                    }
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var _c = useForm({
        criteriaMode: "all"
    }), register = _c.register, errors = _c.formState.errors, handleSubmit = _c.handleSubmit;
    var onSubmit = function (data) { return __awaiter(_this, void 0, void 0, function () {
        var finalData, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoader(true);
                    finalData = {
                        user: user === null || user === void 0 ? void 0 : user._id,
                        orderItems: cartData === null || cartData === void 0 ? void 0 : cartData.map(function (item) {
                            var _a;
                            return {
                                product: (_a = item === null || item === void 0 ? void 0 : item.productID) === null || _a === void 0 ? void 0 : _a._id,
                                qty: item === null || item === void 0 ? void 0 : item.quantity
                            };
                        }),
                        shippingAddress: {
                            fullName: data === null || data === void 0 ? void 0 : data.fullName,
                            address: data === null || data === void 0 ? void 0 : data.address,
                            city: data === null || data === void 0 ? void 0 : data.city,
                            postalCode: data === null || data === void 0 ? void 0 : data.postalCode,
                            country: data === null || data === void 0 ? void 0 : data.country,
                        },
                        paymentMethod: 'PayPal',
                        itemsPrice: totalPrice,
                        taxPrice: 100,
                        shippingPrice: 500,
                        totalPrice: totalPrice + 100 + 500,
                        isPaid: true,
                        paidAt: new Date(),
                        isDelivered: false,
                        deliveredAt: new Date(),
                    };
                    return [4 /*yield*/, create_a_new_order(finalData)];
                case 1:
                    res = _a.sent();
                    if (res === null || res === void 0 ? void 0 : res.success) {
                        toast.success(res === null || res === void 0 ? void 0 : res.message);
                        setTimeout(function () {
                            Router.push('/');
                        }, 1000);
                        setLoader(false);
                    }
                    else {
                        toast.error(res === null || res === void 0 ? void 0 : res.message);
                        setLoader(false);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    function calculateTotalPrice(myCart) {
        var totalPrice = myCart === null || myCart === void 0 ? void 0 : myCart.reduce(function (acc, item) {
            var _a;
            return acc + (Number(item === null || item === void 0 ? void 0 : item.quantity) * Number((_a = item === null || item === void 0 ? void 0 : item.productID) === null || _a === void 0 ? void 0 : _a.productPrice));
        }, 0);
        return totalPrice;
    }
    var totalPrice = calculateTotalPrice(cartData);
    return (<div className='w-full h-full bg-gray-50 px-2'>
            <div className="text-sm breadcrumbs  border-b-2 border-b-orange-600">
                <ul className='dark:text-black'>
                    <li>
                        <Link href={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                        Order
                    </li>
                </ul>
            </div>
            <div className='w-full h-20 my-2 text-center'>
                <h1 className='text-2xl py-2 dark:text-black'>Your Order</h1>
            </div>


            {loading || loader ? (<div className='w-full  flex-col h-96 flex items-center justify-center '>
                        <TailSpin height="50" width="50" color="orange" ariaLabel="tail-spin-loading" radius="1" wrapperStyle={{}} wrapperClass="" visible={true}/>
                        <p className='text-sm mt-2 font-semibold text-orange-500'>Loading Hold Tight ....</p>
                    </div>) : (<div className='w-full  h-full flex-col md:flex-row flex items-start justify-center'>

                        <div className='md:w-2/3 w-full px-2 h-full flex-col items-end justify-end flex'>
                            <div className='w-full flex flex-col items-center py-2 overflow-auto h-96'>
                                {(cartData === null || cartData === void 0 ? void 0 : cartData.length) === 0 ?
                <div className='w-full h-full flex items-center justify-center flex-col'>
                                            <p className='my-4 mx-2 text-lg font-semibold '>No Item Available in Cart</p>
                                            <Link href={"/"} className='btn text-white'>Shop Now</Link>
                                        </div>
                :
                    cartData === null || cartData === void 0 ? void 0 : cartData.map(function (item) {
                        return <CartCard key={item === null || item === void 0 ? void 0 : item._id} productID={item === null || item === void 0 ? void 0 : item.productID} userID={item === null || item === void 0 ? void 0 : item.userID} _id={item === null || item === void 0 ? void 0 : item._id} quantity={item === null || item === void 0 ? void 0 : item.quantity}/>;
                    })}
                            </div>
                            <div className='w-full  py-2 my-2 flex justify-end '>
                                <h1 className='py-2 tracking-widest mb-2  border-b px-6 border-orange-600 text-sm  flex flex-col '>  Original Price  <span className='text-xl font-extrabold'>Rs {totalPrice || 0}</span> </h1>
                                <h1 className='py-2 tracking-widest mb-2  border-b px-6 border-orange-600 text-sm  flex flex-col '>  Shipping Price  <span className='text-xl font-extrabold'>Rs {500}</span> </h1>
                                <h1 className='py-2 tracking-widest mb-2  border-b px-6 border-orange-600 text-sm  flex flex-col '>  tax Price  <span className='text-xl font-extrabold'>Rs {100}</span> </h1>
                            </div>
                            <div className='w-full  py-2 my-2 flex justify-end '>
                                <h1 className='py-2 tracking-widest mb-2  border-b px-6 border-orange-600 text-sm  flex flex-col '>  Total Order Price  <span className='text-xl font-extrabold'>Rs {totalPrice + 600}</span> </h1>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/3 px-2 w-full max-w-lg  py-2 flex-col ">
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input {...register("fullName", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full"/>
                                {errors.fullName && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                            </div>
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text">Your Address</span>
                                </label>
                                <input {...register("address", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full"/>
                                {errors.address && <span className='text-red-500 text-xs mt-2'>This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">City</span>
                                </label>
                                <input {...register("city", { required: true })} type="text" className="file-input file-input-bordered w-full "/>
                                {errors.city && <span className='text-red-500 text-xs mt-2'>This field is required</span>}

                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Postal Code</span>
                                </label>
                                <input {...register("postalCode", { required: true })} type="number" className="file-input file-input-bordered w-full "/>
                                {errors.postalCode && <span className='text-red-500 text-xs mt-2'>This field is required</span>}

                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Country</span>
                                </label>
                                <input {...register("country", { required: true })} type="text" className="file-input file-input-bordered w-full "/>
                                {errors.country && <span className='text-red-500 text-xs mt-2'>This field is required</span>}

                            </div>

                            <button className='btn btn-block mt-3'>Order !</button>

                        </form>

                    </div>)}


            <ToastContainer />
        </div>);
}
