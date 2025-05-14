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
import { storage } from '@/utils/Firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import { useRouter } from 'next/navigation';
import { add_new_category } from '@/Services/Admin/category';
import Cookies from 'js-cookie';
var uploadImages = function (file) { return __awaiter(void 0, void 0, void 0, function () {
    var createFileName, fileName, storageRef, uploadTask;
    return __generator(this, function (_a) {
        createFileName = function () {
            var timestamp = Date.now();
            var randomString = Math.random().toString(36).substring(2, 8);
            return "".concat(file === null || file === void 0 ? void 0 : file.name, "-").concat(timestamp, "-").concat(randomString);
        };
        fileName = createFileName();
        storageRef = ref(storage, "ecommerce/category/".concat(fileName));
        uploadTask = uploadBytesResumable(storageRef, file);
        return [2 /*return*/, new Promise(function (resolve, reject) {
                uploadTask.on('state_changed', function (snapshot) {
                }, function (error) {
                    console.log(error);
                    reject(error);
                }, function () {
                    getDownloadURL(uploadTask.snapshot.ref).then(function (downloadURL) {
                        resolve(downloadURL);
                    }).catch(function (error) {
                        console.log(error);
                        reject(error);
                    });
                });
            })];
    });
}); };
var maxSize = function (value) {
    var fileSize = value.size / 1024 / 1024;
    return fileSize < 1 ? false : true;
};
export default function AddCategory() {
    var _this = this;
    var _a = useState(false), loader = _a[0], setLoader = _a[1];
    var Router = useRouter();
    useEffect(function () {
        var user = JSON.parse(localStorage.getItem('user') || '{}');
        if (!Cookies.get('token') || (user === null || user === void 0 ? void 0 : user.role) !== 'admin') {
            Router.push('/');
        }
    }, [Router]);
    var _b = useForm({
        criteriaMode: "all"
    }), register = _b.register, errors = _b.formState.errors, handleSubmit = _b.handleSubmit;
    var onSubmit = function (data) { return __awaiter(_this, void 0, void 0, function () {
        var CheckFileSize, uploadImageToFirebase, finalData, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoader(true);
                    CheckFileSize = maxSize(data.image[0]);
                    if (CheckFileSize)
                        return [2 /*return*/, toast.error('Image size must be less then 1MB')];
                    return [4 /*yield*/, uploadImages(data.image[0])];
                case 1:
                    uploadImageToFirebase = _a.sent();
                    finalData = { categoryName: data.name, categoryDescription: data.description, categoryImage: uploadImageToFirebase, categorySlug: data.slug };
                    return [4 /*yield*/, add_new_category(finalData)];
                case 2:
                    res = _a.sent();
                    if (res.success) {
                        toast.success(res === null || res === void 0 ? void 0 : res.message);
                        setTimeout(function () {
                            Router.push('/Dashboard');
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
    return (<div className='w-full  p-4 min-h-screen  bg-gray-50 flex flex-col '>
            <div className="text-sm breadcrumbs  border-b-2 border-b-orange-600">
                <ul className='dark:text-black'>
                    <li>
                        <Link href={'/Dashboard'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        Add Category
                    </li>
                </ul>
            </div>
            <div className='w-full h-20 my-2 text-center'>
                <h1 className='text-2xl py-2 dark:text-black'>Add Category</h1>
            </div>
            {loader ? (<div className='w-full  flex-col h-96 flex items-center justify-center '>
                        <TailSpin height="50" width="50" color="orange" ariaLabel="tail-spin-loading" radius="1" wrapperStyle={{}} wrapperClass="" visible={true}/>
                        <p className='text-sm mt-2 font-semibold text-orange-500'>Adding Category Hold Tight ....</p>
                    </div>) : (<div className='w-full h-full flex items-start justify-center'>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg  py-2 flex-col ">
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text">Category Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full"/>
                                {errors.name && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                            </div>
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text">Category Slug</span>
                                </label>
                                <input {...register("slug", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full"/>
                                {errors.slug && <span className='text-red-500 text-xs mt-2'>This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category Description</span>
                                </label>
                                <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                                {errors.description && <span className='text-red-500 text-xs mt-2'>This field is required</span>}

                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Add Category Image</span>
                                </label>
                                <input accept="image/*" max="1000000" {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full "/>
                                {errors.image && <span className='text-red-500 text-xs mt-2'>This field is required and the image must be less than or equal to 1MB.</span>}

                            </div>

                            <button className='btn btn-block mt-3'>Done !</button>

                        </form>
                    </div>)}

            <ToastContainer />
        </div>);
}
