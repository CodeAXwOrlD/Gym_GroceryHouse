"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var js_cookie_1 = __importDefault(require("js-cookie"));
var navigation_1 = require("next/navigation");
var react_1 = __importStar(require("react"));
var AdminNavbar_1 = __importDefault(require("@/components/AdminNavbar"));
var AdminSidebar_1 = __importDefault(require("@/components/AdminSidebar"));
var SuperComponent_1 = __importDefault(require("@/components/SuperComponent"));
var react_toastify_1 = require("react-toastify");
var swr_1 = __importDefault(require("swr"));
var category_1 = require("@/Services/Admin/category");
var react_redux_1 = require("react-redux");
var AdminSlice_1 = require("@/utils/AdminSlice");
var loading_1 = __importDefault(require("../loading"));
var AdminNavSlice_1 = require("@/utils/AdminNavSlice");
var product_1 = require("@/Services/Admin/product");
var order_1 = require("@/Services/Admin/order");
function Dashboard() {
    var Router = (0, navigation_1.useRouter)();
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        var user = JSON.parse(localStorage.getItem('user') || '{}');
        if (!js_cookie_1.default.get('token') || (user === null || user === void 0 ? void 0 : user.role) !== 'admin' || (user === null || user === void 0 ? void 0 : user.email) !== 'mrmoiz.dev@gmail.com') {
            Router.push('/');
        }
        dispatch((0, AdminNavSlice_1.setNavActive)('Base'));
    }, [dispatch, js_cookie_1.default, Router]);
    var _a = (0, swr_1.default)('/gettingAllCategoriesFOrAdmin', category_1.get_all_categories), categoryData = _a.data, categoryLoading = _a.isLoading;
    if ((categoryData === null || categoryData === void 0 ? void 0 : categoryData.success) !== true)
        react_toastify_1.toast.error(categoryData === null || categoryData === void 0 ? void 0 : categoryData.message);
    var _b = (0, swr_1.default)('/gettingAllProductsFOrAdmin', product_1.get_all_products), productData = _b.data, productLoading = _b.isLoading;
    if ((productData === null || productData === void 0 ? void 0 : productData.success) !== true)
        react_toastify_1.toast.error(productData === null || productData === void 0 ? void 0 : productData.message);
    var _c = (0, swr_1.default)('/gettingAllOrdersForAdmin', order_1.get_all_orders), orderData = _c.data, orderLoading = _c.isLoading;
    if ((orderData === null || orderData === void 0 ? void 0 : orderData.success) !== true)
        react_toastify_1.toast.error(orderData === null || orderData === void 0 ? void 0 : orderData.message);
    console.log(orderData === null || orderData === void 0 ? void 0 : orderData.data);
    (0, react_1.useEffect)(function () {
        dispatch((0, AdminSlice_1.setCategoryData)(categoryData === null || categoryData === void 0 ? void 0 : categoryData.data));
        dispatch((0, AdminSlice_1.setCatLoading)(categoryLoading));
        dispatch((0, AdminSlice_1.setProductData)(productData === null || productData === void 0 ? void 0 : productData.data));
        dispatch((0, AdminSlice_1.setProdLoading)(productLoading));
        dispatch((0, AdminSlice_1.setOrderData)(orderData === null || orderData === void 0 ? void 0 : orderData.data));
        dispatch((0, AdminSlice_1.setCatLoading)(orderLoading));
    }, [categoryData, dispatch, categoryLoading, productData, productLoading, orderData, orderLoading]);
    return (<div className='w-full h-screen flex  bg-gray-50 overflow-hidden'>
      <AdminSidebar_1.default />
      <div className='w-full h-full '>
        <AdminNavbar_1.default />
        <div className='w-full h-5/6  flex flex-wrap items-start justify-center overflow-y-auto  px-4 py-2'>
          {categoryLoading || productLoading ? <loading_1.default /> : <SuperComponent_1.default />}
        </div>
      </div>
      <react_toastify_1.ToastContainer />
    </div>);
}
exports.default = Dashboard;
