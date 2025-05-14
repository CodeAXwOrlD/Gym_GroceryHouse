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
import { delete_a_cart_item, get_all_cart_Items } from '@/Services/common/cart';
import { setCart } from '@/utils/CartSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
export default function CartCard(_a) {
    var _this = this;
    var productID = _a.productID, userID = _a.userID, _id = _a._id, quantity = _a.quantity;
    var dispatch = useDispatch();
    var _b = useState(quantity), qnt = _b[0], setQnt = _b[1];
    var Router = useRouter();
    var user = useSelector(function (state) { return state.User.userData; });
    var cart = useSelector(function (state) { return state.Cart.cart; });
    var handleDeleteCartItem = function () { return __awaiter(_this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, delete_a_cart_item(_id)];
                case 1:
                    res = _a.sent();
                    if (res === null || res === void 0 ? void 0 : res.success) {
                        fetchCartData();
                        return [2 /*return*/, toast.success(res === null || res === void 0 ? void 0 : res.message)];
                    }
                    return [2 /*return*/, toast.error(res === null || res === void 0 ? void 0 : res.message)];
            }
        });
    }); };
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
                    return [2 /*return*/];
            }
        });
    }); };
    var handleIncrement = function () {
        var newCart = cart === null || cart === void 0 ? void 0 : cart.map(function (item) {
            var _a, _b;
            if ((item === null || item === void 0 ? void 0 : item._id) === _id) {
                if (((_a = item === null || item === void 0 ? void 0 : item.productID) === null || _a === void 0 ? void 0 : _a.productQuantity) > (item === null || item === void 0 ? void 0 : item.quantity)) {
                    return __assign(__assign({}, item), { quantity: Number(item === null || item === void 0 ? void 0 : item.quantity) + 1 });
                }
                else {
                    toast.error('Product Quantity is not available');
                    return __assign(__assign({}, item), { quantity: Number((_b = item === null || item === void 0 ? void 0 : item.productID) === null || _b === void 0 ? void 0 : _b.productQuantity) });
                }
            }
            return item;
        });
        if (qnt > 0) {
            var quantity_1 = qnt + 1;
            setQnt(quantity_1);
            dispatch(setCart(newCart));
        }
        else {
            setQnt(quantity);
            dispatch(setCart(newCart));
        }
    };
    var handleDecrement = function () {
        var newCart = cart === null || cart === void 0 ? void 0 : cart.map(function (item) {
            if (item._id === _id) {
                if ((item === null || item === void 0 ? void 0 : item.quantity) > 1) {
                    return __assign(__assign({}, item), { quantity: Number(item.quantity) - 1 });
                }
            }
            return item;
        });
        if (qnt > 1) {
            var quantity_2 = qnt - 1;
            setQnt(quantity_2);
            dispatch(setCart(newCart));
        }
        else {
            setQnt(quantity);
            dispatch(setCart(newCart));
        }
    };
    return (<div className='bg-white w-10/12  rounded-xl m-2 border-b flex-col md:flex-row h-72  md:h-40 py-2 px-4 flex justify-around items-center'>
            <Image src={productID === null || productID === void 0 ? void 0 : productID.productImage} alt='no image found' width={100} height={150} className='rounded'/>
            <h3 className='font-semibold text-lg'>Rs {productID === null || productID === void 0 ? void 0 : productID.productPrice}</h3>
            <div className='flex  justify-center items-center'>
                <button onClick={handleIncrement} className='btn btn-circle dark:text-white  text-xl'>+</button>
                <p className='mx-2 text-xl'>{quantity}</p>
                <button onClick={handleDecrement} className='btn btn-circle dark:text-white  text-xl'>-</button>
            </div>
            <AiFillDelete onClick={handleDeleteCartItem} className="text-red-500 text-2xl cursor-pointer "/>
        </div>);
}
