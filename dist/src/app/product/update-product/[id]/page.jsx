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
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setNavActive } from '@/utils/AdminNavSlice';
import { get_product_by_id, update_a_product } from '@/Services/Admin/product';
import Cookies from 'js-cookie';
export default function Page(_a) {
    var _this = this;
    var params = _a.params, searchParams = _a.searchParams;
    var _b = useState(false), loader = _b[0], setLoader = _b[1];
    var Router = useRouter();
    var dispatch = useDispatch();
    var _c = useState(undefined), prodData = _c[0], setprodData = _c[1];
    var category = useSelector(function (state) { return state.Admin.category; });
    useEffect(function () {
        var user = JSON.parse(localStorage.getItem('user') || '{}');
        if (!Cookies.get('token') || (user === null || user === void 0 ? void 0 : user.role) !== 'admin') {
            Router.push('/');
        }
    }, [Router]);
    var _d = useSWR('/gettingProductbyID', function () { return get_product_by_id(params.id); }), data = _d.data, isLoading = _d.isLoading;
    if ((data === null || data === void 0 ? void 0 : data.success) !== true)
        toast.error(data === null || data === void 0 ? void 0 : data.message);
    useEffect(function () {
        setprodData(data === null || data === void 0 ? void 0 : data.data);
    }, [data]);
    var _e = useForm({
        criteriaMode: "all"
    }), register = _e.register, setValue = _e.setValue, errors = _e.formState.errors, handleSubmit = _e.handleSubmit;
    var setValueofFormData = function () {
        if (prodData) {
            setValue('name', prodData === null || prodData === void 0 ? void 0 : prodData.productName);
            setValue('description', prodData === null || prodData === void 0 ? void 0 : prodData.productDescription);
            setValue('slug', prodData === null || prodData === void 0 ? void 0 : prodData.productSlug);
            setValue('feature', prodData === null || prodData === void 0 ? void 0 : prodData.productFeatured);
            setValue('categoryID', prodData === null || prodData === void 0 ? void 0 : prodData.productCategory);
            setValue('quantity', prodData === null || prodData === void 0 ? void 0 : prodData.productQuantity);
            setValue('price', prodData === null || prodData === void 0 ? void 0 : prodData.productPrice);
        }
    };
    useEffect(function () {
        if (prodData)
            setValueofFormData();
    }, [prodData]);
    var onSubmit = function (data) { return __awaiter(_this, void 0, void 0, function () {
        var updatedData, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoader(false);
                    updatedData = {
                        _id: params.id,
                        name: data.name !== (prodData === null || prodData === void 0 ? void 0 : prodData.productName) ? data.name : prodData === null || prodData === void 0 ? void 0 : prodData.productName,
                        description: data.description !== (prodData === null || prodData === void 0 ? void 0 : prodData.productDescription) ? data.description : prodData === null || prodData === void 0 ? void 0 : prodData.productDescription,
                        slug: data.slug !== (prodData === null || prodData === void 0 ? void 0 : prodData.productSlug) ? data.slug : prodData === null || prodData === void 0 ? void 0 : prodData.productSlug,
                        feature: data.feature !== (prodData === null || prodData === void 0 ? void 0 : prodData.productFeatured) ? data.feature : prodData === null || prodData === void 0 ? void 0 : prodData.productFeatured,
                        quantity: data.quantity !== (prodData === null || prodData === void 0 ? void 0 : prodData.productQuantity) ? data.quantity : prodData === null || prodData === void 0 ? void 0 : prodData.productQuantity,
                        price: data.price !== (prodData === null || prodData === void 0 ? void 0 : prodData.productPrice) ? data.price : prodData === null || prodData === void 0 ? void 0 : prodData.productPrice,
                        categoryID: data.categoryID !== (prodData === null || prodData === void 0 ? void 0 : prodData.productCategory) ? data.categoryID : prodData === null || prodData === void 0 ? void 0 : prodData.productCategory,
                    };
                    console.log(updatedData);
                    return [4 /*yield*/, update_a_product(updatedData)];
                case 1:
                    res = _a.sent();
                    if (res === null || res === void 0 ? void 0 : res.success) {
                        toast.success(res === null || res === void 0 ? void 0 : res.message);
                        dispatch(setNavActive('Base'));
                        setTimeout(function () {
                            Router.push("/Dashboard");
                        }, 2000);
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
    return (<div className='w-full dark:text-black p-4 min-h-screen  bg-gray-50 flex flex-col '>
      <div className="text-sm breadcrumbs  border-b-2 border-b-orange-600">
        <ul>
          <li onClick={function () { return dispatch(setNavActive('Base')); }}>
            <Link href={'/Dashboard'}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              Home
            </Link>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            Update Product
          </li>
        </ul>
      </div>
      <div className='w-full h-20 my-2 text-center'>
        <h1 className='text-2xl py-2 '>Update Product</h1>
      </div>
      {isLoading || loader ? (<div className='w-full  flex-col h-96 flex items-center justify-center '>
            <TailSpin height="50" width="50" color="orange" ariaLabel="tail-spin-loading" radius="1" wrapperStyle={{}} wrapperClass="" visible={true}/>
            <p className='text-sm mt-2 font-semibold text-orange-500'>updating product Hold Tight ....</p>
          </div>) : (<div className='w-full h-full flex items-start justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg  py-2 flex-col ">
              <div className="form-control w-full max-w-full">
                <label className="label">
                  <span className="label-text">Choose Category</span>
                </label>
                <select {...register("categoryID", { required: true })} className="select select-bordered">
                  <option disabled selected>Pick  one category </option>
                  {category === null || category === void 0 ? void 0 : category.map(function (item) {
                return (<option key={item._id} value={item._id}>{item.categoryName}</option>);
            })}
                </select>
              </div>
              <div className="form-control w-full mb-2">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input {...register("name", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full"/>
                {errors.name && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
              </div>
              <div className="form-control w-full mb-2">
                <label className="label">
                  <span className="label-text">Product Slug</span>
                </label>
                <input {...register("slug", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full"/>
                {errors.slug && <span className='text-red-500 text-xs mt-2'>This field is required</span>}

              </div>
              <div className="form-control w-full mb-2">
                <label className="label">
                  <span className="label-text">Product Price</span>
                </label>
                <input {...register("price", { required: true })} type="number" placeholder="Type here" className="input input-bordered w-full"/>
                {errors.slug && <span className='text-red-500 text-xs mt-2'>This field is required</span>}

              </div>
              <div className="form-control w-full mb-2">
                <label className="label">
                  <span className="label-text">Product Quantity</span>
                </label>
                <input {...register("quantity", { required: true })} type="number" placeholder="Type here" className="input input-bordered w-full"/>
                {errors.slug && <span className='text-red-500 text-xs mt-2'>This field is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Description</span>
                </label>
                <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                {errors.description && <span className='text-red-500 text-xs mt-2'>This field is required</span>}

              </div>
              <div className="form-control py-2">
                <label className="label cursor-pointer">
                  <span className="label-text">Featured Product</span>
                  <input {...register("feature")} type="checkbox" className="checkbox dark:border-black"/>
                </label>
              </div>
              {prodData && (<div className="form-control">
                    <label className="label">
                      <span className="label-text">Old Image</span>
                    </label>
                    <Image src={(prodData === null || prodData === void 0 ? void 0 : prodData.productImage) || ""} alt='No Image Found' width={200} height={200}/>

                  </div>)}


              <button className='btn btn-block mt-3'>Done !</button>

            </form>
          </div>)}

      <ToastContainer />
    </div>);
}
