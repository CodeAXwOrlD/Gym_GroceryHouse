"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register_me } from '@/Services/auth';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Navbar from '@/components/Navbar';
import { TailSpin } from 'react-loader-spinner';
export default function Register() {
    var _this = this;
    var router = useRouter();
    useEffect(function () {
        if (Cookies.get('token')) {
            router.push('/');
        }
    }, [router]);
    var _a = useState({ email: "", password: "", name: "" }), formData = _a[0], setFormData = _a[1];
    var _b = useState({ email: "", password: "", name: '' }), error = _b[0], setError = _b[1];
    var _c = useState(false), loading = _c[0], setLoding = _c[1];
    var handleSubmit = function (event) { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    setLoding(true);
                    if (!formData.email) {
                        setError(__assign(__assign({}, error), { email: "Email Field is Required" }));
                        return [2 /*return*/];
                    }
                    if (!formData.password) {
                        setError(__assign(__assign({}, error), { password: "Password Field is required" }));
                        return [2 /*return*/];
                    }
                    if (!formData.name) {
                        setError(__assign(__assign({}, error), { name: "Name Field is required" }));
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, register_me(formData)];
                case 1:
                    data = _a.sent();
                    if (data.success) {
                        setLoding(false);
                        toast.success(data.message);
                        setTimeout(function () {
                            router.push('/auth/login');
                        }, 2000);
                    }
                    else {
                        setLoding(false);
                        toast.error(data.message);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (<>
    <Navbar />
    <div className='w-full h-screen bg-gray-50 '>
      <div className="flex flex-col text-center items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 shadow-xl">

        <div className="w-full bg-white rounded-lg shadow text-black md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Register your account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
              <div className='text-left'>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                <input onChange={function (e) { return setFormData(__assign(__assign({}, formData), { name: e.target.value })); }} type="text" name="name" id="namw" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5" placeholder="Name"/>
                {error.name && <p className="text-sm text-red-500">{error.name}</p>}
              </div>
              <div className='text-left'>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input onChange={function (e) { return setFormData(__assign(__assign({}, formData), { email: e.target.value })); }} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5" placeholder="name@company.com"/>
                {error.email && <p className="text-sm text-red-500">{error.email}</p>}
              </div>
              <div className='text-left'>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                <input onChange={function (e) { return setFormData(__assign(__assign({}, formData), { password: e.target.value })); }} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5"/>
                {error.password && <p className="text-sm text-red-500">{error.password}</p>}
              </div>

              {loading ? <button type="button" className="w-full flex items-center justify-center text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                        <TailSpin height="20" width="20" color="white" ariaLabel="tail-spin-loading" radius="1" wrapperStyle={{}} wrapperClass="" visible={true}/>
                                        </button> : <button type="submit" className="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>}

              
              <p className="text-sm  text-gray-500 ">
                Already have an account  <Link href="/auth/login" className="font-medium text-orange-600 hover:underline ">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
    </>);
}
