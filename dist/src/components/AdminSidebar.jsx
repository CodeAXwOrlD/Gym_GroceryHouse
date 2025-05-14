"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __importDefault(require("next/link"));
var react_1 = __importDefault(require("react"));
var rx_1 = require("react-icons/rx");
var ai_1 = require("react-icons/ai");
var bi_1 = require("react-icons/bi");
var gi_1 = require("react-icons/gi");
var io_1 = require("react-icons/io");
var md_1 = require("react-icons/md");
var gr_1 = require("react-icons/gr");
var AdminNavSlice_1 = require("@/utils/AdminNavSlice");
var react_redux_1 = require("react-redux");
function AdminSidebar() {
    var dispatch = (0, react_redux_1.useDispatch)();
    return (<div className='w-60 hidden dark:text-black md:block bg-white h-full'>
            <div className='w-full text-center py-2 px-2 h-20'>
                <h1 className='flex text-2xl font-semibold items-center justify-center'><rx_1.RxDashboard className='mx-2'/> Dashboard</h1>
            </div>
            <div className='w-full '>
                <ul className='flex px-4 flex-col items-start justify-center'>
                    <li onClick={function () { return dispatch((0, AdminNavSlice_1.setNavActive)('Base')); }} className='py-3 px-1 mb-3'><button className='flex items-center justify-center'> <ai_1.AiFillHome className='mx-2'/> Home</button></li>
                    <li onClick={function () { return dispatch((0, AdminNavSlice_1.setNavActive)('activeCategories')); }} className='py-3 px-1 mb-3'><button className='flex items-center justify-center'> <bi_1.BiCategory className='mx-2'/>  Categories</button></li>
                    <li onClick={function () { return dispatch((0, AdminNavSlice_1.setNavActive)('activeProducts')); }} className='py-3 px-1 mb-3'><button className='flex items-center justify-center'> <gi_1.GiLoincloth className='mx-2'/>  Products</button></li>
                    <li className='py-3 px-1 mb-3'><link_1.default href={'/product/add-product'} className='flex items-center justify-center'> <io_1.IoIosAddCircle className='mx-2'/> Add Products</link_1.default></li>
                    <li className='py-3 px-1 mb-3'><link_1.default href={'/category/add-category'} className='flex items-center justify-center'> <io_1.IoIosAddCircle className='mx-2'/> Add Category</link_1.default></li>
                    <li className='py-3 px-1 mb-3' onClick={function () { return dispatch((0, AdminNavSlice_1.setNavActive)('activePendingOrder')); }}><button className='flex items-center justify-center'> <md_1.MdOutlinePendingActions className='mx-2'/> Pending orders</button></li>
                    <li className='py-3 px-1 mb-3' onClick={function () { return dispatch((0, AdminNavSlice_1.setNavActive)('activeDeliveredOrder')); }}><button className='flex items-center justify-center'> <gr_1.GrCompliance className='mx-2'/>Completed orders</button></li>

                </ul>
            </div>

        </div>);
}
exports.default = AdminSidebar;
