"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ProductCard_1 = __importDefault(require("./ProductCard"));
var react_redux_1 = require("react-redux");
var loading_1 = __importDefault(require("@/app/loading"));
function FeaturedProduct() {
    var prodData = (0, react_redux_1.useSelector)(function (state) { return state.Admin.product; });
    var prodLoading = (0, react_redux_1.useSelector)(function (state) { return state.Admin.productLoading; });
    var FeaturedProducts = prodData === null || prodData === void 0 ? void 0 : prodData.filter(function (prod) {
        if (prod === null || prod === void 0 ? void 0 : prod.productFeatured) {
            return prod;
        }
    });
    var filteredProducts = FeaturedProducts === null || FeaturedProducts === void 0 ? void 0 : FeaturedProducts.slice(0, 9);
    return (<div className='w-full bg-gray-50 text-black  flex items-center flex-col justify-start'>
            <div className='flex items-center justify-center px-2 py-2 mb-2'>
                <h1 className='py-2 px-4 border-x-2 border-x-orange-500 font-semibold text-2xl '>Top Products</h1>
            </div>
            <div className='md:w-4/5 w-full px-1 h-full min-h-96 py-2 md:px-4 flex items-center justify-center flex-wrap'>
            {prodLoading ? <loading_1.default /> :
            <>
                            {(filteredProducts === null || filteredProducts === void 0 ? void 0 : filteredProducts.length) < 1 ?
                    <h1 className='text-2xl font-semibold text-gray-500'>No Featured Products</h1>
                    :
                        filteredProducts === null || filteredProducts === void 0 ? void 0 : filteredProducts.map(function (item) {
                            return <ProductCard_1.default productName={item === null || item === void 0 ? void 0 : item.productName} productPrice={item === null || item === void 0 ? void 0 : item.productPrice} productFeatured={item === null || item === void 0 ? void 0 : item.productFeatured} productImage={item === null || item === void 0 ? void 0 : item.productImage} productCategory={item === null || item === void 0 ? void 0 : item.productCategory} productSlug={item === null || item === void 0 ? void 0 : item.productSlug} _id={item === null || item === void 0 ? void 0 : item._id} key={item === null || item === void 0 ? void 0 : item._id}/>;
                        })}
                        </>}

            </div>
        </div>);
}
exports.default = FeaturedProduct;
