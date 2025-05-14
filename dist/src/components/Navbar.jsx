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
var react_1 = __importStar(require("react"));
var link_1 = __importDefault(require("next/link"));
var navigation_1 = require("next/navigation");
var js_cookie_1 = __importDefault(require("js-cookie"));
var react_redux_1 = require("react-redux");
var fa_1 = require("react-icons/fa");
var ci_1 = require("react-icons/ci");
var md_1 = require("react-icons/md");
function Navbar() {
    var router = (0, navigation_1.useRouter)();
    var _a = (0, react_1.useState)(false), Scrolled = _a[0], setScrolled = _a[1];
    var user = (0, react_redux_1.useSelector)(function (state) { return state.User.userData; });
    (0, react_1.useEffect)(function () {
        window.onscroll = function () {
            setScrolled(window.pageYOffset < 30 ? false : true);
            return function () { return window.onscroll = null; };
        };
    }, [Scrolled]);
    var handleLogout = function () {
        js_cookie_1.default.remove('token');
        localStorage.clear();
        location.reload();
    };
    return (<div className={"navbar ".concat(Scrolled ? "bg-white/95  " : "bg-transparent", "  fixed text-white top-0 left-0 z-50")}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-active text-white btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"/></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-gray-50 rounded-box w-52">
                        <li><link_1.default href={'/'}>Homepage</link_1.default></li>
                        <li><link_1.default href={'/'}>Shop</link_1.default></li>
                        <li><link_1.default href={"/order/view-orders"}>My Orders</link_1.default></li>
                        <li><link_1.default href={"/Dashboard"}>Dashboard</link_1.default></li>
                    </ul>
                </div>
            </div>
            <div className='navbar-end'>
                <div className="flex-none">

                    {user ?
            <div className='flex items-center justify-center  min-h-full'>
                         <button onClick={handleLogout} className='btn text-white mx-2'>logout</button>
                         <button onClick={function () { return router.push("/order/create-order"); }} className='btn btn-circle  mx-2'><fa_1.FaCartArrowDown className='text-white text-xl'/></button>
                         <button onClick={function () { return router.push("/bookmark"); }} className='btn btn-circle  mx-2'><md_1.MdFavorite className='text-white text-xl'/></button>
                         <button onClick={function () { return router.push("/order/view-orders"); }} className='btn btn-circle  mx-2'><ci_1.CiDeliveryTruck className='text-white text-xl'/></button>
                         
                        </div>
            :
                <button onClick={function () { return router.push('/auth/login'); }} className='btn text-white mx-2'>Login</button>}


                </div>
            </div>
        </div>);
}
exports.default = Navbar;
