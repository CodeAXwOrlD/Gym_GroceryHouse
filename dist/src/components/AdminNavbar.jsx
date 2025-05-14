"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AdminNavSlice_1 = require("@/utils/AdminNavSlice");
var js_cookie_1 = __importDefault(require("js-cookie"));
var image_1 = __importDefault(require("next/image"));
var link_1 = __importDefault(require("next/link"));
var navigation_1 = require("next/navigation");
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
function AdminNavbar() {
    var router = (0, navigation_1.useRouter)();
    var dispatch = (0, react_redux_1.useDispatch)();
    var handleLogout = function () {
        js_cookie_1.default.remove('token');
        localStorage.clear();
        location.reload();
    };
    return (<div className="navbar dark:text-black bg-white">
            <div className="flex-1">
                <div className="dropdown md:hidden">
                    <label tabIndex={0} className="btn btn-active btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"/></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-gray-50 rounded-box w-52">
                        <li onClick={function () { return dispatch((0, AdminNavSlice_1.setNavActive)('Base')); }}><button>Homepage</button></li>
                        <li onClick={function () { return dispatch((0, AdminNavSlice_1.setNavActive)('activeCategories')); }}><button>Categories</button></li>
                        <li onClick={function () { return dispatch((0, AdminNavSlice_1.setNavActive)('activeProducts')); }}><button>Products</button></li>
                        <li><link_1.default href={"/product/add-product"}>Add Products</link_1.default></li>
                        <li><link_1.default href={"/category/add-category"}>Add Category</link_1.default></li>
                        <li onClick={function () { return dispatch((0, AdminNavSlice_1.setNavActive)('activePendingOrder')); }}><button>Pending orders</button></li>
                        <li onClick={function () { return dispatch((0, AdminNavSlice_1.setNavActive)('activeDeliveredOrder')); }}><button>Completed orders</button></li>
                    </ul>
                </div>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 relative rounded-full">
                            <image_1.default className='rounded-full' fill alt='none' src="/profile.jpg"/>
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-50 rounded-box w-52">
                        <li>
                            <link_1.default href={"/Dashboard"} className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </link_1.default>
                        </li>
                        <li onClick={handleLogout}><button> Logout </button></li>
                    </ul>
                </div>
            </div>
        </div>);
}
exports.default = AdminNavbar;
