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
var bookmark_1 = require("@/Services/common/bookmark");
var FavouriteProductDataTable_1 = __importDefault(require("@/components/FavouriteProductDataTable"));
var AdminNavSlice_1 = require("@/utils/AdminNavSlice");
var Bookmark_1 = require("@/utils/Bookmark");
var js_cookie_1 = __importDefault(require("js-cookie"));
var link_1 = __importDefault(require("next/link"));
var navigation_1 = require("next/navigation");
var react_1 = __importStar(require("react"));
var md_1 = require("react-icons/md");
var react_redux_1 = require("react-redux");
var react_toastify_1 = require("react-toastify");
function Page() {
    var _this = this;
    var Router = (0, navigation_1.useRouter)();
    var dispatch = (0, react_redux_1.useDispatch)();
    var user = (0, react_redux_1.useSelector)(function (state) { return state.User.userData; });
    var _a = (0, react_1.useState)(true), loading = _a[0], setLoading = _a[1];
    (0, react_1.useEffect)(function () {
        if (!js_cookie_1.default.get('token') || user === null) {
            Router.push('/');
        }
        dispatch((0, AdminNavSlice_1.setNavActive)('Base'));
    }, [dispatch, Router]);
    (0, react_1.useEffect)(function () {
        fetchBookmarkData();
    }, []);
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
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (<div className='w-full bg-gray-50 h-screen px-3 py-2'>
            <div className="text-sm breadcrumbs  border-b-2 border-b-orange-600">
                <ul className='dark:text-black'>
                    <li>
                        <link_1.default href={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Home
                        </link_1.default>
                    </li>
                    <li>
                        <md_1.MdFavorite className="w-4 h-4 mr-2 stroke-current"/>
                        Favourite Products
                    </li>
                </ul>
            </div>
            <div className='w-full h-5/6 py-5'>
                <FavouriteProductDataTable_1.default />
            </div>

            <react_toastify_1.ToastContainer />
        </div>);
}
exports.default = Page;
