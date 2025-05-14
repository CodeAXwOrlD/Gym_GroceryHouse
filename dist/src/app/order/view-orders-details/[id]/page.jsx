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
import { get_order_details } from '@/Services/common/order';
import Loading from '@/app/loading';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { GrDeliver } from 'react-icons/gr';
import { TbListDetails } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
export default function Page(_a) {
    var _this = this;
    var _b, _c, _d, _e, _f;
    var params = _a.params, searchParams = _a.searchParams;
    var Router = useRouter();
    var user = useSelector(function (state) { return state.User.userData; });
    var _g = useState(), orderData = _g[0], setOrderData = _g[1];
    var _h = useState(true), loading = _h[0], setLoading = _h[1];
    useEffect(function () {
        var user = JSON.parse(localStorage.getItem('user') || '{}');
        if (!Cookies.get('token') || !user) {
            Router.push('/');
        }
    }, [Router]);
    useEffect(function () {
        fetchOrdersData();
    }, []);
    var fetchOrdersData = function () { return __awaiter(_this, void 0, void 0, function () {
        var orderData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(user === null || user === void 0 ? void 0 : user._id))
                        return [2 /*return*/, Router.push('/')];
                    return [4 /*yield*/, get_order_details(params === null || params === void 0 ? void 0 : params.id)];
                case 1:
                    orderData = _a.sent();
                    if (orderData === null || orderData === void 0 ? void 0 : orderData.success) {
                        console.log(orderData === null || orderData === void 0 ? void 0 : orderData.data);
                        setOrderData(orderData === null || orderData === void 0 ? void 0 : orderData.data);
                        setLoading(false);
                    }
                    else {
                        toast.error(orderData === null || orderData === void 0 ? void 0 : orderData.message);
                        setLoading(false);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (<div className='w-full bg-gray-50 h-screen px-2 py-2'>
            <div className="text-sm breadcrumbs  border-b-2 border-b-orange-600">
                <ul className='dark:text-black'>
                    <li>
                        <Link href={'/'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/order/view-orders"}>
                            <GrDeliver className="w-4 h-4 mr-2 stroke-current"/>
                            Orders
                        </Link>
                    </li>
                    <li>

                        <TbListDetails className="w-4 h-4 mr-2 stroke-current"/>
                        Order Details

                    </li>
                </ul>
            </div>
            {loading ? <Loading /> :
            <div className='w-full h-5/6 dark:text-black overflow-y-auto'>
                        <div className='w-full flex px-2 flex-wrap items-center  justify-center'>
                            {/*Order product Card */}
                            {orderData === null || orderData === void 0 ? void 0 : orderData.orderItems.map(function (item, index) {
                    var _a, _b, _c;
                    return (<div key={index} className='md:w-96 m-2 w-52 h-52 bg-gray-300  flex md:flex-row  flex-col items-center justify-start'>
                                            <div className='relative w-1/2 h-full'>
                                                <Image src={(_a = item === null || item === void 0 ? void 0 : item.product) === null || _a === void 0 ? void 0 : _a.productImage} alt="no Image Found" fill/>
                                            </div>
                                            <div className='flex  px-2 py-1 flex-col items-start justify-start'>
                                                <h1 className='my-2'>{(_b = item === null || item === void 0 ? void 0 : item.product) === null || _b === void 0 ? void 0 : _b.productName}</h1>
                                                <p className='text-sm my-2 font-semibold'>Rs {(_c = item === null || item === void 0 ? void 0 : item.product) === null || _c === void 0 ? void 0 : _c.productPrice}</p>
                                                <p className='text-sm  my-2'>Quantity :  <span className='font-semibold'>{item === null || item === void 0 ? void 0 : item.qty}</span></p>

                                            </div>
                                        </div>);
                })}

                            {/*Order product Card */}
                        </div>
                        <div className='flex flex-wrap w-full items-center justify-center'>

                            <div className=' border m-2 w-96  flex-col flex items-start justify-start py-2 px-4'>
                                <h1 className='text-xl font-semibold '>Shipping Address</h1>
                                <div className='flex py-2 w-full text-sm justify-between'>
                                    <p>Full Name</p>
                                    <p className='font-semibold'>{(_b = orderData === null || orderData === void 0 ? void 0 : orderData.shippingAddress) === null || _b === void 0 ? void 0 : _b.fullName}</p>
                                </div>
                                <div className='flex py-2 w-full text-sm justify-between'>
                                    <p>Address</p>
                                    <p className='font-semibold'>{(_c = orderData === null || orderData === void 0 ? void 0 : orderData.shippingAddress) === null || _c === void 0 ? void 0 : _c.address}</p>
                                </div>
                                <div className='flex py-2 w-full text-sm justify-between'>
                                    <p>City</p>
                                    <p className='font-semibold'>{(_d = orderData === null || orderData === void 0 ? void 0 : orderData.shippingAddress) === null || _d === void 0 ? void 0 : _d.city}</p>
                                </div>
                                <div className='flex py-2 w-full text-sm justify-between'>
                                    <p>Postal Code</p>
                                    <p className='font-semibold'>{(_e = orderData === null || orderData === void 0 ? void 0 : orderData.shippingAddress) === null || _e === void 0 ? void 0 : _e.postalCode} </p>
                                </div>
                                <div className='flex py-2 w-full text-sm justify-between'>
                                    <p>Country</p>
                                    <p className='font-semibold'>{(_f = orderData === null || orderData === void 0 ? void 0 : orderData.shippingAddress) === null || _f === void 0 ? void 0 : _f.country}</p>
                                </div>
                            </div>
                            <div className=' border m-2 w-96  flex-col flex items-start justify-start py-2 px-4'>
                                <h1 className='text-xl font-semibold '>Other Details</h1>
                                <div className='flex py-2 w-full text-sm justify-between'>
                                    <p>Items Price</p>
                                    <p className='font-semibold'>Rs {orderData === null || orderData === void 0 ? void 0 : orderData.itemsPrice}</p>
                                </div>

                                <div className='flex py-2 w-full text-sm justify-between'>
                                    <p>Tax Price</p>
                                    <p className='font-semibold'>Rs {orderData === null || orderData === void 0 ? void 0 : orderData.taxPrice}</p>
                                </div>
                                <div className='flex py-2 w-full text-sm justify-between'>
                                    <p>Total Price</p>
                                    <p className='font-semibold'>Rs {orderData === null || orderData === void 0 ? void 0 : orderData.totalPrice}</p>
                                </div>
                                <div className='flex py-2 w-full text-sm justify-between'>
                                    <p>Is Paid</p>
                                    <p className='font-semibold'>{(orderData === null || orderData === void 0 ? void 0 : orderData.isPaid) ? "Done" : "Pending"}</p>
                                </div>
                            </div>

                        </div>
                    </div>}
            <ToastContainer />
        </div>);
}
