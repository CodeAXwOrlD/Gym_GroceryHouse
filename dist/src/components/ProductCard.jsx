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
import { bookmark_product } from '@/Services/common/bookmark';
import { add_to_cart } from '@/Services/common/cart';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { MdFavorite } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
export default function ProductCard(_a) {
    var _this = this;
    var productName = _a.productName, productFeatured = _a.productFeatured, productImage = _a.productImage, productCategory = _a.productCategory, productPrice = _a.productPrice, _id = _a._id, productSlug = _a.productSlug;
    var router = useRouter();
    var user = useSelector(function (state) { return state.User.userData; });
    var AddToCart = function () { return __awaiter(_this, void 0, void 0, function () {
        var finalData, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    finalData = { productID: _id, userID: user === null || user === void 0 ? void 0 : user._id };
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
                    finalData = { productID: _id, userID: user === null || user === void 0 ? void 0 : user._id };
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
    return (<div className="card text-black cursor-pointer card-compact m-3 w-80 bg-white shadow-xl relative">
            <div onClick={function () { return router.push("/product/product-detail/".concat(_id)); }} className='w-full rounded relative h-60'>
                <Image src={productImage || '/images98.jpg'} alt='no Image' className='rounded' fill/>
            </div>

            <div className="card-body">
                <h2 className="card-title" onClick={function () { return router.push("/product/product-detail/".concat(_id)); }}>{productName} </h2>
                <p className='font-semibold' onClick={function () { return router.push("/product/product-detail/".concat(_id)); }}>{"Rs ".concat(productPrice)}</p>
                <div className="card-actions justify-end z-20">
                    <button onClick={AddToCart} className="btn  btn-circle btn-ghost "><BsCartPlus className='text-2xl text-orange-600 font-semibold'/></button>
                    <button onClick={AddToBookmark} className="btn btn-circle btn-ghost absolute top-0 right-0 "><MdFavorite className='text-2xl text-orange-600 font-semibold'/></button>
                </div>
            </div>
        </div>);
}
