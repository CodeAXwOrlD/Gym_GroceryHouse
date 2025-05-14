"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var CategoryCard_1 = __importDefault(require("./CategoryCard"));
var loading_1 = __importDefault(require("@/app/loading"));
function TopCategories() {
    var catData = (0, react_redux_1.useSelector)(function (state) { return state.Admin.category; });
    var catLoading = (0, react_redux_1.useSelector)(function (state) { return state.Admin.catLoading; });
    var filteredCategories = catData === null || catData === void 0 ? void 0 : catData.slice(0, 3);
    return (<div id='my-Categories' className='w-full bg-gray-50  flex items-center flex-col justify-start'>
            <div className='flex items-center justify-center px-2 py-2 mb-2'>
                <h1 className='py-2 px-4 border-x-2 border-x-orange-500 text-black font-semibold text-2xl '>Top Categories</h1>
            </div>
            <div className='md:w-4/5 w-full min-h-16  px-1  py-2 md:px-4 flex items-center justify-center flex-wrap'>
                {catLoading ? <div className='w-full h-96'><loading_1.default /> </div> :
            <>
                            {(filteredCategories === null || filteredCategories === void 0 ? void 0 : filteredCategories.length) < 1 ? <h1 className='text-2xl font-semibold text-gray-500'>No Categories</h1> :
                    filteredCategories === null || filteredCategories === void 0 ? void 0 : filteredCategories.map(function (item) {
                        return <CategoryCard_1.default categoryName={item === null || item === void 0 ? void 0 : item.categoryName} categoryDescription={item === null || item === void 0 ? void 0 : item.categoryDescription} categoryImage={item === null || item === void 0 ? void 0 : item.categoryImage} categorySlug={item === null || item === void 0 ? void 0 : item.categorySlug} _id={item === null || item === void 0 ? void 0 : item._id} key={item === null || item === void 0 ? void 0 : item._id}/>;
                    })}
                        </>}

            </div>
        </div>);
}
exports.default = TopCategories;
