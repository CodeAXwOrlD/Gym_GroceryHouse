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
import { get_all_orders_of_user } from '@/Services/common/order';
import OrdersDetailsDataTable from '@/components/OrdersDetailsDataTable';
import { setOrder } from '@/utils/OrderSlice';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { GrDeliver } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
export default function Page() {
    var _this = this;
    var Router = useRouter();
    var dispatch = useDispatch();
    var user = useSelector(function (state) { return state.User.userData; });
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
                    return [4 /*yield*/, get_all_orders_of_user(user === null || user === void 0 ? void 0 : user._id)];
                case 1:
                    orderData = _a.sent();
                    if (orderData === null || orderData === void 0 ? void 0 : orderData.success) {
                        dispatch(setOrder(orderData === null || orderData === void 0 ? void 0 : orderData.data));
                    }
                    else {
                        toast.error(orderData === null || orderData === void 0 ? void 0 : orderData.message);
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
            <GrDeliver className="w-4 h-4 mr-2 stroke-current"/>
            Orders
          </li>
        </ul>
      </div>
      <div className='w-full h-5/6 py-2'>
        <OrdersDetailsDataTable />
      </div>
      <ToastContainer />
    </div>);
}
