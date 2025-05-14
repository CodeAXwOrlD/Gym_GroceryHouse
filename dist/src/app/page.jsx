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
var react_1 = __importStar(require("react"));
var Navbar_1 = __importDefault(require("@/components/Navbar"));
var Footer_1 = __importDefault(require("@/components/Footer"));
var Hero_1 = __importDefault(require("@/components/Hero"));
var FeaturedProduct_1 = __importDefault(require("@/components/FeaturedProduct"));
var TopCategories_1 = __importDefault(require("@/components/TopCategories"));
var category_1 = require("@/Services/Admin/category");
var product_1 = require("@/Services/Admin/product");
var react_toastify_1 = require("react-toastify");
var AdminSlice_1 = require("@/utils/AdminSlice");
var react_redux_1 = require("react-redux");
var react_2 = require("react");
var loading_1 = __importDefault(require("./loading"));
var UserDataSlice_1 = require("@/utils/UserDataSlice");
function Home() {
    var _this = this;
    var dispatch = (0, react_redux_1.useDispatch)();
    var categoryLoading = (0, react_redux_1.useSelector)(function (state) { return state.Admin.catLoading; });
    var productLoading = (0, react_redux_1.useSelector)(function (state) { return state.Admin.productLoading; });
    var _a = (0, react_1.useState)(true), loading = _a[0], setLoading = _a[1];
    var _b = (0, react_1.useState)(16 / 9), ratio = _b[0], setRatio = _b[1];
    (0, react_2.useEffect)(function () {
        react_toastify_1.toast.warning("Application is under development , some features may not work properly");
        react_toastify_1.toast.warning('This is a demo website, you can not buy anything from here');
    }, []);
    (0, react_2.useEffect)(function () {
        var userData = localStorage.getItem('user');
        if (!userData)
            return;
        dispatch((0, UserDataSlice_1.setUserData)(JSON.parse(userData)));
    }, []);
    (0, react_2.useEffect)(function () {
        FetchDataOFProductAndCategory();
    }, []);
    var FetchDataOFProductAndCategory = function () { return __awaiter(_this, void 0, void 0, function () {
        var categoryData, productData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, category_1.get_all_categories)()];
                case 1:
                    categoryData = _a.sent();
                    if ((categoryData === null || categoryData === void 0 ? void 0 : categoryData.success) !== true)
                        react_toastify_1.toast.error(categoryData === null || categoryData === void 0 ? void 0 : categoryData.message);
                    dispatch((0, AdminSlice_1.setCategoryData)(categoryData === null || categoryData === void 0 ? void 0 : categoryData.data));
                    return [4 /*yield*/, (0, product_1.get_all_products)()];
                case 2:
                    productData = _a.sent();
                    if ((productData === null || productData === void 0 ? void 0 : productData.success) !== true)
                        react_toastify_1.toast.error(productData === null || productData === void 0 ? void 0 : productData.message);
                    dispatch((0, AdminSlice_1.setProductData)(productData === null || productData === void 0 ? void 0 : productData.data));
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_2.useEffect)(function () {
        dispatch((0, AdminSlice_1.setCatLoading)(loading));
        dispatch((0, AdminSlice_1.setProdLoading)(loading));
    }, [categoryLoading, productLoading, dispatch, loading]);
    return (<>
      <Navbar_1.default />
      <Hero_1.default setRatio={setRatio}/>
      {loading ? <loading_1.default /> :
            <>

            <TopCategories_1.default />
            <FeaturedProduct_1.default />
            <Footer_1.default />

          </>}
      <react_toastify_1.ToastContainer />
    </>);
}
exports.default = Home;
