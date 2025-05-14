'use client';
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
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiCartAdd } from 'react-icons/bi';
import { RiBookMarkFill } from 'react-icons/ri';
import { DiCodeigniter } from 'react-icons/di';
import useSWR from 'swr';
import { ToastContainer, toast } from 'react-toastify';
import { get_product_by_id } from '@/Services/Admin/product';
import Loading from '@/app/loading';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart } from '@/Services/common/cart';
import { setUserData } from '@/utils/UserDataSlice';
import { bookmark_product } from '@/Services/common/bookmark';
export default function Page(_a) {
    var _this = this;
    var _b, _c;
    var params = _a.params, searchParams = _a.searchParams;
    var dispatch = useDispatch();
    var _d = useState(undefined), prodData = _d[0], setprodData = _d[1];
    var user = useSelector(function (state) { return state.User.userData; });
    var _e = useSWR('/gettingProductbyID', function () { return get_product_by_id(params.id); }), data = _e.data, isLoading = _e.isLoading;
    if ((data === null || data === void 0 ? void 0 : data.success) !== true)
        toast.error(data === null || data === void 0 ? void 0 : data.message);
    useEffect(function () {
        var userData = localStorage.getItem('user');
        if (!userData)
            return;
        dispatch(setUserData(JSON.parse(userData)));
    }, []);
    useEffect(function () {
        setprodData(data === null || data === void 0 ? void 0 : data.data);
    }, [data]);
    var AddToCart = function () { return __awaiter(_this, void 0, void 0, function () {
        var finalData, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    finalData = { productID: params.id, userID: user === null || user === void 0 ? void 0 : user._id };
                    return [4 /*yield*/, add_to_cart(finalData)];
                case 1:
                    res = _a.sent();
                    if (res === null || res === void 0 ? void 0 : res.success) {
                        toast.success(res === null || res === void 0 ? void 0 : res.message);
                    }
                    else {
                        toast.error(res === null || res === void 0 ? void 0 : res.message);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var AddToBookmark = function () { return __awaiter(_this, void 0, void 0, function () {
        var finalData, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    finalData = { productID: params.id, userID: user === null || user === void 0 ? void 0 : user._id };
                    return [4 /*yield*/, bookmark_product(finalData)];
                case 1:
                    res = _a.sent();
                    if (res === null || res === void 0 ? void 0 : res.success) {
                        toast.success(res === null || res === void 0 ? void 0 : res.message);
                    }
                    else {
                        toast.error(res === null || res === void 0 ? void 0 : res.message);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (<div className='w-full h-full dark:text-black lg:h-screen bg-gray-200 py-4 px-2'>
            <div className="text-sm breadcrumbs  border-b-2 py-2 px-2 border-b-orange-600">
                <ul>
                    <li>
                        <Link href={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/category/category-product/".concat((_b = prodData === null || prodData === void 0 ? void 0 : prodData.productCategory) === null || _b === void 0 ? void 0 : _b._id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            {((_c = prodData === null || prodData === void 0 ? void 0 : prodData.productCategory) === null || _c === void 0 ? void 0 : _c.categoryName) || "Loading Category Name"}
                        </Link>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        {(prodData === null || prodData === void 0 ? void 0 : prodData.productName) || "Loading Product Name"}
                    </li>
                </ul>
            </div>
            <div className='w-full   h-full lg:h-4/5 py-4 px-4 flex items-center justify-center'>
                {isLoading ?
            <div className='w-4/5 bg-gray-100 rounded-xl h-4/5 flex items-center justify-center shadow-2xl '>
                            <Loading />
                        </div>
            :
                <div className='lg:w-4/5 w-full h-full  bg-gray-100 rounded-xl lg:h-4/5 flex flex-col lg:flex-row items-center justify-center shadow-2xl  '>
                            <div className='lg:w-4/12 w-full h-60  lg:h-full  rounded-xl z-10 relative'>
                                <Image src={(prodData === null || prodData === void 0 ? void 0 : prodData.productImage) || '/images98.jpg'} alt='no image' fill className='rounded-xl'/>
                            </div>
                            <div className='lg:w-8/12 w-full px-3 h-full  rounded flex flex-col lg:px-5 py-2'>
                                <div className='flex flex-col  lg:flex-row md:justify-between w-full md:h-20 py-2 items-center'>
                                    <h1 className='text-3xl font-semibold text-black'>{prodData === null || prodData === void 0 ? void 0 : prodData.productName}</h1>
                                    {(prodData === null || prodData === void 0 ? void 0 : prodData.productFeatured) &&
                        <p className='px-3 py-2 bg-orange-600 hidden lg:flex font-semibold tracking-widest rounded text-white  items-center justify-center '>
                                            <DiCodeigniter className='mx-2'/>
                                            Featured Product
                                        </p>}
                                </div>
                                <p className=' py-2   lg:h-40 w-full'>
                                    {prodData === null || prodData === void 0 ? void 0 : prodData.productDescription} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, blanditiis.
                                </p>
                                <h1 className='text-3xl font-semibold text-black py-2'>$ {"".concat(prodData === null || prodData === void 0 ? void 0 : prodData.productPrice)}</h1>
                                <div className='w-full py-2 lg:flex-row flex-col flex '>
                                    <button onClick={AddToCart} className='btn m-2 lg:w-52 h-10 btn-outline btn-success flex items-center justify-center'> <BiCartAdd className='text-3xl mx-2'/> Add to Cart</button>
                                    <button onClick={AddToBookmark} className='btn m-2  lg:w-52 h-10 btn-outline btn-success flex items-center justify-center'> <RiBookMarkFill className='text-3xl mx-2'/>Bookmark</button>
                                </div>

                            </div>
                        </div>}


            </div>
            <ToastContainer />
        </div>);
}
