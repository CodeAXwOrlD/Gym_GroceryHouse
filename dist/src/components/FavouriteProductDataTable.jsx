"use strict";
"use Client";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_toastify_1 = require("react-toastify");
var react_data_table_component_1 = __importDefault(require("react-data-table-component"));
var image_1 = __importDefault(require("next/image"));
var react_redux_1 = require("react-redux");
var navigation_1 = require("next/navigation");
var bookmark_1 = require("@/Services/common/bookmark");
var Bookmark_1 = require("@/utils/Bookmark");
function FavouriteProductDataTable() {
    var _this = this;
    var Router = (0, navigation_1.useRouter)();
    var dispatch = (0, react_redux_1.useDispatch)();
    var user = (0, react_redux_1.useSelector)(function (state) { return state.User.userData; });
    var _a = (0, react_1.useState)([]), bookmarkData = _a[0], setBookmarkData = _a[1];
    var data = (0, react_redux_1.useSelector)(function (state) { return state.Bookmark.bookmark; });
    var _b = (0, react_1.useState)(''), search = _b[0], setSearch = _b[1];
    var _c = (0, react_1.useState)([]), filteredData = _c[0], setFilteredData = _c[1];
    (0, react_1.useEffect)(function () {
        setBookmarkData(data);
    }, [data]);
    (0, react_1.useEffect)(function () {
        setFilteredData(bookmarkData);
    }, [bookmarkData]);
    var columns = [
        {
            name: 'Product Name',
            selector: function (row) { var _a; return (_a = row === null || row === void 0 ? void 0 : row.productID) === null || _a === void 0 ? void 0 : _a.productName; },
            sortable: true,
        },
        {
            name: 'Price',
            selector: function (row) { var _a; return (_a = row === null || row === void 0 ? void 0 : row.productID) === null || _a === void 0 ? void 0 : _a.productPrice; },
            sortable: true,
        },
        {
            name: 'Image',
            cell: function (row) { var _a; return <image_1.default src={(_a = row === null || row === void 0 ? void 0 : row.productID) === null || _a === void 0 ? void 0 : _a.productImage} alt='No Image Found' className='py-2' width={100} height={100}/>; }
        },
        {
            name: 'Action',
            cell: function (row) { return (<div className='flex items-start justify-start px-2 h-20'>
                    <button onClick={function () { return handleDeleteProduct(row === null || row === void 0 ? void 0 : row._id); }} className=' w-20 py-2 mx-2 text-xs text-red-600 hover:text-white my-2 hover:bg-red-600 border border-red-600 rounded transition-all duration-700'>Delete</button>
                </div>); }
        },
    ];
    var fetchBookmarkData = function () { return __awaiter(_this, void 0, void 0, function () {
        var cartData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(user === null || user === void 0 ? void 0 : user._id))
                        return [2 /*return*/, Router.push('/')];
                    return [4 /*yield*/, (0, bookmark_1.get_all_bookmark_items)(user === null || user === void 0 ? void 0 : user._id)];
                case 1:
                    cartData = _a.sent();
                    if (cartData === null || cartData === void 0 ? void 0 : cartData.success) {
                        dispatch((0, Bookmark_1.setBookmark)(cartData === null || cartData === void 0 ? void 0 : cartData.data));
                    }
                    else {
                        react_toastify_1.toast.error(cartData === null || cartData === void 0 ? void 0 : cartData.message);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteProduct = function (id) { return __awaiter(_this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, bookmark_1.delete_a_bookmark_item)(id)];
                case 1:
                    res = _a.sent();
                    if (res === null || res === void 0 ? void 0 : res.success) {
                        react_toastify_1.toast.success(res === null || res === void 0 ? void 0 : res.message);
                        fetchBookmarkData();
                    }
                    else {
                        react_toastify_1.toast.error(res === null || res === void 0 ? void 0 : res.message);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (search === '') {
            setFilteredData(bookmarkData);
        }
        else {
            setFilteredData(bookmarkData === null || bookmarkData === void 0 ? void 0 : bookmarkData.filter(function (item) {
                var _a;
                var itemData = (_a = item === null || item === void 0 ? void 0 : item.productID) === null || _a === void 0 ? void 0 : _a.productName.toUpperCase();
                var textData = search.toUpperCase();
                return itemData.indexOf(textData) > -1;
            }));
        }
    }, [search, bookmarkData]);
    return (<div className='w-full h-full'>
            <react_data_table_component_1.default columns={columns} data={filteredData || []} key={'ThisProductData'} pagination keyField="id" title={"Favourite Products list"} fixedHeader fixedHeaderScrollHeight='750px' selectableRows selectableRowsHighlight persistTableHead subHeader subHeaderComponent={<input className='w-60 dark:bg-transparent py-2 px-2  outline-none  border-b-2 border-orange-600' type={"search"} value={search} onChange={function (e) { return setSearch(e.target.value); }} placeholder={"Product Name"}/>} className="bg-white px-4 h-5/6 "/>

        </div>);
}
exports.default = FavouriteProductDataTable;
